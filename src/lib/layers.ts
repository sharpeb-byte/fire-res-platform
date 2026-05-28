export type LayerDef = {
  id: string;
  title: string;
};

export const layers: LayerDef[] = [
  { id: "fire-history", title: "Fire History" },
  { id: "cultural-burning", title: "Cultural Burning" },
  { id: "risk", title: "Risk" },
  { id: "ecology", title: "Ecology" },
  { id: "carbon", title: "Carbon" }
];
