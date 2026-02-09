import React, { useState } from "react";
import Image from "next/image";
import NavBar from "../components/Layout/Navbar";
import NavbarDown from "../components/Layout/NavbarDown";

const partnersData = [
  {
    id: 1,
    name: "Bowmore",
    image: "/assets/bowmore.jpg",
    description:
      "Located in the Scottish Highlands, this distillery has been crafting premium single malt whiskey since 1779.",
    location: "Scotland",
    specialties: ["Single Malt", "Aged Whiskey"],
    established: 1779,
  },
  {
    id: 2,
    name: "Dalwhinne",
    image: "/assets/Dalwhinnie.jpg",
    description:
      "The Dalwhinnie distillery, situated in the Highland village of Dalwhinnie in Scotland, produces single malt Scotch whisky. The Dalwhinnie distillery is located in the Badenoch and Strathspey ward of the Highland Council and therefore is in the Speyside region.",
    location: "Scotland",
    specialties: ["Single Malt", "Aged Whiskey"],
    established: 1897,
  },
  {
    id: 3,
    name: "Absolut",
    image: "/assets/absolut.jpg",
    description:
      "Clean and complex on the nose, with subtle cereal notes. Smooth and mellow to taste with a distinct character of peppery grain, followed by a hint of dried fruit and sourdough bread. All Absolut Vodka is made from winter wheat, which is distilled on four story high column stills to a supremely high quality.",
    location: "Sweden",
    specialties: ["Vodka"],
    established: 1917,
  },
  {
    id: 4,
    name: "Heineken",
    image: "/assets/heineken.jpg",
    description:
      "Heineken is a lager style of beer so it is heavier than other types. It has more of a stronger taste to it. Heineken is a 5% ABV beer made without any additives. The yeast and barley make the beer thicker to have a great taste when you drink it.",
    location: "Netherlands",
    specialties: ["Beer"],
    established: 1864,
  },
  {
    id: 5,
    name: "Dalwhinne",
    image: "/assets/Dalwhinnie.jpg",
    description:
      "The Dalwhinnie distillery, situated in the Highland village of Dalwhinnie in Scotland, produces single malt Scotch whisky. The Dalwhinnie distillery is located in the Badenoch and Strathspey ward of the Highland Council and therefore is in the Speyside region.",
    location: "Scotland",
    specialties: ["Single Malt", "Aged Whiskey"],
    established: 1897,
  },
  {
    id: 6,
    name: "Dalwhinne",
    image: "/assets/Dalwhinnie.jpg",
    description:
      "The Dalwhinnie distillery, situated in the Highland village of Dalwhinnie in Scotland, produces single malt Scotch whisky. The Dalwhinnie distillery is located in the Badenoch and Strathspey ward of the Highland Council and therefore is in the Speyside region.",
    location: "Scotland",
    specialties: ["Single Malt", "Aged Whiskey"],
    established: 1897,
  },
  {
    id: 3,
    name: "Absolut",
    image: "/assets/absolut.jpg",
    description:
      "Clean and complex on the nose, with subtle cereal notes. Smooth and mellow to taste with a distinct character of peppery grain, followed by a hint of dried fruit and sourdough bread. All Absolut Vodka is made from winter wheat, which is distilled on four story high column stills to a supremely high quality.",
    location: "Sweden",
    specialties: ["Vodka"],
    established: 1917,
  },
  {
    id: 1,
    name: "Bowmore",
    image: "/assets/bowmore.jpg",
    description:
      "Located in the Scottish Highlands, this distillery has been crafting premium single malt whiskey since 1779.",
    location: "Scotland",
    specialties: ["Single Malt", "Aged Whiskey"],
    established: 1779,
  },
  // Add more partners
];

// ... imports remain the same ...

const Partners = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);

  const handlePartnerClick = (partner) => {
    setSelectedPartner(partner);
  };

  return (
    <>
      <NavBar />
      <NavbarDown />
      <div className="">
        {!selectedPartner && (
          <>
            {/* Partner List - only shown when no partner is selected */}
            <div className="lg:flex flex-col justify-center items-center m-24 gap-4 sm:grid">
              {partnersData.map((partner) => (
                <button
                  key={partner.id}
                  onClick={() => handlePartnerClick(partner)}
                  className="bg-[url('/assets/corkTable.png')] bg-cover  items-center hover:opacity-90 hover:scale-105 shadow-lg shadow-slate-400 flex justify-center items-center transition-transform bg-[url('/assets/corkTable.png')] bg-cover bg-center border-8 border-black border-opacity-35 h-[75px] sm:max-w-[400px] lg:max-w-[800px]"
                >
                  <span className="bg-white flex justify-start p-4 items-center w-[750px] h-[40px] text-black text-lg font-serif">
                    {partner.name}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* Partner Details */}
        {selectedPartner ? (
          <div className="bg-[#c8c8c8] p-2 rounded-3xl shadow-lg w-[880px] h-[320px] border-2 border-black">
            <div className="flex flex-row gap-4">
              {/* Rest of the partner details remain the same */}
              <div className="relative h-[200px] w-[200px] border-2 border-black rounded-lg flex shrink-0 my-20 ">
                <Image
                  src={selectedPartner.image}
                  alt={selectedPartner.name}
                  fill
                  className="object-cover rounded-2xl "
                  priority
                />
              </div>

              <div className="flex flex-col">
                <h2 className="text-2xl font-serif mb-10 my-4 font-bold relative right-44 top-4 ">
                  {selectedPartner.name}
                </h2>
                <p className="text-sm mb-6 font-bold p-2">
                  {selectedPartner.description}
                </p>
                <div className="flex justify-start gap-8 ml-2 ">
                  <div>
                    <h4 className="font-bold text-sm">Location</h4>
                    <p>{selectedPartner.location}</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-sm">Established</h4>
                    <p>{selectedPartner.established}</p>
                  </div>
                  <div className="">
                    <h4 className="font-bold text-sm">Specialties</h4>
                    <ul className="flex gap-4">
                      {selectedPartner.specialties.map((specialty, index) => (
                        <li key={index}>{specialty}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-8"></div>
        )}
      </div>
    </>
  );
};

export default Partners;
