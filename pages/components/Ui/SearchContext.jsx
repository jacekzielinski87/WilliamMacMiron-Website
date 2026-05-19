import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [showResults, setShowResults] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <SearchContext.Provider
      value={{
        showResults,
        setShowResults,
        query,
        setQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }

  return context;
}