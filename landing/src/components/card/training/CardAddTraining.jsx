import { useEffect, useState } from "react";
import { textbackground, url } from "../../../data/data";
import Select from "../../../function/selectSimple";
import { getData, send } from "../../../function/Axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatMoney } from "../../../function/utils";

const priorityLabel = (priority) => (priority === 1 ? "Priorité" : "Non-priorité");
const priorityBadgeClass = (priority) =>
    priority === 1
        ? "bg-amber-100 text-amber-800"
        : "bg-gray-100 text-gray-600";

const truncateReason = (text, max = 60) => {
    if (!text?.trim()) return "—";
    return text.length > max ? `${text.slice(0, max)}…` : text;
};

export default function CardAddTraining({ close }) {
    const [matricule, setMatricule] = useState("");
    const [listTheme, setListTheme] = useState([]);
    const [listParticipant, setListParticipant] = useState([]);
    const [listTrainer, setListTrainer] = useState([]);
    const [selectedThemeName, setSelectedThemeName] = useState("");
    const [value, setValue] = useState({
        Id: null,
        Idtheme: null,
        Idadmin: 1,
        Idtrainer: null,
        Date: new Date().toISOString(),
        Statu: 1,
        participant: [],
    });

    const handlerVariable = (name, val, setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: val,
        }));
    };

    const getUser = async (mat) => {
        if (!mat?.trim()) {
            toast.warning("Veuillez saisir un matricule.");
            return;
        }
        if (!value.Idtheme) {
            toast.warning("Sélectionnez d'abord une formation.");
            return;
        }
        const data = await getData(url + `employ/getby?matricule=${mat.trim()}`);
        if (data.data == null) {
            toast.error("Aucun employé trouvé pour ce matricule.");
            return;
        }
        const participant = {
            idBeneficiary: data.data.id,
            beneficiaryMatricule: data.data.matricule,
            beneficiaryName: data.data.name,
            beneficiaryFirstname: data.data.firstname,
            priority: 0,
        };
        setListParticipant((previous) => {
            const exists = previous.some((p) => p.idBeneficiary === participant.idBeneficiary);
            if (exists) {
                toast.info("Ce participant est déjà dans la liste.");
                return previous;
            }
            return [...previous, participant];
        });
        setMatricule("");
    };

    const getListThemes = async () => {
        const datalistThemes = await getData(url + "training-themes");
        if (datalistThemes.data != null) setListTheme(datalistThemes.data);
    };

    const getListTrainer = async (idtheme) => {
        const datalistThemes = await getData(
            url + `vtrainertheme/getbyidtheme?idtheme=${idtheme}`
        );
        if (datalistThemes.data != null) setListTrainer(datalistThemes.data);
    };

    const getListParticipant = async (idtheme) => {
        const datalistThemes = await getData(
            url + `v_wish/participant?idtheme=${idtheme}`
        );
        if (datalistThemes.data != null) {
            const sorted = [...datalistThemes.data].sort(
                (a, b) => (b.priority ?? 0) - (a.priority ?? 0)
            );
            setListParticipant(sorted);
        }
    };

    const handlerTheme = (opt) => {
        if (opt != null) {
            setSelectedThemeName(opt.name);
            getListParticipant(opt.id);
            getListTrainer(opt.id);
            handlerVariable("Idtheme", opt.id, setValue);
            handlerVariable("Idtrainer", null, setValue);
            handlerVariable("participant", [], setValue);
        }
    };

    const isParticipantSelected = (idBeneficiary) =>
        value.participant.some((item) => item.IdParticipant === idBeneficiary);

    const addParticipant = (participantRow) => {
        const id = participantRow.idBeneficiary ?? participantRow.IdBeneficiary;
        setValue((previous) => {
            const currentArray = Array.isArray(previous.participant)
                ? previous.participant
                : [];
            const exists = currentArray.some((item) => item.IdParticipant === id);
            const newArray = exists
                ? currentArray.filter((item) => item.IdParticipant !== id)
                : [
                      ...currentArray,
                      {
                          Id: null,
                          IdTrainingValidate: null,
                          IdParticipant: id,
                      },
                  ];
            return { ...previous, participant: newArray };
        });
    };

    const selectAllParticipants = () => {
        const all = listParticipant.map((p) => ({
            Id: null,
            IdTrainingValidate: null,
            IdParticipant: p.idBeneficiary ?? p.IdBeneficiary,
        }));
        setValue((previous) => ({ ...previous, participant: all }));
    };

    const clearParticipants = () => {
        setValue((previous) => ({ ...previous, participant: [] }));
    };

    useEffect(() => {
        getListThemes();
    }, []);

    const submit = async () => {
        if (!value.Idtheme) {
            toast.warning("Veuillez sélectionner une formation.");
            return;
        }
        if (!value.Idtrainer) {
            toast.warning("Veuillez sélectionner un formateur.");
            return;
        }
        if (!value.participant.length) {
            toast.warning("Sélectionnez au moins un participant.");
            return;
        }
        const data = await send(value, url + "training-validate");
        if (data === true) {
            toast.success("Formation validée avec succès !");
            close(false);
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    };

    const selectedCount = value.participant.length;

    const selectedParticipantsDetails = listParticipant.filter((p) =>
        isParticipantSelected(p.idBeneficiary ?? p.IdBeneficiary)
    );

    return (
        <div className="background_transparent_popup">
            <div className="bg-white p-8 rounded-card relative w-full max-w-5xl max-h-[90vh] overflow-y-auto">
                <button
                    type="button"
                    className="absolute top-5 right-5 text-gray-500 hover:text-gray-800"
                    onClick={() => close(false)}
                    title="Fermer"
                >
                    <i className="fa-solid fa-xmark text-lg"></i>
                </button>

                <div className="flex items-start gap-4 mb-6 pr-8">
                    <div className="w-14 h-14 rounded-full bg-softbleutini-12/20 flex items-center justify-center shrink-0">
                        <i className="fa-solid fa-graduation-cap text-softbleu text-xl"></i>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                            Validation d'une formation
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Choisissez le thème, le formateur et les participants à valider.
                        </p>
                    </div>
                </div>

                <section className="border border-gray-200 rounded-lg p-4 mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                        1. Formation
                    </h4>
                    <label className="label-formulaire">Thème de formation</label>
                    <Select options={listTheme} onChange={handlerTheme} />
                    {selectedThemeName && (
                        <p className="text-xs text-gray-500 mt-2">
                            Sélectionné : <span className="font-medium">{selectedThemeName}</span>
                        </p>
                    )}
                </section>

                <section className="border border-gray-200 rounded-lg p-4 mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                        2. Formateur et tarif
                    </h4>
                    {listTrainer.length === 0 ? (
                        <p className="text-sm text-gray-400 italic py-4 text-center">
                            {value.Idtheme
                                ? "Aucun formateur disponible pour ce thème."
                                : "Sélectionnez un thème pour afficher les formateurs."}
                        </p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="tr-thead w-10"></th>
                                        <th className="tr-thead">Organisme</th>
                                        <th className="tr-thead">Contact</th>
                                        <th className="tr-thead">Tarif</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {listTrainer.map((trainer, index) => {
                                        const isSelected = value.Idtrainer === trainer.idtrainer;
                                        return (
                                            <tr
                                                key={trainer.id ?? index}
                                                className={`cursor-pointer transition-colors ${
                                                    isSelected
                                                        ? "bg-softbleutini-12/10 ring-1 ring-softbleu"
                                                        : trainer.active === 4
                                                        ? "bg-gray-50 hover:bg-gray-100"
                                                        : "hover:bg-gray-50"
                                                }`}
                                                onClick={() =>
                                                    handlerVariable(
                                                        "Idtrainer",
                                                        trainer.idtrainer,
                                                        setValue
                                                    )
                                                }
                                            >
                                                <td className="px-4 py-3 text-center">
                                                    <input
                                                        type="radio"
                                                        name="training"
                                                        checked={isSelected}
                                                        onChange={() =>
                                                            handlerVariable(
                                                                "Idtrainer",
                                                                trainer.idtrainer,
                                                                setValue
                                                            )
                                                        }
                                                    />
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {trainer.nameTrainer}
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        NIF : {trainer.nif} — Stat : {trainer.stat}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <span
                                                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${textbackground[index % textbackground.length]}`}
                                                    >
                                                        {trainer.email}
                                                    </span>
                                                    <div className="text-xs text-gray-500 mt-1">
                                                        Tél. : {trainer.tel}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                                        {formatMoney(trainer.unitprice)} AR
                                                    </span>
                                                    <div className="text-xs text-gray-500 mt-1">
                                                        {trainer.nameunit} — max {trainer.maxpersonne} pers.
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>

                <section className="border border-gray-200 rounded-lg p-4 mb-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <h4 className="text-sm font-semibold text-gray-700">
                            3. Participants ({selectedCount} sélectionné
                            {selectedCount > 1 ? "s" : ""})
                        </h4>
                        {listParticipant.length > 0 && (
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    className="text-xs px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50"
                                    onClick={selectAllParticipants}
                                >
                                    Tout sélectionner
                                </button>
                                <button
                                    type="button"
                                    className="text-xs px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50"
                                    onClick={clearParticipants}
                                >
                                    Tout désélectionner
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="flex gap-2 mb-4">
                        <input
                            type="text"
                            placeholder="Matricule d'un participant à ajouter"
                            className="input_singup flex-1"
                            value={matricule}
                            onChange={(e) => setMatricule(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && getUser(matricule)}
                        />
                        <button
                            type="button"
                            className="btn-neutre-gray shrink-0"
                            onClick={() => getUser(matricule)}
                            title="Rechercher"
                        >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>

                    {listParticipant.length === 0 ? (
                        <p className="text-sm text-gray-400 italic py-4 text-center">
                            {value.Idtheme
                                ? "Aucune demande de souhait en attente pour ce thème."
                                : "Sélectionnez un thème pour afficher les demandeurs."}
                        </p>
                    ) : (
                        <div className="overflow-x-auto max-h-64 overflow-y-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
                                    <tr>
                                        <th className="tr-thead w-10"></th>
                                        <th className="tr-thead">Priorité</th>
                                        <th className="tr-thead">Matricule</th>
                                        <th className="tr-thead">Demandeur</th>
                                        <th className="tr-thead">Bénéficiaire</th>
                                        <th className="tr-thead">Raison de la demande</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {listParticipant.map((p, k) => {
                                        const beneficiaryId =
                                            p.idBeneficiary ?? p.IdBeneficiary;
                                        const checked = isParticipantSelected(beneficiaryId);
                                        return (
                                            <tr
                                                key={beneficiaryId ?? k}
                                                className={`cursor-pointer ${
                                                    checked ? "bg-softbleutini-12/10" : "hover:bg-gray-50"
                                                }`}
                                                onClick={() => addParticipant(p)}
                                            >
                                                <td className="px-4 py-3 text-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={checked}
                                                        onChange={() => addParticipant(p)}
                                                        onClick={(e) => e.stopPropagation()}
                                                    />
                                                </td>
                                                <td className="px-4 py-3">
                                                    <span
                                                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${priorityBadgeClass(p.priority)}`}
                                                    >
                                                        {priorityLabel(p.priority)}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3 text-sm">
                                                    {p.wisherMatricule ?? p.beneficiaryMatricule}
                                                </td>
                                                <td className="px-4 py-3 text-sm lowercase">
                                                    {p.wisherName
                                                        ? `${p.wisherName} ${p.wisherFirstname}`
                                                        : "—"}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <span
                                                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium lowercase ${textbackground[k % textbackground.length]}`}
                                                    >
                                                        {p.beneficiaryName} {p.beneficiaryFirstname}
                                                    </span>
                                                    <div className="text-xs text-gray-500 mt-1">
                                                        Matricule : {p.beneficiaryMatricule}
                                                    </div>
                                                </td>
                                                <td
                                                    className="px-4 py-3 text-sm text-gray-600 max-w-xs"
                                                    title={p.reason || undefined}
                                                >
                                                    {truncateReason(p.reason)}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {selectedParticipantsDetails.length > 0 && (
                        <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                            <p className="text-xs font-semibold text-gray-600 mb-2">
                                Raisons des demandes sélectionnées
                            </p>
                            <ul className="space-y-2 max-h-32 overflow-y-auto">
                                {selectedParticipantsDetails.map((p, idx) => (
                                    <li key={idx} className="text-sm text-gray-700">
                                        <span className="font-medium">
                                            {p.beneficiaryName} {p.beneficiaryFirstname}
                                        </span>
                                        {p.reason?.trim() ? (
                                            <span className="text-gray-600"> — {p.reason}</span>
                                        ) : (
                                            <span className="text-gray-400 italic"> — Aucune raison renseignée</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>

                <div className="flex items-center justify-end gap-3 pt-2 border-t border-gray-100">
                    <button
                        type="button"
                        className="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium"
                        onClick={() => close(false)}
                    >
                        Annuler
                    </button>
                    <button
                        type="button"
                        className="btn-action"
                        onClick={submit}
                    >
                        Enregistrer
                    </button>
                </div>
            </div>
        </div>
    );
}
