import { useState, useEffect } from "react";
import { url } from "../../../data/data";
import Select from "../../../function/selectSimple";
import { getData, send } from "../../../function/Axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PRIORITY_OPTIONS = [
    { id: 1, name: "Priorité" },
    { id: 0, name: "Non-priorité" },
];

const todayInputValue = () => new Date().toISOString().split("T")[0];

const toWishDateIso = (dateInput) =>
    new Date(`${dateInput}T12:00:00`).toISOString();

export default function CardWish({ close }) {
    const [idtheme, setIdtheme] = useState(null);
    const [idTypeWish, setIdTypeWish] = useState(null);
    const [priority, setPriority] = useState(0);
    const [reason, setReason] = useState("");
    const [wishDate, setWishDate] = useState(todayInputValue);
    const [matricule, setMatricule] = useState("");
    const [listWish, setListWish] = useState([]);
    const [listTheme, setListTheme] = useState([]);
    const [listTypeWish, setListTypeWish] = useState([]);

    const getListTypeWish = async () => {
        const data = await getData(url + "wish_type");
        if (data.data != null) setListTypeWish(data.data);
    };

    const addNewWish = (employ, index = null) => {
        if (index !== null) {
            setListWish((previous) => previous.filter((_, i) => i !== index));
            return;
        }
        if (idtheme == null) {
            toast.warning("Veuillez sélectionner une formation.");
            return;
        }
        if (idTypeWish == null) {
            toast.warning("Veuillez sélectionner un type de souhait.");
            return;
        }
        if (!reason?.trim()) {
            toast.warning("Veuillez indiquer la raison de la demande.");
            return;
        }
        const exists = listWish.some((w) => w.Idbeneficiary === employ.id);
        if (exists) {
            toast.info("Ce participant est déjà dans la liste.");
            return;
        }
        setListWish((previous) => [
            ...previous,
            {
                Id: null,
                Idtheme: idtheme,
                idwish_type: idTypeWish,
                priority,
                reason: reason.trim(),
                IdWisher: 1,
                Idbeneficiary: employ.id,
                matricule: employ.matricule,
                name: employ.name,
                firstname: employ.firstname,
                priorityLabel: priority === 1 ? "Priorité" : "Non-priorité",
                active: 5,
                date: toWishDateIso(wishDate),
            },
        ]);
        setMatricule("");
    };

    const getListThemes = async () => {
        const datalistThemes = await getData(url + "training-themes");
        if (datalistThemes.data != null) setListTheme(datalistThemes.data);
    };

    const getUser = async (mat) => {
        if (!mat?.trim()) {
            toast.warning("Veuillez saisir un matricule.");
            return;
        }
        const data = await getData(url + `employ/getby?matricule=${mat.trim()}`);
        if (data.data == null) {
            toast.error("Aucun employé trouvé pour ce matricule.");
            return;
        }
        addNewWish(data.data);
    };

    const submit = async () => {
        if (!listWish.length) {
            toast.warning("Ajoutez au moins un participant.");
            return;
        }
        const allowed = [
            "Id",
            "Idtheme",
            "idwish_type",
            "priority",
            "reason",
            "IdWisher",
            "Idbeneficiary",
            "active",
            "date",
        ];
        const cleaned = listWish.map((w) =>
            Object.fromEntries(
                Object.entries({
                    ...w,
                    date: toWishDateIso(wishDate),
                }).filter(([key]) => allowed.includes(key))
            )
        );
        const result = await send(cleaned, url + "wish");
        if (result === true) {
            toast.success("Données enregistrées avec succès !");
            close(false);
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    };

    const handler = (opt) => {
        if (opt != null) setIdtheme(opt.id);
    };

    const handlerTypeWish = (opt) => {
        if (opt != null) setIdTypeWish(opt.id);
    };

    const handlerPriority = (opt) => {
        if (opt != null) setPriority(opt.id);
    };

    useEffect(() => {
        getListThemes();
        getListTypeWish();
    }, []);

    return (
        <div className="background_transparent_popup">
            <div className="grid grid-cols-1 bg-white p-8 rounded-card relative w-full max-w-lg max-h-[90vh] overflow-y-auto">
                <button
                    type="button"
                    className="absolute top-5 right-5 text-gray-500 hover:text-gray-800"
                    onClick={() => close(false)}
                    title="Fermer"
                >
                    <i className="fa-solid fa-xmark text-lg"></i>
                </button>

                <div className="flex flex-col items-center mb-4">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center">
                        <img src="demandeformation.svg" alt="" />
                    </div>
                    <h3 className="font-semibold text-gray-700 mt-2">Faire un souhait</h3>
                    <p className="text-xs text-gray-500 text-center mt-1">
                        Indiquez la formation, le type de demande, la priorité et la raison.
                    </p>
                </div>

                <label className="label-formulaire mt-8">Formation souhaitée</label>
                <Select options={listTheme} onChange={handler} />

                <label className="label-formulaire mt-8">Type de souhait</label>
                <Select options={listTypeWish} onChange={handlerTypeWish} />

                <label className="label-formulaire mt-8">Priorité de la demande</label>
                <Select
                    options={PRIORITY_OPTIONS}
                    onChange={handlerPriority}
                    placeholder="Choisir la priorité..."
                />

                <label className="label-formulaire mt-8">Date de la demande</label>
                <input
                    type="date"
                    className="input_singup w-full"
                    value={wishDate}
                    onChange={(e) => setWishDate(e.target.value)}
                />
                <p className="text-xs text-gray-400 mt-1">
                    Par défaut : date du jour (date de saisie).
                </p>

                <label className="label-formulaire mt-4">Raison de la demande</label>
                <textarea
                    className="input_singup w-full min-h-24 resize-y"
                    placeholder="Décrivez le motif ou le besoin lié à cette demande de formation..."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    maxLength={500}
                />
                <p className="text-xs text-gray-400 text-right mt-1">{reason.length}/500</p>

                <label className="label-formulaire mt-4">Participants</label>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Matricule du participant"
                        className="input_singup flex-1"
                        value={matricule}
                        onChange={(e) => setMatricule(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && getUser(matricule)}
                    />
                    <button
                        type="button"
                        className="btn-neutre-gray shrink-0"
                        onClick={() => getUser(matricule)}
                        title="Ajouter"
                    >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <div className="my-4">
                    {listWish.length === 0 ? (
                        <p className="text-sm text-gray-400 italic text-center py-4">
                            Aucun participant ajouté.
                        </p>
                    ) : (
                        <div className="max-h-48 overflow-y-auto border border-gray-200 rounded-lg">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
                                    <tr>
                                        <th className="tr-thead">Matricule</th>
                                        <th className="tr-thead">Nom</th>
                                        <th className="tr-thead">Priorité</th>
                                        <th className="tr-thead w-10"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listWish.map((w, k) => (
                                        <tr key={k} className="border-b border-gray-100">
                                            <td className="px-4 py-2 text-sm">{w.matricule}</td>
                                            <td className="px-4 py-2 text-sm">
                                                {w.name} {w.firstname}
                                            </td>
                                            <td className="px-4 py-2">
                                                <span
                                                    className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                                                        w.priority === 1
                                                            ? "bg-amber-100 text-amber-800"
                                                            : "bg-gray-100 text-gray-600"
                                                    }`}
                                                >
                                                    {w.priorityLabel}
                                                </span>
                                            </td>
                                            <td className="px-2 py-2">
                                                <button
                                                    type="button"
                                                    onClick={() => addNewWish(null, k)}
                                                    className="btn-neutre-gray"
                                                    title="Supprimer"
                                                >
                                                    <i className="fa-regular fa-trash-can"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-end gap-3 mt-2">
                    <button
                        type="button"
                        className="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium"
                        onClick={() => close(false)}
                    >
                        Annuler
                    </button>
                    <button type="button" className="btn-action" onClick={submit}>
                        Enregistrer
                    </button>
                </div>
            </div>
        </div>
    );
}
