const WhiskyList = ({ whiskies }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {whiskies.map((whisky) => (
          <div key={whisky.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={whisky.imageUrl}
              alt={whisky.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{whisky.name}</h3>
              <p className="text-gray-600 mb-2">{whisky.description}</p>
              <p className="text-lg font-bold">${whisky.price}</p>
              <p className="text-sm text-gray-500 mt-1">{whisky.category}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default WhiskyList;