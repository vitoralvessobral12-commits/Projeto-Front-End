import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import styles from "./ProductList.module.css";

const categories = [...new Set(products.map((product) => product.category))];

const sorters = {
  relevantes: (a, b) => a.id - b.id,
  "menor-preco": (a, b) => a.price - b.price,
  "maior-preco": (a, b) => b.price - a.price,
  "nome-az": (a, b) => a.name.localeCompare(b.name, "pt-BR"),
};

export default function ProductList() {
  const [sortBy, setSortBy] = useState("relevantes");
  const [selectedCategories, setSelectedCategories] = useState([]);

  function toggleCategory(category) {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category]
    );
  }

  // Sem categoria marcada = mostra todos os produtos
  const filtered =
    selectedCategories.length === 0
      ? products
      : products.filter((product) => selectedCategories.includes(product.category));

  // Copia antes de ordenar para não alterar o array original
  const visibleProducts = [...filtered].sort(sorters[sortBy]);

  return (
    <section>
      <div className={styles.toolbar}>
        <div>
          <h1>Produtos</h1>
          <p className={styles.count}>
            {visibleProducts.length} {visibleProducts.length === 1 ? "produto" : "produtos"}
          </p>
        </div>
        <label>
          Ordenar por{" "}
          <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
            <option value="relevantes">Mais relevantes</option>
            <option value="menor-preco">Menor preço</option>
            <option value="maior-preco">Maior preço</option>
            <option value="nome-az">Nome (A-Z)</option>
          </select>
        </label>
      </div>

      <div className={styles.content}>
        <aside className={styles.filters}>
          <h2>Filtrar por</h2>
          <h3>Categoria</h3>
          {categories.map((category) => (
            <label key={category} className={styles.option}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
              />{" "}
              {category}
            </label>
          ))}
          {selectedCategories.length > 0 && (
            <button type="button" className={styles.clear} onClick={() => setSelectedCategories([])}>
              Limpar filtros
            </button>
          )}
        </aside>

        <div className={styles.grid}>
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} {...product} image={product.images[0]} />
          ))}
        </div>
      </div>
    </section>
  );
}
