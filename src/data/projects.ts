export type Project = {
  id: string;
  title: string;
  cover: string; // imagem de capa
  description: string;
  tags?: string[];
  link?: string; // link para demo/preview
  repo?: string; // link para o GitHub
};

export const PROJECTS: Project[] = [
  {
    id: "p001",
    title: "Hamburguer do ZEGUI",
    cover: "/images/hamburguer.jpg",
    description: "Gostoso igual ao cozinheiro.",
    tags: ["Churrasco", "Pão", "Carne"],
    link: "",
    repo: ""
  },
  {
    id: "p002",
    title: "ED BAr",
    cover: "/images/cachaca.jpg",
    description: "Rolê no ed bar",
    tags: ["Lira", "Espaten"],
    link: ""
  }
];
