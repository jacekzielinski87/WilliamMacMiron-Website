

export default function Sidebar({ view, setView }) {
    const items = [
      {
        key: "categories",
        label: "Kategorie",
      },
      {
        key: "topics",
        label: "Tematy",
      },
      {
        key: "items",
        label: "Produkty",
      },
      {
        key: "add",
        label: "+ Dodaj",
      },
    ];
  
    return (
      <div
        className="
          w-[220px]
          bg-black/10
          border-r border-black/20
          p-4
          flex flex-col gap-3
        "
      >
        <h2 className="font-bold font-serif text-xl">
          Admin
        </h2>
  
        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => setView(item.key)}
            className={`
              bg-white
              shadow-md shadow-zinc-900
              px-3 py-2
              text-left
              hover:bg-gray-100
              transition
  
              ${
                view === item.key
                  ? "ring-2 ring-black"
                  : ""
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    );
  }