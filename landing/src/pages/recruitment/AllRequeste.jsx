
import { useEffect, useCallback, useMemo } from "react";
import { getData, update } from "../../function/Axios";
import { url_recrutement, textbackground } from "../../data/data";
import { useState } from "react";
import { Sidebar } from "../../components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StepStat from "./StepStat";
import AddTimeRecruitment from "../../components/card/criterien/AddTimeRecruitment";
import CardForwardLinkPostulation from "../../components/card/popup/CardForwardLinkPostulation";

const getStatusId = (value) => value.statusId ?? value.StatusId ?? null;

const formatDate = (date) => (date ? date.split("T")[0] : "—");

const buildRecruitmentRequestPayload = (value, overrides = {}) => ({
    id: value.id,
    postId: value.postId ?? value.PostId,
    numberOfCandidates: value.numberOfCandidates ?? value.NumberOfCandidates,
    requesterId: value.requesterId ?? value.RequesterId,
    requestDate: value.requestDate ?? value.RequestDate,
    motifRecrutement: value.motifRecrutement ?? value.MotifRecrutement ?? "",
    statusSetByUserId: value.statusSetByUserId ?? value.StatusSetByUserId ?? null,
    statusSetDate: value.statusSetDate ?? value.StatusSetDate ?? null,
    statusId: value.statusId ?? value.StatusId ?? null,
    datestart: value.datestart ?? null,
    dateend: value.dateend ?? null,
    ...overrides,
});

export default function AllRequeste() {
    const acces = sessionStorage.getItem("access");
    const accesObj = JSON.parse(acces);
    const [nameE] = useState("recruitment_request");
    const [data, setData] = useState([]);
    const [showStep, setShowStep] = useState(false);
    const [post, setPost] = useState(null);
    const nbrSize = 50;
    const [numpage, setNumpage] = useState(1);
    const [showDate, setShowDate] = useState(false);
    const [upDateRecruitement, setUpDateRecruitement] = useState(null);
    const [getLinkRecrutement, setGetLinkRecrutement] = useState(false);
    const [paramIdRequestAndIdpost, setParamIdRequestionAndIdpost] = useState(false);

    const canEditDates =
        accesObj &&
        accesObj?.alldemande?.modification_date_recrutement != null &&
        accesObj?.alldemande?.modification_date_recrutement !== undefined;
    const canValidate =
        accesObj &&
        accesObj?.alldemande?.validation_demande_d_offre != null &&
        accesObj?.alldemande?.validation_demande_d_offre !== undefined;
    const canSeeApplicants =
        accesObj &&
        accesObj?.alldemande?.voir_liste_postulants != null &&
        accesObj?.alldemande?.voir_liste_postulants !== undefined;

    const pagination = (value) => {
        setNumpage(value < 1 ? 1 : value);
    };

    const loadData = useCallback(async () => {
        const response = await getData(
            url_recrutement + `${nameE}/pagination?pageNumber=${numpage}&pageSize=${nbrSize}`
        );
        setData(response.data ?? []);
    }, [numpage, nameE]);

    const changeState = async (value, statusId) => {
        const payload = buildRecruitmentRequestPayload(value, {
            statusSetByUserId: Number(sessionStorage.getItem("userId")),
            statusId,
            statusSetDate: new Date().toISOString().split("T")[0],
        });
        const result = await update(payload, url_recrutement + "recruitment_request");
        if (result === true) {
            toast.success("Données enregistrées avec succès !");
            loadData();
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    };

    const changeDateRecruitement = (value) => {
        setUpDateRecruitement(value);
        setShowDate(true);
    };

    const showLinkRecrutementPop = (idrequest, idpost) => {
        setGetLinkRecrutement(true);
        setParamIdRequestionAndIdpost(idrequest + "|" + idpost);
    };

    useEffect(() => {
        loadData();
    }, [loadData]);

    const validatedRequests = useMemo(
        () => data.filter((value) => {
            const statusId = getStatusId(value);
            return statusId === 1 || statusId === 2;
        }),
        [data]
    );

    const pendingRequests = useMemo(
        () => data.filter((value) => getStatusId(value) == null),
        [data]
    );

    const renderStatusBadge = (statusId) => {
        if (statusId === 1) {
            return (
                <span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[6]}`}>
                    Validée
                </span>
            );
        }
        if (statusId === 2) {
            return (
                <span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[1]}`}>
                    Refusée
                </span>
            );
        }
        return <span class="text-sm text-gray-400">—</span>;
    };

    const renderOfferPeriod = (value) => (
        <span>
            {formatDate(value.datestart)} — {formatDate(value.dateend)}
        </span>
    );

    const renderEditDateButton = (value) =>
        canEditDates ? (
            <button className="btn-neutre-gray" onClick={() => changeDateRecruitement(value)}>
                <i class="fa-solid fa-pen text-gray-400"></i>
            </button>
        ) : null;

    const renderApplicantsCell = (value, index) =>
        canSeeApplicants ? (
            <td className="px-6 py-4">
                <button onClick={() => { setPost(value); setShowStep(true); }}>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[index]}`}>
                        {value.nbrpostulant}
                    </span>
                </button>
            </td>
        ) : null;

    const renderLinkCell = (value) => (
        <td className="px-6 py-4">
            <button
                className="btn-neutre-gray"
                onClick={() => showLinkRecrutementPop(value.requesterId, value.postId)}
            >
                <i class="fa-solid fa-link text-gray-400"></i>
            </button>
        </td>
    );

    const renderValidatedRow = (value, index) => {
        const statusId = getStatusId(value);
        return (
            <tr key={value.id} className="hover:bg-gray-50">
                <td class="px-6 py-4 text-sm text-gray-500">{value.id}</td>
                <td class="px-6 py-4 text-sm text-gray-500">{value.nomPost}</td>
                <td class="px-6 py-4 text-sm text-gray-500">{formatDate(value.requestDate)}</td>
                <td class="px-6 py-4 text-sm text-gray-500">{formatDate(value.statusSetDate)}</td>
                <td class="px-6 py-4 text-sm text-gray-500">{renderOfferPeriod(value)}</td>
                {canEditDates ? (
                    <td class="px-6 py-4 text-sm text-gray-500">{renderEditDateButton(value)}</td>
                ) : null}
                <td class="px-6 py-4">{renderStatusBadge(statusId)}</td>
                <td class="px-6 py-4">
                    <span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[index]}`}>
                        {value.numberOfCandidates}
                    </span>
                </td>
                {renderApplicantsCell(value, index)}
                {renderLinkCell(value)}
            </tr>
        );
    };

    const renderPendingRow = (value, index) => (
        <tr key={value.id} className="hover:bg-gray-50">
            <td class="px-6 py-4 text-sm text-gray-500">{value.id}</td>
            <td class="px-6 py-4 text-sm text-gray-500">{value.nomPost}</td>
            <td class="px-6 py-4 text-sm text-gray-500">{formatDate(value.requestDate)}</td>
            <td class="px-6 py-4 text-sm text-gray-500">{renderOfferPeriod(value)}</td>
            {canEditDates ? (
                <td class="px-6 py-4 text-sm text-gray-500">{renderEditDateButton(value)}</td>
            ) : null}
            <td class="px-6 py-4">
                <span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[index]}`}>
                    {value.numberOfCandidates}
                </span>
            </td>
            {canValidate ? (
                <td class="px-6 py-4">
                    <div class="flex flex-wrap gap-2">
                        <button
                            onClick={() => changeState(value, 2)}
                            class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[1]}`}
                        >
                            Refuser
                        </button>
                        <button
                            onClick={() => changeState(value, 1)}
                            class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[6]}`}
                        >
                            Valider
                        </button>
                    </div>
                </td>
            ) : null}
            {renderApplicantsCell(value, index)}
            {renderLinkCell(value)}
        </tr>
    );

    const renderEmptyRow = (colSpan, message) => (
        <tr>
            <td colSpan={colSpan} class="px-6 py-8 text-center text-sm text-gray-500">
                {message}
            </td>
        </tr>
    );

    return (
        <>
            {showDate ? <AddTimeRecruitment valueUp={upDateRecruitement} close={setShowDate} /> : <></>}
            {getLinkRecrutement ? (
                <CardForwardLinkPostulation closePopup={setGetLinkRecrutement} parametres={paramIdRequestAndIdpost} />
            ) : (
                <></>
            )}
            {showStep ? (
                <StepStat value={post} close={setShowStep} />
            ) : (
                <div class="flex h-screen ">
                    <Sidebar />
                    <main class="flex-1 ">
                        <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                            <div className=" max-w-7xl mx-auto bg-white p-10 ">
                                <div class="p-4 mb-2 border-b border-gray-200 sticky top-0 z-50 pink ">
                                    <div class="flex items-center justify-between">
                                        <h2 class="text-xl font-semibold text-gray-800">Toutes les demandes de recrutement</h2>
                                        <div className="flex space-x-2">
                                            <button className="btn-neutre-gray" onClick={() => pagination(numpage - 1)} title="Précédent">
                                                <i className="fas fa-arrow-left"></i>
                                            </button>
                                            <button className="btn-neutre-gray" onClick={() => pagination(numpage + 1)} title="Suivant">
                                                <i className="fas fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <section class="mt-6">
                                    <div class="flex items-center justify-between mb-3">
                                        <h3 class="text-lg font-semibold text-gray-800">
                                            Demandes traitées
                                        </h3>
                                        <span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[6]}`}>
                                            {validatedRequests.length}
                                        </span>
                                    </div>
                                    <div class="overflow-x-auto border border-gray-200 rounded-lg">
                                        <table class="w-full">
                                            <thead class="bg-gray-50 border-b border-gray-200">
                                                <tr>
                                                    <th class="tr-thead w-8">#</th>
                                                    <th class="tr-thead">Poste</th>
                                                    <th class="tr-thead">Date demande</th>
                                                    <th class="tr-thead">Date changement statut</th>
                                                    <th class="tr-thead">Période de l'offre</th>
                                                    {canEditDates ? <th class="tr-thead"></th> : null}
                                                    <th class="tr-thead">Statut</th>
                                                    <th class="tr-thead">Nb candidats</th>
                                                    {canSeeApplicants ? <th class="tr-thead">Postulants</th> : null}
                                                    <th class="tr-thead">Lien</th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200">
                                                {validatedRequests.length > 0
                                                    ? validatedRequests.map((value, index) => renderValidatedRow(value, index))
                                                    : renderEmptyRow(
                                                        7 + (canEditDates ? 1 : 0) + (canSeeApplicants ? 1 : 0),
                                                        "Aucune demande validée ou refusée pour le moment."
                                                    )}
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                <section class="mt-10">
                                    <div class="flex items-center justify-between mb-3">
                                        <h3 class="text-lg font-semibold text-gray-800">
                                            Demandes en attente de validation
                                        </h3>
                                        <span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[3]}`}>
                                            {pendingRequests.length}
                                        </span>
                                    </div>
                                    <div class="overflow-x-auto border border-gray-200 rounded-lg">
                                        <table class="w-full">
                                            <thead class="bg-gray-50 border-b border-gray-200">
                                                <tr>
                                                    <th class="tr-thead w-8">#</th>
                                                    <th class="tr-thead">Poste</th>
                                                    <th class="tr-thead">Date demande</th>
                                                    <th class="tr-thead">Période de l'offre</th>
                                                    {canEditDates ? <th class="tr-thead"></th> : null}
                                                    <th class="tr-thead">Nb candidats</th>
                                                    {canValidate ? <th class="tr-thead">Validation</th> : null}
                                                    {canSeeApplicants ? <th class="tr-thead">Postulants</th> : null}
                                                    <th class="tr-thead">Lien</th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200">
                                                {pendingRequests.length > 0
                                                    ? pendingRequests.map((value, index) => renderPendingRow(value, index))
                                                    : renderEmptyRow(
                                                        5 + (canEditDates ? 1 : 0) + (canValidate ? 1 : 0) + (canSeeApplicants ? 1 : 0),
                                                        "Aucune demande en attente de validation."
                                                    )}
                                            </tbody>
                                        </table>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </main>
                </div>
            )}
        </>
    );
}
