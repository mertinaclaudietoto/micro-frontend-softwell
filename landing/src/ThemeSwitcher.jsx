import { useTheme } from "next-themes";

const themes = ["orange", "green", "blue"];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme("green");

  return (
    <div className="flex gap-2 p-4">
      {/* {themes.map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={`w-5 h-5 rounded-full border-2 border-gray-300 ${
            theme === t ? "ring-2 ring-gray-700" : ""
          }`}
          style={{ backgroundColor: `${t}` }}
        ></button>
      ))} */}
    </div>
  );
}
