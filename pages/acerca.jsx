import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <div style={{
        padding: "2rem 5rem",
      }}>
        <h1 className="title">
          Quienes Somos
        </h1>

        <p className="description">
          Empresa con más de x años en el rubro con vasta experiencia en el mercado de confecciones bolsos, mochilas y merchandising.
        </p>
      </div>
    </MainLayout>
  );
}
