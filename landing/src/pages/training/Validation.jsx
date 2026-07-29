
import { useEffect, useCallback } from "react";
import { getData } from "../../function/Axios";
import { Sidebar } from "../../components";
import { url, getTrainingStatusStyle } from "../../data/data";
import { useState } from "react";
import Select from "../../function/selectSimple";
import TrainingState from "./TrainingState";
import { formatDate } from "../../function/utils";

export default function Validation() {
    const acces = sessionStorage.getItem("access");
    const accesObj = JSON.parse(acces);
    const [data, setData] = useState([]);
    const [valueState, setValueState] = useState("");
    const [search, setSearch] = useState("");
    const [listStatus, setListStatus] = useState([]);
    const [statusSummary, setStatusSummary] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [seeTrainingListe, setSeeTrainingListe] = useState(false);
    const [viewMode, setViewMode] = useState("overview");

    const nbrSize = 10;
    const [nbrligne, setNbrLigne] = useState(0);
    const [numpage, setNumpage] = useState(1);

    const statusFilterId = selectedStatus?.idstatus ?? selectedStatus?.id ?? 0;

    const showTraining = (value) => {
        setSeeTrainingListe(true);
        setValueState(value);
    };

    const pagination = (value) => {
        const maxPage = Math.ceil(nbrligne / nbrSize) || 1;
        setNumpage(value < 1 ? 1 : value > maxPage ? maxPage : value);
    };

    const buildQuery = () => {
        const params = new URLSearchParams({
            pageNumber: String(numpage),
            pageSize: String(nbrSize),
        });
        if (search?.trim()) params.set("search", search.trim());
        if (statusFilterId) params.set("idstatus", String(statusFilterId));
        return params.toString();
    };

    const loadData = useCallback(async () => {
        const response = await getData(
            url + `v_training_validate/pagination?${buildQuery()}`
        );
        setData(response.data ?? []);
    }, [numpage, search, statusFilterId]);

    const getNbrLigne = useCallback(async () => {
        const params = new URLSearchParams();
        if (search?.trim()) params.set("search", search.trim());
        if (statusFilterId) params.set("idstatus", String(statusFilterId));
        const qs = params.toString();
        const response = await getData(
            url + `v_training_validate/count${qs ? `?${qs}` : ""}`
        );
        if (response.data != null) setNbrLigne(response.data);
    }, [search, statusFilterId]);

    const getStatusSummary = async () => {
        const response = await getData(url + "statistique/status-training");
        if (response.data != null) setStatusSummary(response.data);
    };

    const getListStatus = async () => {
        const response = await getData(url + "training-status");
        if (response.data != null) setListStatus(response.data);
    };

    const applyStatusFilter = (statusItem) => {
        if (
            selectedStatus &&
            (selectedStatus.idstatus ?? selectedStatus.id) ===
                (statusItem?.idstatus ?? statusItem?.id)
        ) {
            setSelectedStatus(null);
        } else {
            setSelectedStatus(statusItem);
        }
        setNumpage(1);
        setViewMode("list");
    };

    const totalFormations = statusSummary.reduce(
        (sum, s) => sum + (s.count ?? 0),
        0
    );

    const canSeeSessions =
        accesObj &&
        accesObj?.validation?.voir_liste_sessions != null &&
        accesObj?.validation?.voir_liste_sessions !== undefined;

    useEffect(() => {
        getListStatus();
        getStatusSummary();
    }, []);

    useEffect(() => {
        getNbrLigne();
    }, [getNbrLigne]);

    useEffect(() => {
        if (viewMode === "list") loadData();
    }, [loadData, viewMode]);

    const StatusSummaryCards = ({ large = false }) => (
        <div
            className={`grid grid-cols-1 sm:grid-cols-2 ${
                large ? "lg:grid-cols-3 xl:grid-cols-4" : "lg:grid-cols-5"
            } gap-4`}
        >
            <button
                type="button"
                onClick={() => {
                    setSelectedStatus(null);
                    setNumpage(1);
                    if (viewMode === "overview") setViewMode("list");
                }}
                className={`text-left rounded-xl border-2 p-4 transition-all hover:shadow-md ${
                    !selectedStatus
                        ? "border-softbleu bg-softbleutini-12/10 ring-2 ring-softbleu/30"
                        : "border-gray-200 bg-white hover:border-gray-300"
                } ${large ? "p-6" : ""}`}
            >
                <div className="flex items-center justify-between mb-2">
                    <span
                        className={`font-bold text-gray-900 ${
                            large ? "text-4xl" : "text-2xl"
                        }`}
                    >
                        {totalFormations}
                    </span>
                    <i className="fa-solid fa-layer-group text-softbleu text-xl"></i>
                </div>
                <p className="text-sm font-medium text-gray-600">Toutes les formations</p>
            </button>

            {statusSummary.map((item) => {
                const id = item.idstatus ?? item.id;
                const style = getTrainingStatusStyle(id);
                const isActive =
                    selectedStatus &&
                    (selectedStatus.idstatus ?? selectedStatus.id) === id;
                return (
                    <button
                        key={id}
                        type="button"
                        onClick={() =>
                            applyStatusFilter({
                                idstatus: id,
                                statusName: item.statusName,
                            })
                        }
                        className={`text-left rounded-xl border-2 p-4 transition-all hover:shadow-md ${style.card} ${
                            isActive ? "ring-2 ring-offset-1 ring-gray-400" : ""
                        } ${large ? "p-6" : ""}`}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span
                                className={`font-bold text-gray-900 ${
                                    large ? "text-4xl" : "text-2xl"
                                }`}
                            >
                                {item.count ?? 0}
                            </span>
                            <i className={`${style.icon} text-xl`}></i>
                        </div>
                        <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${style.badge}`}
                        >
                            {item.statusName}
                        </span>
                    </button>
                );
            })}
        </div>
    );

    return (
        <>
            {seeTrainingListe ? (
                <TrainingState close={setSeeTrainingListe} value={valueState} />
            ) : (
                <div className="flex h-screen ">
                    <Sidebar />
                    <main className="flex-1 ">
                        <div className="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-1 md:p-6">
                            <div className="max-w-7xl mx-auto bg-white p-6 md:p-10">
                                <div className="p-4 mb-4 border-b border-gray-200 sticky top-0 z-50 bg-white">
                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800">
                                                Liste des formations validées
                                            </h2>
                                            {viewMode === "list" && (
                                                <p className="text-xs text-gray-400 mt-1">
                                                    Page {numpage}/
                                                    {Math.ceil(nbrligne / nbrSize) || 1}
                                                    {selectedStatus
                                                        ? ` — filtre : ${selectedStatus.statusName ?? selectedStatus.name}`
                                                        : ""}
                                                </p>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap items-center gap-2">
                                            <div className="flex rounded-lg border border-gray-200 overflow-hidden">
                                                <button
                                                    type="button"
                                                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                                                        viewMode === "overview"
                                                            ? "bg-softbleu text-white"
                                                            : "bg-white text-gray-600 hover:bg-gray-50"
                                                    }`}
                                                    onClick={() => setViewMode("overview")}
                                                >
                                                    Vue d'ensemble
                                                </button>
                                                <button
                                                    type="button"
                                                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                                                        viewMode === "list"
                                                            ? "bg-softbleu text-white"
                                                            : "bg-white text-gray-600 hover:bg-gray-50"
                                                    }`}
                                                    onClick={() => setViewMode("list")}
                                                >
                                                    Liste détaillée
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {viewMode === "overview" ? (
                                    <div className="mt-4">
                                        <p className="text-sm text-gray-500 mb-6">
                                            Répartition des formations par statut. Cliquez sur un
                                            statut pour afficher le détail.
                                        </p>
                                        <StatusSummaryCards large />
                                    </div>
                                ) : (
                                    <>
                                        <div className="mb-6">
                                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
                                                Synthèse par statut
                                            </p>
                                            <StatusSummaryCards />
                                        </div>

                                        <div className="flex flex-wrap items-center gap-3 mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                            <div className="relative flex-1 min-w-[200px]">
                                                <input
                                                    type="text"
                                                    placeholder="Rechercher par thème…"
                                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-softbleu"
                                                    value={search}
                                                    onChange={(e) => setSearch(e.target.value)}
                                                    onKeyDown={(e) =>
                                                        e.key === "Enter" && setNumpage(1)
                                                    }
                                                />
                                                <i className="fa-solid fa-magnifying-glass w-5 h-5 text-gray-400 absolute left-3 top-2.5"></i>
                                            </div>
                                            <div className="relative min-w-[180px]">
                                                <Select
                                                    options={listStatus}
                                                    placeholder="Filtrer par statut"
                                                    onChange={(opt) => {
                                                        setSelectedStatus(
                                                            opt
                                                                ? {
                                                                      idstatus: opt.id,
                                                                      statusName: opt.name,
                                                                  }
                                                                : null
                                                        );
                                                        setNumpage(1);
                                                    }}
                                                    css="pl-3 pr-4 py-2 border border-gray-300 rounded-lg text-sm w-full"
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                className="btn-neutre-gray"
                                                onClick={() => {
                                                    setNumpage(1);
                                                    getNbrLigne();
                                                    loadData();
                                                }}
                                            >
                                                Rechercher
                                            </button>
                                            <div className="flex gap-2">
                                                <button
                                                    type="button"
                                                    className="btn-neutre-gray"
                                                    onClick={() => pagination(numpage - 1)}
                                                    title="Précédent"
                                                >
                                                    <i className="fas fa-arrow-left"></i>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn-neutre-gray"
                                                    onClick={() => pagination(numpage + 1)}
                                                    title="Suivant"
                                                >
                                                    <i className="fas fa-arrow-right"></i>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="overflow-x-auto mt-2 space-y-3">
                                            {data.length === 0 ? (
                                                <p className="text-center text-gray-400 italic py-12">
                                                    Aucune formation trouvée pour ces critères.
                                                </p>
                                            ) : (
                                                data.map((value) => {
                                                    const style = getTrainingStatusStyle(
                                                        value.statu
                                                    );
                                                    return (
                                                        <div
                                                            key={value.id}
                                                            className={`border border-gray-200 rounded-lg bg-white border-l-4 ${style.border} hover:shadow-sm transition-shadow`}
                                                        >
                                                            <div className="flex flex-wrap items-center gap-4 p-4">
                                                                <div className="flex-1 min-w-[200px]">
                                                                    <div className="flex items-center gap-2 mb-1">
                                                                        <span
                                                                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-medium ${style.badge}`}
                                                                        >
                                                                            <i className={style.icon}></i>
                                                                            {value.nameStatus}
                                                                        </span>
                                                                        <span className="text-xs text-gray-400">
                                                                            {formatDate(value.date)}
                                                                        </span>
                                                                    </div>
                                                                    <h4 className="font-semibold text-gray-900 capitalize">
                                                                        {value.themeName}
                                                                    </h4>
                                                                </div>

                                                                <div className="min-w-[140px]">
                                                                    <p className="text-xs text-gray-500 mb-0.5">
                                                                        Formateur
                                                                    </p>
                                                                    <p className="text-sm font-medium text-gray-800">
                                                                        {value.trainerName}
                                                                    </p>
                                                                    <p className="text-xs text-gray-400">
                                                                        NIF : {value.nif}
                                                                    </p>
                                                                </div>

                                                                <div className="min-w-[140px]">
                                                                    <p className="text-xs text-gray-500 mb-0.5">
                                                                        Validé par
                                                                    </p>
                                                                    <p className="text-sm text-gray-800 capitalize">
                                                                        {value.adminName}{" "}
                                                                        {value.adminFirstname}
                                                                    </p>
                                                                </div>

                                                                {canSeeSessions && (
                                                                    <button
                                                                        type="button"
                                                                        className="btn-neutre-gray shrink-0"
                                                                        title="Voir les sessions"
                                                                        onClick={() =>
                                                                            showTraining(value)
                                                                        }
                                                                    >
                                                                        <i className="fas fa-file-alt text-softbleu"></i>
                                                                        <span className="ml-2 text-sm hidden sm:inline">
                                                                            Sessions
                                                                        </span>
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </main>
                </div>
            )}
        </>
    );
}
