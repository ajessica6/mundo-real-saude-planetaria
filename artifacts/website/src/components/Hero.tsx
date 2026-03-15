import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Target, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-purple-50/50 to-background" />
        {/* subtle abstract gradient mesh background in deep indigo and purple tones, clean and modern for a tech learning platform */}
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Abstract mesh"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/20 text-primary font-medium text-sm shadow-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Nova Formação Completa Disponível
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight text-balance mb-6"
          >
            Domine o <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Design Sprint</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance"
          >
            Aprenda a metodologia validada pelo Google para resolver grandes problemas e testar novas ideias em apenas 5 dias.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-8"
          >
            {[
              { icon: BookOpen, label: "200+ Recursos" },
              { icon: Target, label: "5 Fases" },
              { icon: Users, label: "10k+ Alunos" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <stat.icon size={20} />
                </div>
                <span className="font-semibold text-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
