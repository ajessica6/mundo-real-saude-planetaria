import React, { useState, useEffect } from "react";
import { Search, Menu, X, Zap } from "lucide-react";
import { useFilter } from "@/context/FilterContext";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Navbar() {
  const { searchQuery, setSearchQuery } = useFilter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-panel py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer flex-shrink-0" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 text-white">
              <Zap size={22} className="fill-current" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
              Sprint Hub
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {["Início", "Fases", "Recursos", "Sobre"].map((item) => (
              <button
                key={item}
                onClick={() => window.scrollTo(0,0)}
                className="text-foreground/80 hover:text-primary font-medium text-sm transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-md hidden sm:block relative">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Buscar artigos, fases, ferramentas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/80 border border-border/60 rounded-full pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav & Search */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-64 mt-4 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="flex flex-col gap-4 pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar conteúdos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-border rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              {["Início", "Fases", "Recursos", "Sobre"].map((item) => (
                <button
                  key={item}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left px-4 py-2 rounded-lg hover:bg-primary/5 font-medium text-foreground/80"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
