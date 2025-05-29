import React from 'react';
import Image from 'next/image';

const WhiskyList = ({ whiskies = [], onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {whiskies.map((whisky) => (
        <div key={whisky.id || whisky.name} className="bg-[#C8c8c8] rounded-lg shadow-lg p-4 border-2 border-black">
          {whisky.image && (
            <div className="relative h-48 mb-4">
              <Image
                src={whisky.image}
                alt={whisky.name}
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
          )}
          
          <h3 className="text-xl font-serif font-bold mb-2">{whisky.name}</h3>
          
          <div className="mb-2">
            <p className="font-bold">Aroma: {whisky.aroma.score}/100</p>
            <p className="text-sm font-serif">{whisky.aroma.notes}</p>
          </div>
          
          <div className="mb-2">
            <p className="font-bold">Taste: {whisky.taste.score}/100</p>
            <p className="text-sm font-serif">{whisky.taste.notes}</p>
          </div>
          
          <div className="mb-2">
            <p className="font-bold">Finish: {whisky.finish.score}/100</p>
            <p className="text-sm font-serif">{whisky.finish.notes}</p>
          </div>
          
          <p className="mb-4">Intensity: {whisky.intensity}</p>
          
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => onEdit(whisky)}
              className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(whisky.id)}
              className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhiskyList;