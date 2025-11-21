import { getColorByValue } from "../../function/utils";
export const ProgressCircle = ({ value, percent }) => {
  const perimeter = 2 * Math.PI * 20; // r = 20
  const offset = perimeter - (percent / 100) * perimeter;

  return (
    <svg className="w-12 h-12 transform -rotate-90">
      {/* Cercle de fond */}
      <circle
        cx="24"
        cy="24"
        r="20"
        className="stroke-gray-300"
        strokeWidth="4"
        fill="none"
      />

      {/* Cercle dynamique */}
      <circle
        cx="24"
        cy="24"
        r="20"
        strokeWidth="4"
        fill="none"
        strokeDasharray={perimeter}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className={getColorByValue(value)}
      />
    </svg>
  );
};
