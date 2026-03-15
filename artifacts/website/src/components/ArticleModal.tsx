import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Calendar, Share2, Bookmark } from "lucide-react";
import { Article, CATEGORY_COLORS } from "@/data/content";
import { useFilter } from "@/context/FilterContext";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ArticleModalProps {
  article: Article | undefined;
}

export function ArticleModal({ article }: ArticleModalProps) {
  const { setSelectedArticleId } = useFilter();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (article) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [article]);

  return (
    <AnimatePresence>
      {article && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticleId(null)}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-x-0 bottom-0 md:inset-4 md:mx-auto md:max-w-4xl z-[101] bg-background md:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <button 
                onClick={() => setSelectedArticleId(null)}
                className="w-10 h-10 rounded-full bg-black/50 text-white backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-y-auto no-scrollbar flex-1">
              <div className="relative h-64 md:h-80 lg:h-96 w-full">
                <img 
                  src={article.img} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-10 md:right-10">
                  <span className={cn("inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 border", CATEGORY_COLORS[article.category])}>
                    {article.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
                    {article.title}
                  </h1>
                </div>
              </div>

              <div className="px-6 py-8 md:px-10 md:py-12 bg-white flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-3/4">
                  <p className="text-xl text-foreground font-medium mb-8 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="prose prose-lg prose-indigo max-w-none">
                    {article.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-muted-foreground leading-loose mb-6">
                        {paragraph}
                      </p>
                    ))}
                    <div className="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                      <h3 className="text-indigo-900 font-bold mb-2">Gostou deste conteúdo?</h3>
                      <p className="text-indigo-700 text-sm">Inscreva-se na nossa newsletter para receber mais artigos práticos como este toda semana diretamente no seu email.</p>
                      <button className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors">
                        Inscrever-se
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/4 flex flex-col gap-6">
                  <div className="p-6 bg-background rounded-2xl border border-border">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">Sobre o Artigo</h4>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3 text-foreground font-medium">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <Clock size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-normal">Tempo de leitura</p>
                          {article.duration}
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-foreground font-medium">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                          <Calendar size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-normal">Publicado em</p>
                          {article.date}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 py-3 flex items-center justify-center gap-2 rounded-xl bg-background border border-border hover:bg-border/50 transition-colors font-medium text-sm">
                      <Share2 size={16} /> Compartilhar
                    </button>
                    <button className="flex-1 py-3 flex items-center justify-center gap-2 rounded-xl bg-background border border-border hover:bg-border/50 transition-colors font-medium text-sm">
                      <Bookmark size={16} /> Salvar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
