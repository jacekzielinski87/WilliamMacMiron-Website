import React, { useState } from "react";
import Mortlach70 from "../../../public/assets/MORTLA1.PNG";
import Mortlach75 from "../../../public/assets/MORTLA2.PNG";
import Raiting1 from "../../../public/assets/Raiting1.png";
import Raiting2 from "../../../public/assets/Raiting2.png";
import Image from "next/image";
import Frame from "../../../public/assets/foto.png";

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
  {
    name: "Johnie Walker 70 Year Old Generations '2656 (1938) (2008) (Gordon and MacPhail) (46.10% ABV)",
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
    name: "Campari 70 Year Old Generations '2656 (1938) (2008) (Gordon and MacPhail) (46.10% ABV)",
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
  },{
    name: "Brown Forman 70 Year Old Generations '2656 (1938) (2008) (Gordon and MacPhail) (46.10% ABV)",
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
    name: "Johnie Walker 70 Year Old Generations '2656 (1938) (2008) (Gordon and MacPhail) (46.10% ABV)",
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
  },{
    name: "Campari 70 Year Old Generations '2656 (1938) (2008) (Gordon and MacPhail) (46.10% ABV)",
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
    name: "Brown Forman 70 Year Old Generations '2656 (1938) (2008) (Gordon and MacPhail) (46.10% ABV)",
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
    name: "Heaven Hill's 70 Year Old Generations '2656 (1938) (2008) (Gordon and MacPhail) (46.10% ABV)",
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
    name: "Diageo's 70 Year Old Generations '2656 (1938) (2008) (Gordon and MacPhail) (46.10% ABV)",
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
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedWhisky, setSelectedWhisky] = useState(null);
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
        className={`flex flex-col items-center justify-center relative ${
          showResults ? "" : ""
        }`}
      >
        <input
          className={`bg-[#FFFFFF] p-2 outline-none 
                    h-[33px] w-[600px] absolute bottom--10 left-1/2 -translate-x-1/2 transform -translate-x-1/2font-serif placeholder:text-black text-black ${
                      showResults ? "" : ""
                    }`}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          autoComplete="off"
        />

        <div className="absolute bottom-0 right-60 w-6 h-6 pointer-events-none shadow-xl"></div>
        {showSuggestions && query.length >= 2 && (
          <div
            className="top-16 left-[952px] transform -translate-x-1/2 w-[500px] z-20
                         bg-[url(/assets/corkTable.png)] border-2 border-black rounded-lg shadow-lg font-serif font-bold"
          >
            {getSuggestions().map((suggestion, index) => (
              <div
                key={index}
                className="p-2 m-2 hover:bg-slate-200 hover:opacity-85 rounded-sm cursor-pointer text-zinc-900"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>

      {SearchResults && selectedWhisky && (
        <div className="bottom-[90px] left-0 right-0 bg-white top-[100px] z">
          <div className>
            <SearchResults query={selectedWhisky} />
          </div>
        </div>
      )}
    </>
  );
};

const SearchResults = ({ query }) => {
  const filteredWhiskies = mortlachData.filter((whisky) =>
    whisky.name.toLowerCase().includes(query.toLowerCase())
  );

  const getRatingImage = (score) => {
    return score >= 95 ? Raiting1 : Raiting2;
  };

  if (filteredWhiskies.length === 0) {
    return (
      <div className="text-center mt-24">
        <p className="text-gray-500">No whiskies found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="">
      {filteredWhiskies.map((whiskey, index) => (
        <div
          key={index}
          className="flex justify-center items-center mx-auto w-[1024px]"
        >
          <div className="bg-[url(/assets/corkTable.png)] shadow-2xl shadow-slate-900 relative border-8 border-opacity-35 border-black">
            <div className="flex flex-col items-center">
              <div className="flex flex-col p-2">
                <div className="font-bold bg-white text-center w-full break-words whitespace-normal">
                  {whiskey.name}
                </div>
                <div className="flex">
                  <Image
                    src={Frame}
                    className="w-[275px] h-[275px] shadow-xl shadow-zinc-900 mr-2 mt-2"
                    alt={`Thumbnail of ${whiskey.name}`}
                  />
                  <div className="absolute top-8 left-60">
                    <Image
                      src={getRatingImage(whiskey.aroma.score)}
                      width={70}
                      height={70}
                      className="object-contain"
                      alt="Rating Note"
                      priority
                    />
                  </div>
                  <ul className="list-disc font-serif font-bold bg-white pl-10 p-2 mt-2 w-full h-[275px]">
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchBar;