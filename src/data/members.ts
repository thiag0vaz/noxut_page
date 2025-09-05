export type Member = {
  id: string;
  name: string;
  role: string;
  avatar: string; // pode ser URL (unsplash, github…) ou /images/nome-arquivo.jpg
  bio?: string;
  links?: { label: string; url: string }[];
};

export const MEMBERS: Member[] = [
  {
    id: "m001",
    name: "José Guilherme",
    role: "Menino do Java",
    avatar: "/images/jogui.jpg", 
    bio: "Apaixonado pelo bar do Seu Javas",
    links: [
      { label: "GitHub", url: "https://github.com/joguirod" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/joguirod/" }
    ]
  },
  {
    id: "m002",
    name: "João Guilherme",
    role: "Menino das oversdoses alcoolicas",
    avatar: "/images/joao.jpg",
    bio: "Seu não, sei lá, acho que sei lá...",
    links: [
      { label: "GitHub", url: "" },
      { label: "LinkedIn", url: "" }]
  }
];
