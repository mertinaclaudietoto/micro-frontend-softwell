import { useNavigate } from "react-router-dom";
import { datasidebar } from "../data/data";

const spaces = [
    {
        id: "formation",
        title: "Formation",
        description: "Gérer les thèmes, les souhaits, les formateurs et le suivi des formations.",
        icon: "fa-solid fa-graduation-cap",
        color: "bg-blue-50 border-blue-200 text-blue-700",
    },
    {
        id: "recrutement",
        title: "Recrutement",
        description: "Gérer les offres, les demandes, les candidats et les validations.",
        icon: "fa-solid fa-users",
        color: "bg-violet-50 border-violet-200 text-violet-700",
    },
];

const readAccess = () => {
    try {
        return JSON.parse(sessionStorage.getItem("access") || "{}");
    } catch {
        return {};
    }
};

export default function AccueilGenerale() {
    const navigate = useNavigate();
    const access = readAccess();

    const getFirstAllowedLink = (spaceId) => {
        const allowedItem = datasidebar[spaceId].find(
            (item) => access[item.acces]?.lecture === true
        );
        if (!allowedItem) return null;
        if (allowedItem.link && allowedItem.link !== "#") return allowedItem.link;
        return allowedItem.subItems?.find((item) => item.link && item.link !== "#")?.link ?? null;
    };

    const selectSpace = (spaceId) => {
        sessionStorage.setItem("selectedSpace", spaceId);
        const firstLink = getFirstAllowedLink(spaceId);
        navigate(firstLink || "/accueil");
    };

    return (
        <main className="min-h-screen bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat flex items-center justify-center p-6">
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="text-center mb-10">
                    <img src="hello.svg" alt="" className="h-32 mx-auto mb-4" />
                    <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
                        Choisissez votre espace de travail
                    </h1>
                    <p className="text-sm text-gray-500 mt-2">
                        Vous pourrez changer d’espace à tout moment depuis le menu.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {spaces.map((space) => {
                        const isAllowed = Boolean(getFirstAllowedLink(space.id));
                        return (
                            <button
                                key={space.id}
                                type="button"
                                disabled={!isAllowed}
                                onClick={() => selectSpace(space.id)}
                                className={`text-left border-2 rounded-2xl p-6 transition-all ${
                                    isAllowed
                                        ? `${space.color} hover:-translate-y-1 hover:shadow-md`
                                        : "bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed"
                                }`}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-xl bg-white/80 flex items-center justify-center">
                                        <i className={`${space.icon} text-2xl`}></i>
                                    </div>
                                    <h2 className="text-xl font-semibold">{space.title}</h2>
                                </div>
                                <p className="text-sm opacity-80">{space.description}</p>
                                {!isAllowed && (
                                    <p className="text-xs mt-4 font-medium">
                                        Aucun accès disponible pour cet espace.
                                    </p>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}