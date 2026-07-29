import { formatDate } from "../../../function/utils";

const formatDisplayDate = (dateStr) => {
    if (!dateStr) return "—";
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return "—";
    return d.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
};

const DetailRow = ({ label, children }) => (
    <div className="py-3 border-b border-gray-100 last:border-0">
        <dt className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
            {label}
        </dt>
        <dd className="text-sm text-gray-800">{children}</dd>
    </div>
);

export default function CardWishDetail({ wish, close, onDelete }) {
    if (!wish) return null;

    const priorityLabel = wish.priority === 1 ? "Priorité" : "Non-priorité";
    const priorityClass =
        wish.priority === 1
            ? "bg-amber-100 text-amber-800"
            : "bg-gray-100 text-gray-600";

    return (
        <div className="background_transparent_popup">
            <div className="bg-white p-8 rounded-card relative w-full max-w-lg max-h-[90vh] overflow-y-auto">
                <button
                    type="button"
                    className="absolute top-5 right-5 text-gray-500 hover:text-gray-800"
                    onClick={() => close(null)}
                    title="Fermer"
                >
                    <i className="fa-solid fa-xmark text-lg"></i>
                </button>

                <div className="flex items-start gap-4 mb-6 pr-8">
                    <div className="w-12 h-12 rounded-full bg-softbleutini-12/20 flex items-center justify-center shrink-0">
                        <i className="fa-solid fa-file-lines text-softbleu"></i>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                            Détail de la demande
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                            Souhait n° {wish.id} — {formatDisplayDate(wish.date)}
                        </p>
                    </div>
                </div>

                <dl className="divide-y divide-gray-100">
                    <DetailRow label="Formation souhaitée">
                        <span className="font-medium">{wish.nametheme || "—"}</span>
                    </DetailRow>

                    <DetailRow label="Type de souhait">
                        {wish.nametypewish || "—"}
                    </DetailRow>

                    <DetailRow label="Priorité">
                        <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${priorityClass}`}
                        >
                            {priorityLabel}
                        </span>
                    </DetailRow>

                    <DetailRow label="Date de la demande">
                        {formatDisplayDate(wish.date)}
                        {wish.date && (
                            <span className="text-xs text-gray-400 ml-2">
                                ({formatDate(wish.date)})
                            </span>
                        )}
                    </DetailRow>

                    <DetailRow label="Statut">
                        {wish.activename || "—"}
                    </DetailRow>

                    <DetailRow label="Demandeur">
                        <div>
                            <span className="font-medium capitalize">
                                {wish.wisherName} {wish.wisherFirstname}
                            </span>
                            <p className="text-xs text-gray-500 mt-0.5">
                                Matricule : {wish.wisherMatricule || "—"}
                            </p>
                        </div>
                    </DetailRow>

                    <DetailRow label="Bénéficiaire">
                        <div>
                            <span className="font-medium capitalize">
                                {wish.beneficiaryName} {wish.beneficiaryFirstname}
                            </span>
                            <p className="text-xs text-gray-500 mt-0.5">
                                Matricule : {wish.beneficiaryMatricule || "—"}
                            </p>
                        </div>
                    </DetailRow>

                    <DetailRow label="Raison de la demande">
                        <div className="mt-1 p-3 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-700 whitespace-pre-wrap">
                            {wish.reason?.trim() ? wish.reason : (
                                <span className="text-gray-400 italic">Aucune raison renseignée</span>
                            )}
                        </div>
                    </DetailRow>
                </dl>

                <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
                    {onDelete && (
                        <button
                            type="button"
                            className="px-4 py-2 text-red-600 hover:text-red-700 font-medium text-sm"
                            onClick={() => onDelete(wish)}
                        >
                            <i className="fa-regular fa-trash-can mr-1"></i>
                            Supprimer
                        </button>
                    )}
                    <button
                        type="button"
                        className="btn-action"
                        onClick={() => close(null)}
                    >
                        Fermer
                    </button>
                </div>
            </div>
        </div>
    );
}
