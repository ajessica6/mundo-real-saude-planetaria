import React, { createContext, useContext, useState, ReactNode } from "react";
import { Category } from "@/data/content";

interface FilterContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: Category | "Todos";
  setActiveCategory: (category: Category | "Todos") => void;
  selectedArticleId: string | null;
  setSelectedArticleId: (id: string | null) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "Todos">("Todos");
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  return (
    <FilterContext.Provider 
      value={{ 
        searchQuery, 
        setSearchQuery, 
        activeCategory, 
        setActiveCategory,
        selectedArticleId,
        setSelectedArticleId
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
}
