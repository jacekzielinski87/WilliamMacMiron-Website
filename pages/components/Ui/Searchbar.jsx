import React, { useState } from "react";
import Mortlach70 from "../../../public/assets/MORTLA1.PNG";
import Mortlach75 from "../../../public/assets/MORTLA2.PNG";
import Raiting1 from "../../../public/assets/Raiting1.png";
import Raiting2 from "../../../public/assets/Raiting2.png";
import Image from "next/image";

const mortlachData = [
  {
    name: "Mortlach 70 Year Old Generations '2656 (1938) (2008) (Gordon and MacPhail) (46.10% ABV)",
    image: Mortlach70,
    aroma: {
      score: 91,
      notes:
        "sweet², flowers³, tobacco², kiwi¹, orange¹, plum¹, black tea¹, aloe¹, clove¹, tangerine¹, nut¹",
    },
    taste: {
      score: 90,
      notes:
        "bitter¹, warming¹, smoky², walnut², black tea², clove¹, mandarin¹, butter¹, tobacco¹, salt¹, pear¹",
    },
    finish: {
      score: 90,
      notes:
        "long², bitter³, smoky², wood², unripe apple², cinnamon², black pepper¹, mushrooms¹, onion¹",
    },
    intensity: "1-2",
  },
  {
    name: "Mortlach 75 Year Old Generations '2475 (1939) (2015) (Gordon and MacPhail) (44.40% ABV)",
    image: Mortlach75,
    aroma: {
      score: 95,
      notes:
        "sweet², smoky², tangerine³, blueberry², oak², grass², cocoa¹, gooseberry¹, straw¹, earth¹, mint¹, pomegranate¹, bay leaf¹",
    },
    taste: {
      score: 94,
      notes:
        "sweet², bitter¹, slightly spicy², red grapefruit², mango², coconut¹, green pepper¹, mirabelle plum¹, tobacco¹, passion fruit¹",
    },
    finish: {
      score: 95,
      notes:
        "long³, sweet², slightly spicy², honey³, nut³, pineapple², plum¹, aloe¹, leather¹, vanilla¹, salt¹, wood¹, anise¹, coffee¹, yeast¹, bread¹, salt¹",
    },
    intensity: "1-3",
  },
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedWhisky, setSelectedWhisky] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  const getSuggestions = () => {
    return mortlachData
      .map((whisky) => whisky.name)
      .filter((name) => name.toLowerCase().includes(query.toLowerCase()));
  };

  const handleSuggestionClick = (suggestion) => {
    setSelectedWhisky(suggestion);
    setShowSuggestions(false);
    setShowResults(true);
    setQuery("");
    setPlaceholder("");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(value.length >= 1);
    setShowResults(false);
  };

  const handleInputFocus = () => {
    setPlaceholder("");
  };

  const handleInputBlur = () => {
    if (!query) {
      setPlaceholder("");
    }
  };

  return (
    <>
      <div
        className={`flex flex-col items-center justify-center w-full relative ${
          showResults ? "z-40" : ""
        }`}
      >
        <input
          className={`bg-[#FFFFFF] border-2 rounded-2xl border-black p-2 outline-none 
                    h-[25px] w-[450px] fixed top-2 left-[960px] transform -translate-x-1/2 z-10 
                    font-serif placeholder:text-black text-black ${
                      showResults ? "z-50" : ""
                    }`}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          autoComplete="off"
        />

        {showSuggestions && query.length >= 3 && (
          <div
            className="fixed top-16 left-[952px] transform -translate-x-1/2 w-[500px] 
                         bg-[#c8c8c8] border-2 border-black rounded-lg shadow-lg z-50 font-serif font-bold"
          >
            {getSuggestions().map((suggestion, index) => (
              <div
                key={index}
                className="p-2 m-2 hover:bg-slate-100 rounded-sm cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>

      {showResults && (
        <div className="fixed inset-0 bg-white z-30 top-[64px]">
          <div className="w-full h-full overflow-y-auto">
            <SearchResults query={selectedWhisky} />
          </div>
        </div>
      )}
    </>
  );
};

const SearchResults = ({ query }) => {
  const filteredWhiskies = mortlachData.filter((whisky) =>
    whisky.name.toLowerCase().startsWith(query.toLowerCase())
  );

  const getRatingImage = (score) => {
    return score >= 95 ? Raiting1 : Raiting2;
  };

  if (filteredWhiskies.length === 0) {
    return (
      <div className="text-center mt-24 x-30">
        <p className="text-gray-500">No whiskies found matching your search.</p>
      </div>
    );
  }

  //Navbar znika po wyszukaniu !!!
  //Button powrotu nie działa po wyszukaniu !!!

  return (
    <div className="p-4">
      {filteredWhiskies.map((whiskey, index) => (
        <div
          key={index}
          className="flex justify-center items-center mx-auto my-32"
        >
          <div className="w-[880px] h-[320px] border-2 bg-[url(/assets/corkTable.png)] shadow-3xl shadow-slate-900 relative">
            <ul className="list-none">
              <li className="p-3 ml-3 font-serif text-sm font-bold">
                {whiskey.name}
              </li>
            </ul>
            <div className="flex justify-center ml-4">
              <Image
                src={whiskey.image}
                className="w-[200px] h-[200px] my-6 shadow-xl shadow-gray-900 border-2 rounded-3xl"
                alt={`Thumbnail of ${whiskey.name}`}
              />
              <div className="absolute top-10 left-40">
                <Image
                  src={getRatingImage(whiskey.aroma.score)}
                  width={80}
                  height={80}
                  className="object-contain"
                  alt="Rating Note"
                  priority
                />
              </div>
              <ul className="grid gap-4 decoration-solid ml-6 p-6 font-serif text-sm font-bold">
                <li>Rating: {whiskey.aroma.score}/100, (61-100)</li>
                <li>
                  Aroma: {whiskey.aroma.score}/100, {whiskey.aroma.notes}
                </li>
                <li>
                  Taste: {whiskey.taste.score}/100, {whiskey.taste.notes}
                </li>
                <li>
                  Finish: {whiskey.finish.score}/100, {whiskey.finish.notes}
                </li>
                <li>Intensity: {whiskey.intensity}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchBar;