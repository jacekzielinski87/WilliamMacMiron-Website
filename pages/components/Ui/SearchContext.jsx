import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [showResults, setShowResults] = useState(false);

  return (
    <SearchContext.Provider value={{ showResults, setShowResults }}>
      {children}
    </SearchContext.Provider>
  );
};
