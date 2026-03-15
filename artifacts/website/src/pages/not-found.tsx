import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="max-w-md w-full px-6 py-12 bg-white rounded-3xl shadow-xl text-center border border-border">
        <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 mx-auto mb-6">
          <AlertCircle size={40} />
        </div>
        <h1 className="text-4xl font-extrabold text-foreground mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link 
          href="/" 
          className="inline-flex px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-1"
        >
          Voltar para o Início
        </Link>
      </div>
    </div>
  );
}
