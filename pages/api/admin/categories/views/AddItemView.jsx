// components/admin/views/AddItemView.jsx

import { useEffect, useState } from "react";

import {
  createItem,
  getCategories,
} from "@/services/adminApi";

export default function AddItemView() {
  const [title, setTitle] = useState("");

  const [description, setDescription] =
    useState("");

  const [categoryId, setCategoryId] =
    useState("");

  const [categories, setCategories] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [error, setError] =
    useState("");

  // LOAD CATEGORIES
  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await getCategories();

        setCategories(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadCategories();
  }, []);

  // SUBMIT
  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      if (!title.trim()) {
        throw new Error("Dodaj nazwę produktu");
      }

      if (!description.trim()) {
        throw new Error("Dodaj opis");
      }

      if (!categoryId) {
        throw new Error("Wybierz kategorię");
      }

      await createItem({
        title,
        description,
        categoryId,
      });

      // RESET
      setTitle("");
      setDescription("");
      setCategoryId("");

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="
        bg-white
        shadow-md shadow-zinc-900
        p-6
        max-w-[700px]
      "
    >
      <h2
        className="
          text-2xl
          font-bold
          font-serif
          mb-6
        "
      >
        🥃 Dodaj produkt
      </h2>

      {/* SUCCESS */}
      {success && (
        <div
          className="
            bg-green-100
            text-green-700
            p-3
            mb-4
          "
        >
          Produkt dodany
        </div>
      )}

      {/* ERROR */}
      {error && (
        <div
          className="
            bg-red-100
            text-red-700
            p-3
            mb-4
          "
        >
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        {/* TITLE */}
        <div>
          <label className="block mb-1 font-bold">
            Nazwa
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            placeholder="Np. Macallan 18"
            className="
              w-full
              border
              border-black/20
              p-3
              outline-none
            "
          />
        </div>

        {/* CATEGORY */}
        <div>
          <label className="block mb-1 font-bold">
            Kategoria
          </label>

          <select
            value={categoryId}
            onChange={(e) =>
              setCategoryId(e.target.value)
            }
            className="
              w-full
              border
              border-black/20
              p-3
              bg-white
            "
          >
            <option value="">
              Wybierz kategorię
            </option>

            {categories.map((cat) => (
              <option
                key={cat.id}
                value={cat.id}
              >
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block mb-1 font-bold">
            Opis
          </label>

          <textarea
            rows={6}
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            placeholder="Opis whisky..."
            className="
              w-full
              border
              border-black/20
              p-3
              resize-none
              outline-none
            "
          />
        </div>

        {/* BUTTON */}
        <button
          disabled={loading}
          className="
            bg-black
            text-white
            px-4
            py-3
            hover:opacity-90
            transition
            disabled:opacity-50
          "
        >
          {loading
            ? "Dodawanie..."
            : "Dodaj produkt"}
        </button>
      </form>
    </div>
  );
}