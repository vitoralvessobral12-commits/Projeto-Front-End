import { useParams } from "react-router-dom";
import Gallery from "../components/Gallery";

export default function ProductDetail() {
  const { id } = useParams();

  // Imagens provisórias: virão da API em feature/consumo-api
  const images = [
    `https://placehold.co/600x400?text=Produto+${id}+-+1`,
    `https://placehold.co/600x400?text=Produto+${id}+-+2`,
  ];

  return (
    <section>
      <h1>Detalhe do produto #{id}</h1>
      <Gallery images={images} />
    </section>
  );
}
