import React, { useRef, useEffect, useState } from "react";
import { ALL_CATEGORIES, Category } from "@/data/content";
import { useFilter } from "@/context/FilterContext";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function FilterBar() {
  const { activeCategory, setActiveCategory } = useFilter();
  const [isSticky, setIsSticky] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (barRef.current) {
        setIsSticky(window.scrollY > barRef.current.offsetTop - 80);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs: (Category | "Todos")[] = ["Todos", ...ALL_CATEGORIES];

  return (
    <div 
      ref={barRef}
      className={cn(
        "sticky top-[72px] z-40 transition-all duration-200",
        isSticky ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50 py-3" : "py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
          {tabs.map((tab) => {
            const isActive = activeCategory === tab;
            return (
              <button
                key={tab}
                onClick={() => {
                  setActiveCategory(tab);
                  // Scroll slightly down to ensure grid is visible
                  if (window.scrollY > 400) {
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }
                }}
                className={cn(
                  "whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                  isActive 
                    ? "bg-foreground text-background shadow-md transform -translate-y-0.5" 
                    : "bg-white text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground hover:bg-primary/5"
                )}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
