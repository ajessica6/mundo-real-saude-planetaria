import React from "react";
import { Zap, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground/80 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap size={18} className="fill-current text-white" />
              </div>
              <span className="font-display font-bold text-xl">Sprint Hub</span>
            </div>
            <p className="max-w-md text-sm leading-relaxed mb-8">
              A plataforma definitiva para aprender, aplicar e dominar a metodologia 
              do Design Sprint. Transforme problemas complexos em soluções testadas 
              em apenas 5 dias.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Github size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={18} />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Plataforma</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><button className="hover:text-primary transition-colors">Sobre o Sprint Hub</button></li>
              <li><button className="hover:text-primary transition-colors">A Metodologia</button></li>
              <li><button className="hover:text-primary transition-colors">Casos de Sucesso</button></li>
              <li><button className="hover:text-primary transition-colors">Ferramentas</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Suporte</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><button className="hover:text-primary transition-colors">Contato</button></li>
              <li><button className="hover:text-primary transition-colors">FAQ</button></li>
              <li><button className="hover:text-primary transition-colors">Política de Privacidade</button></li>
              <li><button className="hover:text-primary transition-colors">Termos de Uso</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Sprint Hub. Todos os direitos reservados.</p>
          <p>Feito com paixão para inovadores.</p>
        </div>
      </div>
    </footer>
  );
}
