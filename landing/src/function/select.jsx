import React, { useState, useRef, useEffect } from "react";

// SearchableSelect.jsx
// Composant React (Tailwind) : select filtrable à chaque lettre

export default function SearchableSelect({ options = [], placeholder = "Rechercher...", onChange }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [selected, setSelected] = useState(null);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const filtered = options.filter((opt) =>
    opt.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  useEffect(() => {
    // reset highlight when filtered changes
    setHighlightIndex(filtered.length ? 0 : -1);
  }, [query, options]);

  useEffect(() => {
    function onDocClick(e) {
      if (
        !inputRef.current?.contains(e.target) &&
        !listRef.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  function handleKeyDown(e) {
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpen(true);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((i) => Math.min(filtered.length - 1, i + 1));
      scrollToHighlight();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((i) => Math.max(0, i - 1));
      scrollToHighlight();
    }
    if (e.key === "Enter") {
      e.preventDefault();
      if (open && highlightIndex >= 0 && filtered[highlightIndex]) {
        selectOption(filtered[highlightIndex]);
      } else {
        setOpen((o) => !o);
      }
    }
    if (e.key === "Escape") {
      setOpen(false);
    }
  }

  function scrollToHighlight() {
    requestAnimationFrame(() => {
      const list = listRef.current;
      const el = list?.querySelector("[data-highlight='true']");
      if (el) el.scrollIntoView({ block: "nearest" });
    });
  }

  function selectOption(opt) {
    setSelected(opt);
    setQuery(opt.name);
    setOpen(false);
    if (onChange) onChange(opt);
  }

  function clear() {
    setSelected(null);
    setQuery("");
    if (onChange) onChange(null);
  }

  return (
    <div className="w-full max-w-md relative  mb-4">
      <div className="flex items-center gap-2">
        <div className="flex-1 relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="input_formulaire"
            onFocus={() => setOpen(true)}
            aria-expanded={open}
            aria-haspopup="listbox"
          />
          {selected && (
            <button
              onClick={clear}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
              title="Effacer la sélection"
            >
              <i class="fa-solid fa-xmark "></i>
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className=" border border-gray-300 hover:bg-gray-50 text-white px-4 py-3 rounded-lg font-medium transition-colors"
          aria-label="Basculer la liste"
        >
          <i class="fa-solid fa-plus text-black"></i>
        </button>
      </div>

      <div
        ref={listRef}
        className={`absolute z-20 mt-2 w-full max-h-60 overflow-auto bg-white border border-gray-200 rounded-md shadow-lg transition-opacity duration-150 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        role="listbox"
      >
        {filtered.length === 0 ? (
          <div className="p-3 text-sm text-gray-500">Aucun résultat</div>
        ) : (
          filtered.map((opt, idx) => {
            const isHighlighted = idx === highlightIndex;
            return (
              <div
                key={opt.id}
                data-highlight={isHighlighted}
                role="option"
                aria-selected={selected?.value === opt.id}
                onMouseEnter={() => setHighlightIndex(idx)}
                onMouseDown={(e) => e.preventDefault()} // prevent blur
                onClick={() => selectOption(opt)}
                className={`px-4 py-2 cursor-pointer flex items-center gap-3 hover:bg-sky-50 ${
                  isHighlighted ? "bg-sky-100" : ""
                }`}
              >
                {opt.avatar && (
                  <img
                    src={opt.avatar}
                    alt=""
                    className="w-7 h-7 rounded-full object-cover"
                  />
                )}
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{opt.name}</span>
                  {opt.sub && (
                    <span className="text-xs text-gray-500">{opt.sub}</span>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
