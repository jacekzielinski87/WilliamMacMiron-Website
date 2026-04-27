import React, { createContext, useContext, useState } from "react";

// 1. Tworzymy kontekst
const SearchContext = createContext();

// 2. Tworzymy Provider, który owinie Twoją aplikację (zwykle w _app.js)
export const SearchProvider = ({ children }) => {
  const [showResults, setShowResults] = useState(false); // Czy pokazujemy kartę produktu
  const [query, setQuery] = useState("");              // To, co wpisuje użytkownik

  return (
    <SearchContext.Provider 
      value={{ 
        showResults, 
        setShowResults, 
        query, 
        setQuery 
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

// 3. Customowy hook dla łatwiejszego użycia w komponentach
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
