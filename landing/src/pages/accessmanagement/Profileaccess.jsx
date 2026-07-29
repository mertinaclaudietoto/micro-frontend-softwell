
import { textbackground, url } from "../../data/data";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { deletev, getData } from "../../function/Axios";
import Setaccess from "./Setaccess";
import { Sidebar } from "../../components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SYSTEM_ROLE_MAX_ID = 4;

export default function ProfileAccess() {
    const acces = sessionStorage.getItem("access");
    const accesObj = JSON.parse(acces);

    const [search, setSearch] = useState("");
    const [close, setClose] = useState(false);
    const [updateValue, setUpDateValue] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const canAdd =
        accesObj &&
        accesObj?.profile?.ajout != null &&
        accesObj?.profile?.ajout !== undefined;
    const canEdit =
        accesObj &&
        accesObj?.profile?.modification != null &&
        accesObj?.profile?.modification !== undefined;
    const canDelete =
        accesObj &&
        accesObj?.profile?.suppression != null &&
        accesObj?.profile?.suppression !== undefined;

    const getRole = async () => {
        setLoading(true);
        try {
            const response = await getData(url + "roles");
            if (response.data != null) {
                setData(response.data);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getRole();
    }, []);

    const filteredProfiles = useMemo(() => {
        const keyword = search.trim().toLowerCase();
        if (!keyword) return data;
        return data.filter((profile) =>
            (profile.name ?? "").toLowerCase().includes(keyword)
        );
    }, [data, search]);

    const changeValue = (profile) => {
        setUpDateValue(profile);
        setClose(true);
    };

    const deleteProfile = async (profile) => {
        if (profile.id <= SYSTEM_ROLE_MAX_ID) {
            toast.error("Ce profil système ne peut pas être supprimé.");
            return;
        }

        const confirmed = window.confirm(
            `Supprimer le profil « ${profile.name} » ? Cette action est irréversible.`
        );
        if (!confirmed) return;

        const result = await deletev(profile, url + "roles");
        if (result === true) {
            toast.success("Profil supprimé avec succès !");
            getRole();
        } else {
            toast.error(
                "Impossible de supprimer ce profil. Vérifiez qu'aucun compte n'y est rattaché."
            );
        }
    };

    const isSystemProfile = (profile) => profile.id <= SYSTEM_ROLE_MAX_ID;

    return (
        <>
            {close ? (
                <Setaccess
                    value={updateValue}
                    close={(value) => {
                        setClose(value);
                        if (!value) getRole();
                    }}
                />
            ) : (
                <div class="flex h-screen ">
                    <Sidebar />
                    <main class="flex-1 ">
                        <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                            <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                                <div class="pb-6 border-b border-gray-200">
                                    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                        <div>
                                            <h2 class="text-2xl font-semibold text-gray-800">
                                                Profils d'accès
                                            </h2>
                                            <p class="text-sm text-gray-500 mt-1">
                                                Gérez les rôles et leurs permissions applicatives.
                                            </p>
                                        </div>
                                        <div class="flex flex-wrap items-center gap-2">
                                            <Link
                                                to="/access-user"
                                                class="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
                                            >
                                                <i class="fa-solid fa-users mr-2"></i>
                                                Comptes utilisateurs
                                            </Link>
                                            {canAdd ? (
                                                <Link
                                                    to="/access-set"
                                                    class="px-4 py-2 bg-softbleutini-12 text-white rounded-lg text-sm flex items-center hover:bg-softbleu"
                                                >
                                                    <i class="fa-solid fa-plus mr-2"></i>
                                                    Nouveau profil
                                                </Link>
                                            ) : null}
                                        </div>
                                    </div>

                                    <div class="mt-4 relative max-w-md">
                                        <input
                                            type="text"
                                            placeholder="Rechercher un profil…"
                                            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={search}
                                            onChange={(event) => setSearch(event.target.value)}
                                        />
                                        <svg
                                            class="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                <div class="mt-6 flex items-center justify-between text-sm text-gray-500">
                                    <span>{filteredProfiles.length} profil(s)</span>
                                    <span class="text-xs text-gray-400">
                                        Les profils système (id ≤ {SYSTEM_ROLE_MAX_ID}) ne sont pas supprimables
                                    </span>
                                </div>

                                <div class="mt-3 overflow-hidden border border-gray-200 rounded-lg">
                                    <table class="w-full">
                                        <thead class="bg-gray-50 border-b border-gray-200">
                                            <tr>
                                                <th class="tr-thead w-16">#</th>
                                                <th class="tr-thead">Nom du profil</th>
                                                <th class="tr-thead w-32">Type</th>
                                                {(canEdit || canDelete) && (
                                                    <th class="tr-thead w-40 text-center">Actions</th>
                                                )}
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            {loading ? (
                                                <tr>
                                                    <td
                                                        colSpan={canEdit || canDelete ? 4 : 3}
                                                        class="px-6 py-10 text-center text-sm text-gray-500"
                                                    >
                                                        Chargement…
                                                    </td>
                                                </tr>
                                            ) : filteredProfiles.length === 0 ? (
                                                <tr>
                                                    <td
                                                        colSpan={canEdit || canDelete ? 4 : 3}
                                                        class="px-6 py-10 text-center text-sm text-gray-500"
                                                    >
                                                        Aucun profil trouvé.
                                                    </td>
                                                </tr>
                                            ) : (
                                                filteredProfiles.map((profile, index) => (
                                                    <tr
                                                        key={profile.id}
                                                        className="hover:bg-gray-50"
                                                    >
                                                        <td class="px-6 py-4 text-sm text-gray-500">
                                                            {profile.id}
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            <span
                                                                class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[index % Object.keys(textbackground).length]}`}
                                                            >
                                                                {profile.name}
                                                            </span>
                                                        </td>
                                                        <td class="px-6 py-4 text-sm text-gray-500">
                                                            {isSystemProfile(profile) ? (
                                                                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600">
                                                                    Système
                                                                </span>
                                                            ) : (
                                                                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs bg-green-100 text-green-700">
                                                                    Personnalisé
                                                                </span>
                                                            )}
                                                        </td>
                                                        {(canEdit || canDelete) && (
                                                            <td class="px-6 py-4">
                                                                <div class="flex items-center justify-center gap-3">
                                                                    {canEdit ? (
                                                                        <button
                                                                            type="button"
                                                                            class="text-gray-500 hover:text-softbleu"
                                                                            title="Modifier les accès"
                                                                            onClick={() => changeValue(profile)}
                                                                        >
                                                                            <i class="fa-solid fa-pen-to-square"></i>
                                                                        </button>
                                                                    ) : null}
                                                                    {canDelete && !isSystemProfile(profile) ? (
                                                                        <button
                                                                            type="button"
                                                                            class="text-gray-500 hover:text-red-600"
                                                                            title="Supprimer le profil"
                                                                            onClick={() => deleteProfile(profile)}
                                                                        >
                                                                            <i class="fa-regular fa-trash-can"></i>
                                                                        </button>
                                                                    ) : null}
                                                                </div>
                                                            </td>
                                                        )}
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            )}
        </>
    );
}
