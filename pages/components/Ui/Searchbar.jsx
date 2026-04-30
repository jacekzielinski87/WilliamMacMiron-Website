"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearch } from "./SearchContext";
import { searchItems, getItem } from "../../../services/publicService";

// assets
import Frame from "../../../public/assets/foto.png";
import Raiting1 from "../../../public/assets/Raiting1.png";
import Raiting2 from "../../../public/assets/Raiting2.png";

const SearchBar = () => {
  const { query, setQuery, showResults, setShowResults } = useSearch();
  const [selectedWhisky, setSelectedWhisky] = useState(null);

  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isTyping = query.length > 0 && isFocused;

  // 🔥 SEARCH (backend + debounce)
  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    console.log("Wpisałeś:", query); // Sprawdź czy to widać w konsoli

    const timeout = setTimeout(() => {
      setLoading(true);

      searchItems(query)
        .then((data) => setSuggestions(data))
        .catch(console.error)
        .finally(() => setLoading(false));
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  // 🔥 DETAIL FETCH
  const handleSuggestionClick = async (slug) => {
    try {
      const item = await getItem(slug);
      setSelectedWhisky(item);
      setShowResults(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col items-center font-bold">
      {/* 🔍 INPUT */}
      <input
        autoFocus
        className="bg-white p-4 outline-none h-[45px] w-[380px] fixed top-[18px] z-[100] shadow-md shadow-zinc-700 text-md font-serif"
        type="text"
        value={query}
        placeholder ="Search..."
        onFocus={() => setIsFocused(true)}
        onChange={(e) => {
          setQuery(e.target.value);
          if (showResults) setShowResults(false);
        }}
      />

      {/* 🌫️ OVERLAY */}
      {(isTyping || showResults) && (
        <div className="fixed inset-0 bg-white z-[80] top-[60px] bottom-[70px] w-full pointer-events-none" />
      )}

      {/* 📋 SUGESTIE */}
      {isTyping && !showResults && (
        <div className="fixed top-[53px] left-1/2 -translate-x-1/2 w-[450px] max-h-[50vh] overflow-y-auto bg-[url(/assets/corkTable.png)] border-4 border-black/40 rounded-lg z-[90] font-serif">
          {loading && (
            <div className="p-3 text-center text-sm text-black-900">Loading...</div>
          )}

          {Array.isArray(suggestions) && suggestions.map((suggestion, index) => (
            <div
              key={suggestion.slug || index}
              className="hover:bg-slate-300 p-3 cursor-pointer text-zinc-900 text-center font-bold border-b border-black/10 text-sm"
              onClick={() => handleSuggestionClick(suggestion.slug)}
            >
              {suggestion.title}
            </div>
          ))}
        </div>
      )}

      {/* 🥃 WYNIK */}
      {showResults && selectedWhisky && (
        <div className="fixed inset-0 top-[60px] bottom-[70px] flex justify-center items-center z-[95]">
          <SearchResults whiskey={selectedWhisky} />
        </div>
      )}
    </div>
  );
};

const SearchResults = ({ whiskey }) => {
  const getRatingImage = (score) => (score >= 95 ? Raiting1 : Raiting2);

  return (
    <div className="w-[1024px] h-fit">
      <div className="bg-[url(/assets/corkTable.png)] shadow-2xl border-8 border-black/35 flex flex-col overflow-hidden">
        <div className="font-bold bg-white text-center p-2 text-[13px] border-b-2 border-black/10 uppercase">
          {whiskey.title}
        </div>

        <div className="flex flex-row items-stretch relative p-4">
          <div className="relative w-[300px] h-[300px] flex-shrink-0">
            <Image src={Frame} alt="frame" fill className="z-20 object-contain" />

            <div className="absolute inset-0 p-10 flex justify-center items-center z-10">
              {whiskey.image && (
                <Image
                  src={whiskey.image}
                  alt={whiskey.title}
                  className="object-contain max-h-[180px]"
                  width={180}
                  height={180}
                />
              )}
            </div>
          </div>

          <div className="absolute top-6 left-[265px] z-30">
            <Image
              src={getRatingImage(whiskey.rating || 0)}
              width={65}
              height={65}
              alt="rating"
            />
          </div>

          <div className="flex-1 bg-white ml-2 shadow-md">
            <ul className="list-disc font-serif font-bold px-10 py-6 h-full text-[12px] leading-relaxed flex flex-col justify-between">
              <li>Rating: {whiskey.rating || "-"}/100</li>
              <li>Aroma: {whiskey.aroma || "-"}</li>
              <li>Taste: {whiskey.taste || "-"}</li>
              <li>Finish: {whiskey.finish || "-"}</li>
              <li>Intensity: {whiskey.intensity || "-"}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
