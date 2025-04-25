import React, { useState } from "react";
import NavBar from "./Navbar";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
import Logo from "./Logo";
import Image from "next/image";

const Alcohols = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const alcoholCategories = [
    "Whisky",
    "Rum",
    "Beer",
    "Wine",
    "Tequila",
    "Vodka",
    "Tincture",
    "Brandy",
    "Gin",
    "Liqueur",
    "Cider",
  ];

  // Sample products data with images
  const productsByCategory = {
    Whisky: [
      { id: 1, name: "Jack Daniel's", price: "89.99", rating: 4.5, image: "/assets/products/jack.jpg" },
      { id: 2, name: "Johnnie Walker Black", price: "99.99", rating: 4.7, image: "/assets/products/johnnie.webp" },
      { id: 3, name: "Jameson", price: "79.99", rating: 4.3, image: "/assets/products/jameson.jpg" },
    ],
    Rum: [
      { id: 1, name: "Bacardi", price: "49.99", rating: 4.2, image: "/assets/products/bacardi.jpg" },
      { id: 2, name: "Captain Morgan", price: "54.99", rating: 4.0, image: "/assets/products/captain.jpg" },
      { id: 3, name: "Havana Club", price: "59.99", rating: 4.4, image: "/assets/products/havana.jpg" },
    ],
    Beer: [
      { id: 1, name: "Heineken", price: "5.99", rating: 4.0, image: "/assets/products/heineken.jpg" },
      { id: 2, name: "Guinness", price: "6.99", rating: 4.5, image: "/assets/products/gui.jpg" },
      { id: 3, name: "Corona", price: "4.99", rating: 3.8, image: "/assets/products/corona.jpg" },
    ],
    Wine: [
      { id: 1, name: "Château Margaux", price: "599.99", rating: 4.9, image: "/assets/products/chatau.jpg" },
      { id: 2, name: "Chianti", price: "29.99", rating: 4.2, image: "/assets/products/www.jpg" },
      { id: 3, name: "Pinot Noir", price: "24.99", rating: 4.1, image: "/assets/products/www.jpg" },
    ],
  };

  return (
    <>
      <NavBar />
      <NavbarLeft />
      <NavbarRight />
      <Logo />
      <div className="flex">
        {/* Left aside */}
        <aside className="w-1/4 min-h-screen bg-[#8d8d8d] fixed left-0 top-0 pt-[90px] flex items-center justify-center"></aside>

        {/* Right aside */}
        <aside className="w-1/4 min-h-screen bg-[#8d8d8d] fixed right-0 top-0 pt-[90px] flex items-center justify-center"></aside>

        {/* Main Content */}
        <div className="flex justify-center flex-1 ml-[25%] mr-[25%] my-12">
          <div>
            {!selectedCategory ? (
              // Show categories list
              alcoholCategories.map((category, index) => (
                <div
                  key={index}
                  className="p-2 m-4 flex items-center justify-center bg-[#C8c8c8] w-[880px] h-[40px] border-2 rounded-3xl border-black shadow-3xl shadow-slate-900 hover:bg-slate-300"
                  onClick={() => setSelectedCategory(category)}
                >
                  <div>
                    <h3 className="cursor-pointer text-2xl font-serif text-black">
                      {category}
                    </h3>
                  </div>
                </div>
              ))
            ) : (
              // Show products for selected category
              <div>
                <div className="flex items-center mb-12">
                  <button 
                    onClick={() => setSelectedCategory(null)}
                    className="mr-6 px-4 py-2 bg-[#C8c8c8] rounded-lg hover:bg-slate-500"
                  >
                    ← Back to Categories
                  </button>
                  <h2 className="text-2xl font-serif">{selectedCategory}</h2>
                </div>
                <div className="grid gap-6">
                  {productsByCategory[selectedCategory]?.map((product) => (
                    <div 
                      key={product.id}
                      className="p-4 bg-[#C8c8c8] rounded-2xl border-2 border-black shadow-lg w-[800px] flex"
                    >
                      <div className="w-1/3 flex items-center justify-center">
                        <div className="relative w-48 h-48">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            style={{ objectFit: "contain" }}
                            className="rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="w-2/3 p-4">
                        <h3 className="text-2xl font-serif mb-2">{product.name}</h3>
                        <p className="text-gray-700 text-lg mb-2">Price: ${product.price}</p>
                        <p className="text-gray-700 text-lg">Rating: {product.rating}/5</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Alcohols;