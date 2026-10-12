// Catálogo provisório da Vitor Imports.
// Será substituído (ou complementado) pela API em feature/consumo-api.

const colors = ["preto", "oliva", "areia"];

// Monta as URLs das 3 cores de cada peça (o Vite resolve o caminho no build)
function images(piece) {
  return colors.map(
    (color) => new URL(`../assets/products/${piece}-${color}.svg`, import.meta.url).href
  );
}

export const products = [
  { id: 1, name: "Moletom Oversized Essential", category: "Moletons", price: 349.9, images: images("hoodie") },
  { id: 2, name: "Camiseta Boxy Logo", category: "Camisetas", price: 189.9, images: images("tshirt") },
  { id: 3, name: "Calça Cargo Utility", category: "Calças", price: 399.9, images: images("cargo") },
  { id: 4, name: "Tênis Chunky Street", category: "Tênis", price: 699.9, images: images("sneaker") },
  { id: 5, name: "Boné Dad Hat Logo", category: "Acessórios", price: 159.9, images: images("cap") },
  { id: 6, name: "Jaqueta Puffer Urban", category: "Jaquetas", price: 749.9, images: images("puffer") },
];

export function getProductById(id) {
  return products.find((product) => product.id === Number(id));
}

export function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
