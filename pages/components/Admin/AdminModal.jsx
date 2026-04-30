// components/admin/AdminModal.jsx
import { useEffect, useState } from "react";
import { getCategories } from "../../../services/adminApi";
import ActionButtons from "./ActionButtons";

export default function AdminModal({ onClose }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center absolute top-2">
      
      {/* overlay */}
      <div
        className=""
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        className="
          w-[800px]
          
          /* 🔥 TWÓJ STYL */
          border-[10px]
          [border-image:url(/assets/border.png)_100_repeat]
          bg-[url(/assets/corkTable.png)] bg-repeat
          
          shadow-2xl
          flex flex-col
        "
      >
        {/* HEADER */}
        <div className="flex justify-center items-center px-4 py-4 border-b border-black/20">
          <h2 className="font-bold text-lg font-serif">
            Admin
          </h2>

          <button
            onClick={onClose}
            className="text-lg hover:scale-110"
          >
            ✖
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-4 overflow-y-auto flex flex-col gap-3">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="
                bg-white
                shadow-md shadow-zinc-900
                p-3
                flex justify-between items-center
              "
            >
              <div>
                <p className="font-bold">{cat.name}</p>
                <p className="text-sm text-gray-600">
                  {cat.description}
                </p>
              </div>

              <ActionButtons
                category={cat}
                onUpdate={async () =>
                  setCategories(await getCategories())
                }
              />
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="p-3 border-t border-black/20 flex justify-end">
          <button
            className="
              bg-white px-4 py-2
              shadow-md shadow-zinc-900
              hover:bg-gray-100
            "
          >
            + Dodaj
          </button>
        </div>
      </div>
    </div>
  );
}