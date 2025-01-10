import React, { useState } from 'react';
import Image from 'next/image';

const AddWhiskyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: null,
    aroma: {
      score: '',
      notes: ''
    },
    taste: {
      score: '',
      notes: ''
    },
    finish: {
      score: '',
      notes: ''
    },
    intensity: ''
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [category, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [category]: {
          ...prev[category],
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      image: null,
      aroma: { score: '', notes: '' },
      taste: { score: '', notes: '' },
      finish: { score: '', notes: '' },
      intensity: ''
    });
    setImagePreview(null);
  };

  return (
    <div className="min-h-screen bg-white p-8 my-8">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-[#C8c8c8] p-6 rounded-3xl border-2 border-black shadow-3xl shadow-slate-900">
        <h2 className="text-2xl font-serif font-bold mb-6">Add New Whisky</h2>
        
        <div className="mb-4">
          <label className="block font-serif font-bold mb-2">
            Whisky Name
          </label>
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
            required
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

        <button
          type="submit"
          className="w-full bg-black text-white font-serif font-bold py-2 px-4 rounded-xl hover:bg-gray-800 transition-colors"
        >
          Add Whisky
        </button>
      </form>
    </div>
  );
};

export default AddWhiskyForm;