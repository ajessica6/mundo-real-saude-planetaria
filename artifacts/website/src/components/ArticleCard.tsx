import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Article, CATEGORY_COLORS } from "@/data/content";
import { useFilter } from "@/context/FilterContext";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const { setSelectedArticleId } = useFilter();

  if (featured) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-black/5 border border-border/50 mb-16 flex flex-col lg:flex-row hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer"
        onClick={() => setSelectedArticleId(article.id)}
      >
        <div className="lg:w-3/5 overflow-hidden relative">
          <img 
            src={article.img} 
            alt={article.title}
            className="w-full h-full object-cover aspect-video lg:aspect-auto group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute top-6 left-6">
            <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              Destaque da Semana
            </span>
          </div>
        </div>
        <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-indigo-50/30">
          <span className={cn("inline-block px-3 py-1 text-xs font-bold rounded-full w-fit mb-4 border", CATEGORY_COLORS[article.category])}>
            {article.category}
          </span>
          <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
            {article.title}
          </h2>
          <p className="text-muted-foreground text-lg mb-8 line-clamp-3">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center text-sm font-medium text-muted-foreground">
              <Clock size={16} className="mr-2" />
              {article.duration} • {article.date}
            </div>
            <button className="flex items-center text-primary font-bold group-hover:translate-x-1 transition-transform">
              Ler artigo <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md shadow-black/5 border border-border/50 flex flex-col hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 cursor-pointer"
      onClick={() => setSelectedArticleId(article.id)}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={article.img} 
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 left-4">
          <span className={cn("inline-block px-3 py-1 text-[11px] font-bold rounded-full backdrop-blur-md bg-white/90 border border-white/20 shadow-sm", CATEGORY_COLORS[article.category].split(' ')[1])}>
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
          {article.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-1">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
          <div className="flex items-center text-xs font-medium text-muted-foreground">
            <Clock size={14} className="mr-1.5" />
            {article.duration}
          </div>
          <button className="text-primary hover:text-secondary p-1 rounded-full hover:bg-primary/5 transition-colors">
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
