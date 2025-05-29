import React, { useState, useEffect } from "react";
import Image from "next/image";
import WhiskyList from "../Alcohols/WhiskyList";

const compressImage = async (base64String, maxWidth = 800) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = base64String;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Oblicz nowe wymiary zachowując proporcje
      let width = img.width;
      let height = img.height;

      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);

      // Kompresuj do JPEG z jakością 0.7
      resolve(canvas.toDataURL("image/jpeg", 0.7));
    };
  });
};

const AddWhiskyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: null,
    aroma: {
      score: "",
      notes: "",
    },
    taste: {
      score: "",
      notes: "",
    },
    finish: {
      score: "",
      notes: "",
    },
    intensity: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [savedWhiskies, setSavedWhiskies] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Load saved whiskies on component mount
  useEffect(() => {
    const saved = localStorage.getItem("whiskies");
    if (saved) {
      setSavedWhiskies(JSON.parse(saved));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [category, field] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [category]: {
          ...prev[category],
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: reader.result,
        }));
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let updatedWhiskies;
    if (editingId) {
      // Update existing whisky
      updatedWhiskies = savedWhiskies.map((whisky) =>
        whisky.id === editingId ? { ...formData, id: editingId } : whisky
      );
    } else {
      // Add new whisky
      const newWhisky = {
        ...formData,
        id: Date.now().toString(),
      };
      updatedWhiskies = [...savedWhiskies, newWhisky];
    }

    // Save to localStorage
    localStorage.setItem("whiskies", JSON.stringify(updatedWhiskies));
    setSavedWhiskies(updatedWhiskies);

    // Reset form
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      image: null,
      aroma: { score: "", notes: "" },
      taste: { score: "", notes: "" },
      finish: { score: "", notes: "" },
      intensity: "",
    });
    setImagePreview(null);
    setEditingId(null);
  };

  const handleEdit = (whisky) => {
    setFormData(whisky);
    setImagePreview(whisky.image);
    setEditingId(whisky.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (whiskyId) => {
    if (window.confirm("Are you sure you want to delete this whisky?")) {
      const updatedWhiskies = savedWhiskies.filter((w) => w.id !== whiskyId);
      localStorage.setItem("whiskies", JSON.stringify(updatedWhiskies));
      setSavedWhiskies(updatedWhiskies);
      if (editingId === whiskyId) {
        resetForm();
      }
    }
  };

  return (
    <div className="min-h-screen bg-white p-8 my-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-[#C8c8c8] p-6 rounded-3xl border-2 border-black shadow-3xl shadow-slate-900"
      >
        <h2 className="text-2xl font-serif font-bold mb-6">
          {editingId ? "Edit Whisky" : "Add New Whisky"}
        </h2>

        <div className="mb-4">
          <label className="block font-serif font-bold mb-2">Whisky Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border-2 border-black rounded-xl"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-serif font-bold mb-2">
            Whisky Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-2"
          />
          {imagePreview && (
            <div className="mt-2">
              <Image
                src={imagePreview}
                alt="Preview"
                width={200}
                height={200}
                className="rounded-xl border-2 border-black"
              />
            </div>
          )}
        </div>

        <div className="mb-4">
          <h3 className="font-serif font-bold mb-2">Aroma</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Score (0-100)</label>
              <input
                type="number"
                name="aroma.score"
                value={formData.aroma.score}
                onChange={handleInputChange}
                min="0"
                max="100"
                className="w-full p-2 border-2 border-black rounded-xl"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Notes</label>
              <input
                type="text"
                name="aroma.notes"
                value={formData.aroma.notes}
                onChange={handleInputChange}
                className="w-full p-2 border-2 border-black rounded-xl"
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-serif font-bold mb-2">Taste</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Score (0-100)</label>
              <input
                type="number"
                name="taste.score"
                value={formData.taste.score}
                onChange={handleInputChange}
                min="0"
                max="100"
                className="w-full p-2 border-2 border-black rounded-xl"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Notes</label>
              <input
                type="text"
                name="taste.notes"
                value={formData.taste.notes}
                onChange={handleInputChange}
                className="w-full p-2 border-2 border-black rounded-xl"
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-serif font-bold mb-2">Finish</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Score (0-100)</label>
              <input
                type="number"
                name="finish.score"
                value={formData.finish.score}
                onChange={handleInputChange}
                min="0"
                max="100"
                className="w-full p-2 border-2 border-black rounded-xl"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Notes</label>
              <input
                type="text"
                name="finish.notes"
                value={formData.finish.notes}
                onChange={handleInputChange}
                className="w-full p-2 border-2 border-black rounded-xl"
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block font-serif font-bold mb-2">
            Intensity (1-3)
          </label>
          <input
            type="text"
            name="intensity"
            value={formData.intensity}
            onChange={handleInputChange}
            className="w-full p-2 border-2 border-black rounded-xl"
            required
            pattern="1-[1-3]"
            placeholder="e.g., 1-2"
          />
        </div>

        <div className="flex space-x-2">
          <button
            type="submit"
            className="flex-1 bg-black text-white font-serif font-bold py-2 px-4 rounded-xl hover:bg-gray-800 transition-colors"
          >
            {editingId ? "Update Whisky" : "Add Whisky"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="flex-1 bg-gray-500 text-white font-serif font-bold py-2 px-4 rounded-xl hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {savedWhiskies.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-serif font-bold mb-6">Saved Whiskies</h2>
          <WhiskyList
            whiskies={savedWhiskies}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      )}
    </div>
  );
};

export default AddWhiskyForm;
