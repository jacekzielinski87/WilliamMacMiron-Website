

import { useEffect, useState } from "react";

import { getCategories } from "@/services/adminApi";

import ActionButtons from "../shared/ActionButtons";

export default function CategoriesView() {
  const [categories, setCategories] = useState([]);

  async function loadData() {
    const data = await getCategories();

    setCategories(data);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="flex flex-col gap-3">

      {categories.map((cat) => (
        <div
          key={cat.id}
          className="
            bg-white
            shadow-md shadow-zinc-900
            p-4
            flex justify-between items-center
          "
        >
          <div>
            <p className="font-bold">
              {cat.name}
            </p>

            <p className="text-sm text-gray-600">
              {cat.description}
            </p>

            <p className="text-xs mt-1">
              Status: {cat.status}
            </p>
          </div>

          <ActionButtons
            category={cat}
            onUpdate={loadData}
          />
        </div>
      ))}
    </div>
  );
}