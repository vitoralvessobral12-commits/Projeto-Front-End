import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <h1>Home</h1>
      <p>Página inicial da Digital Store (em construção).</p>
      <Link to="/produtos">Ver produtos</Link>
    </section>
  );
}
