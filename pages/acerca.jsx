import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <div className="about-container">
        <h1 className="title">
          Quienes Somos
        </h1>

        <p className="description">
          Somos una empresa dedicada al diseño y fabricación de bolsos, mochilas y artículos publicitarios a medida de nuestros clientes.
          <br />
          Contamos con más de 20 años de experiencia en el rubro, con impactantes alianzas y espléndidos resultados que nuestros clientes avalan.
          Tenemos además nuestro propio taller de confección, estampado y bordado. Lo que nos permite ofrecer un alto nivel de personalozación para nuestros clientes.
          Pudiendo así, ofrecerles un producto de calidad y confiabilidad, dentro de los cuáles se pueden encontrar todo tipo de bolsos y mochilas para Congresos, Centros Deportivos, Universidades, Centros de Salud, Minería y en general cualquier tipo de institución.
        </p>
      </div>
    </MainLayout>
  );
}
