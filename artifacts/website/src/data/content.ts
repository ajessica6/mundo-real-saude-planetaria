export type Category = 
  | "Fase 1: Entender" 
  | "Fase 2: Definir" 
  | "Fase 3: Divergir" 
  | "Fase 4: Prototipar" 
  | "Fase 5: Testar" 
  | "Ferramentas" 
  | "Casos de Uso";

export interface Article {
  id: string;
  category: Category;
  title: string;
  excerpt: string;
  img: string;
  duration: string;
  date: string;
  content: string;
}

export const CATEGORY_COLORS: Record<Category, string> = {
  "Fase 1: Entender": "bg-blue-100 text-blue-700 border-blue-200",
  "Fase 2: Definir": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Fase 3: Divergir": "bg-orange-100 text-orange-700 border-orange-200",
  "Fase 4: Prototipar": "bg-purple-100 text-purple-700 border-purple-200",
  "Fase 5: Testar": "bg-rose-100 text-rose-700 border-rose-200",
  "Ferramentas": "bg-teal-100 text-teal-700 border-teal-200",
  "Casos de Uso": "bg-amber-100 text-amber-800 border-amber-200",
};

export const ALL_CATEGORIES: Category[] = [
  "Fase 1: Entender",
  "Fase 2: Definir",
  "Fase 3: Divergir",
  "Fase 4: Prototipar",
  "Fase 5: Testar",
  "Ferramentas",
  "Casos de Uso"
];

const LOREM_CONTENT = `A metodologia do Design Sprint foi desenvolvida no Google Ventures como um processo de cinco dias para responder a questões críticas de negócios através do design, prototipagem e teste de ideias com os clientes. 

Neste artigo, aprofundamos os conceitos essenciais que fazem desta etapa um marco divisório entre projetos que falham e projetos que escalam rapidamente. Ao longo da leitura, você descobrirá que o tempo investido em planejamento e estruturação prévia poupa meses de retrabalho em desenvolvimento.

O segredo está em reunir as pessoas certas, no ambiente certo, com as restrições de tempo adequadas. O relógio batendo não é um inimigo, mas sim um catalisador de inovação que força a equipe a focar no que realmente importa, deixando o perfeccionismo de lado em prol do progresso tangível.`;

export const ARTICLES: Article[] = [
  {
    id: "1",
    category: "Fase 1: Entender",
    title: "Como mapear o problema do usuário em 2 horas",
    excerpt: "Aprenda técnicas de mapeamento de jornada para identificar os maiores pontos de dor dos usuários antes de começar o sprint.",
    img: "https://images.unsplash.com/photo-1531498860502-7c67cf519b9e?w=800&h=500&fit=crop",
    duration: "8 min",
    date: "12 Mar 2024",
    content: LOREM_CONTENT
  },
  {
    id: "2",
    category: "Fase 2: Definir",
    title: "Como escolher o alvo certo para o seu sprint",
    excerpt: "A escolha do alvo é crucial. Veja como usar o mapa do sprint para definir o foco e alinhar toda a equipe em torno de uma meta clara.",
    img: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&h=500&fit=crop",
    duration: "6 min",
    date: "15 Mar 2024",
    content: LOREM_CONTENT
  },
  {
    id: "3",
    category: "Fase 3: Divergir",
    title: "6 técnicas de ideação para gerar soluções criativas",
    excerpt: "Do Crazy 8s ao Storyboard, conheça as melhores técnicas para gerar dezenas de ideias em pouco tempo e sem julgamentos.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
    duration: "10 min",
    date: "18 Mar 2024",
    content: LOREM_CONTENT
  },
  {
    id: "4",
    category: "Fase 4: Prototipar",
    title: "Prototipagem rápida: do papel à tela em 1 dia",
    excerpt: "Descubra como construir um protótipo realista em apenas um dia usando ferramentas simples como Figma e papel.",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop",
    duration: "12 min",
    date: "20 Mar 2024",
    content: LOREM_CONTENT
  },
  {
    id: "5",
    category: "Fase 5: Testar",
    title: "Como conduzir entrevistas de teste com usuários reais",
    excerpt: "Aprenda a estrutura das 5 entrevistas do Design Sprint, como recrutar participantes e como extrair insights valiosos.",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=500&fit=crop",
    duration: "9 min",
    date: "22 Mar 2024",
    content: LOREM_CONTENT
  },
  {
    id: "6",
    category: "Ferramentas",
    title: "As 10 melhores ferramentas digitais para Design Sprint remoto",
    excerpt: "Miro, FigJam, Notion, Loom — saiba quais ferramentas usar em cada fase para conduzir sprints 100% online com sua equipe.",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=500&fit=crop",
    duration: "7 min",
    date: "25 Mar 2024",
    content: LOREM_CONTENT
  },
  {
    id: "7",
    category: "Casos de Uso",
    title: "Como o Google usou Design Sprint para lançar o Gmail",
    excerpt: "Um estudo de caso detalhado de como a equipe do Google Ventures aplicou o Design Sprint para validar o produto antes do lançamento.",
    img: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=500&fit=crop",
    duration: "15 min",
    date: "28 Mar 2024",
    content: LOREM_CONTENT
  },
  {
    id: "8",
    category: "Fase 1: Entender",
    title: "Entrevistas com especialistas: como extrair o máximo em 30 min",
    excerpt: "A fase de entender começa com as pessoas certas. Aprenda a conduzir entrevistas estruturadas com especialistas para captar insights estratégicos.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop",
    duration: "11 min",
    date: "02 Abr 2024",
    content: LOREM_CONTENT
  },
  {
    id: "9",
    category: "Fase 3: Divergir",
    title: "Crazy 8s: a técnica de ideação mais poderosa do sprint",
    excerpt: "Em 8 minutos, você é capaz de gerar 8 ideias sólidas. Entenda como essa dinâmica quebra bloqueios criativos e acelera a inovação.",
    img: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800&h=500&fit=crop",
    duration: "5 min",
    date: "05 Abr 2024",
    content: LOREM_CONTENT
  },
  {
    id: "10",
    category: "Ferramentas",
    title: "Miro vs FigJam: qual plataforma usar no seu sprint?",
    excerpt: "Comparação completa das duas principais ferramentas de whiteboard digital para sprints remotos, com prós e contras de cada uma.",
    img: "https://images.unsplash.com/photo-1609234656432-603139e5f8ca?w=800&h=500&fit=crop",
    duration: "8 min",
    date: "08 Abr 2024",
    content: LOREM_CONTENT
  },
  {
    id: "11",
    category: "Casos de Uso",
    title: "Design Sprint em 48 horas: relato de uma startup brasileira",
    excerpt: "Um time de 5 pessoas, 2 dias e um produto validado. Acompanhe o relato completo de um sprint acelerado feito em São Paulo.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop",
    duration: "13 min",
    date: "12 Abr 2024",
    content: LOREM_CONTENT
  },
  {
    id: "12",
    category: "Fase 5: Testar",
    title: "Como analisar os resultados do teste e tomar decisões",
    excerpt: "O sprint termina com dados, não com opiniões. Aprenda como interpretar os resultados das entrevistas e decidir o próximo passo com clareza.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    duration: "10 min",
    date: "15 Abr 2024",
    content: LOREM_CONTENT
  }
];

export const FEATURED_ARTICLE: Article = {
  id: "featured-1",
  category: "Fase 1: Entender",
  title: "O Guia Definitivo: Conduzindo seu primeiro Design Sprint com maestria e confiança",
  excerpt: "Prepare sua equipe, organize seu espaço de trabalho (físico ou virtual) e entenda o papel fundamental do Facilitador para garantir o sucesso absoluto nos 5 dias de jornada intensiva de produto.",
  img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&h=600&fit=crop",
  duration: "18 min",
  date: "Hoje",
  content: LOREM_CONTENT
};
