import React, { useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { FilterBar } from "@/components/FilterBar";
import { ArticleCard } from "@/components/ArticleCard";
import { ArticleModal } from "@/components/ArticleModal";
import { useFilter } from "@/context/FilterContext";
import { ARTICLES, FEATURED_ARTICLE } from "@/data/content";
import { SearchX } from "lucide-react";

export default function Home() {
  const { searchQuery, activeCategory, selectedArticleId } = useFilter();

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory = activeCategory === "Todos" || article.category === activeCategory;
      const matchesSearch = searchQuery === "" || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const selectedArticle = useMemo(() => {
    if (selectedArticleId === FEATURED_ARTICLE.id) return FEATURED_ARTICLE;
    return ARTICLES.find(a => a.id === selectedArticleId);
  }, [selectedArticleId]);

  // Determine if we should show the featured article.
  // Hide it if the user is searching or filtering, so it doesn't clutter the exact results.
  const showFeatured = activeCategory === "Todos" && searchQuery === "";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <FilterBar />
        
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {showFeatured && (
            <ArticleCard article={FEATURED_ARTICLE} featured={true} />
          )}

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-3xl border border-border border-dashed">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <SearchX size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Nenhum resultado encontrado</h3>
              <p className="text-muted-foreground max-w-md">
                Não conseguimos encontrar nenhum artigo correspondente a "{searchQuery}" na categoria {activeCategory}. Tente usar termos diferentes.
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
      
      <ArticleModal article={selectedArticle} />
    </div>
  );
}
