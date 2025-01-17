import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type of the context value
type FilterContextType = {
  searchedTitle: string | null;
  searchedChannel: string | null;
  searchedDescription: string | null;
  setSearchedTitle: (value: string | null) => void;
  setSearchedChannel: (value: string | null) => void;
  setSearchedDescription: (value: string | null) => void;
};

// Create the context with a default value (which can be undefined initially)
const FilterContext = createContext<FilterContextType | undefined>(undefined);

// Create a provider component that expects children of type ReactNode
export const FilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchedTitle, setSearchedTitle] = useState<string | null>(null);
  const [searchedChannel, setSearchedChannel] = useState<string | null>(null);
  const [searchedDescription, setSearchedDescription] = useState<string | null>(
    null
  );

  return (
    <FilterContext.Provider
      value={{
        searchedTitle,
        searchedChannel,
        searchedDescription,
        setSearchedTitle,
        setSearchedChannel,
        setSearchedDescription,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// Custom hook to use the filter context
export const useFilterContext = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};
