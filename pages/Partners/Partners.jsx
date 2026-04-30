import React, { useState } from "react";
import Image from "next/image";
import NavBar from "../components/Layout/Navbar";
import NavbarDown from "../components/Layout/NavbarDown";

const partnersData = [
  {
    id: 1,
    name: "Bowmore",
    count: 12,
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
    count: 5,
    image: "/assets/Dalwhinnie.jpg",
    description:
      "The Dalwhinnie distillery, situated in the Highland village of Dalwhinnie in Scotland, produces single malt Scotch whisky.",
    location: "Scotland",
    specialties: ["Single Malt", "Aged Whiskey"],
    established: 1897,
  },
  {
    id: 3,
    name: "Absolut",
    count: 18,
    image: "/assets/absolut.jpg",
    description:
      "Clean and complex on the nose, with subtle cereal notes. Smooth and mellow to taste with a distinct character of peppery grain.",
    location: "Sweden",
    specialties: ["Vodka"],
    established: 1917,
  },
  {
    id: 4,
    name: "Heineken",
    count: 45,
    image: "/assets/heineken.jpg",
    description:
      "Heineken is a lager style of beer so it is heavier than other types. It has more of a stronger taste to it.",
    location: "Netherlands",
    specialties: ["Beer"],
    established: 1864,
  },
];

const Partners = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);

  const handlePartnerClick = (partner) => {
    setSelectedPartner(partner);
  };

  return (
    <>
      <NavBar />
      <NavbarDown />

      <div className="flex flex-col items-center min-h-screen bg-gray-100">
        {!selectedPartner ? (
          /* WIDOK LISTY */
          <div className="w-full max-w-[975px] mx-auto m-12 p-14">
            {/* Zmieniono justify-items-center na stretch, aby belki wypełniły szerokość */}
            <div className="grid grid-cols-1 justify-items-stretch w-full gap-6">
              {partnersData.map((partner, index) => (
                <button
                  key={`${partner.id}-${index}`}
                  onClick={() => handlePartnerClick(partner)}
                  className="w-full bg-[url('/assets/corkTable.png')] bg-cover bg-center 
                         border-8 border-black border-opacity-35 shadow-zinc-900 shadow-md
                         flex justify-center items-center transition-all duration-300
                         hover:opacity-95 hover:scale-[1.02] cursor-pointer
                         min-h-[80px] p-2"
                >
                  <div className="bg-white flex items-center justify-between w-full h-full min-h-[45px] 
                               text-black text-md font-bold font-serif px-8 py-2 shadow-inner shadow-zinc-900 shadow-md">
                    <span>{partner.name}</span>
                    <span className="font-sans font-bold text-gray-600">
                      {partner.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* WIDOK SZCZEGÓŁÓW */
          <div className="flex flex-col items-center my-16 px-4 w-full">
            <button
              onClick={() => setSelectedPartner(null)}
              className="mb-8 self-center md:self-start md:ml-20 text-black font-bold flex items-center hover:underline"
            >
              ← POWRÓT DO LISTY
            </button>

            <div className="bg-[#c8c8c8] p-6 rounded-3xl shadow-2xl max-w-[880px] w-full border-2 border-black">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="relative h-[250px] w-[250px] border-2 border-black rounded-xl overflow-hidden shrink-0 mx-auto md:mx-0">
                  <Image
                    src={selectedPartner.image}
                    alt={selectedPartner.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl font-serif font-bold mb-4">
                    {selectedPartner.name}
                  </h2>
                  <p className="text-base mb-6 leading-relaxed">
                    {selectedPartner.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-black/20 pt-4">
                    <div>
                      <h4 className="font-bold text-xs uppercase text-gray-500">Location</h4>
                      <p className="font-medium">{selectedPartner.location}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase text-gray-500">Established</h4>
                      <p className="font-medium">{selectedPartner.established}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase text-gray-500">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedPartner.specialties.map((s, i) => (
                          <span key={i} className="text-sm italic">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Partners;
