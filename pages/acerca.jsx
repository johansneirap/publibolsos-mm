import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import transitionBgShape from '../public/asstes/transition-bg-shape.svg'

export default function About() {
  return (
    <MainLayout>
      <section className="about-container">
      <div className="about-shape-bg">
          <img src={ transitionBgShape.src } alt="circle background" style={{ maxWidth: '100%'}}/>
        </div>
        <h1 className="title">
          Quienes Somos
        </h1>
        <article className="about-card-container">
          <div className="about-card">
            <h3 className="about-card-title">EMPRESA</h3>
            <span className="about-card-text">
              Somos una empresa dedicada al diseño y fabricación de bolsos, mochilas y artículos publicitarios a medida de nuestros clientes.
              Poseemos más de 20 años de experiencia en el rubro, con impactantes alianzas y espléndidos resultados que nuestros clientes avalan.
              Tenemos además nuestro propio taller de confección, estampado y bordado. Lo que nos permite ofrecer un alto nivel de personalozación para nuestros clientes.
              Contamos además con un equipo capacitado para afrontar cualquier tipo de desafío 
            </span>
          </div>
          <div className="about-card">
            <h3 className="about-card-title">NUESTRO ENFOQUE</h3>
            <span className="about-card-text">
            Tenemos un enfoque al detalle con tal de poder conectar con cada requerimiento de nuestros clientes, desde nuestra primer encuentro, en la elección de cada uno de los materiales, pasando por la confección del producto, hasta un cuidadoso control de calidad. 
            Todo esto con el fin de poder ofrecerles un producto de calidad y confiabilidad, dentro de los cuáles se pueden encontrar todo tipo de bolsos y mochilas para Congresos, Centros Deportivos, Universidades, Centros de Salud, Minería y en general cualquier tipo de institución.
            </span>
          </div>
        </article>
        {/* <p className="description">
          <br />
          Contamos con más de 20 años de experiencia en el rubro, con impactantes alianzas y espléndidos resultados que nuestros clientes avalan.
          Tenemos además nuestro propio taller de confección, estampado y bordado. Lo que nos permite ofrecer un alto nivel de personalozación para nuestros clientes.
          Pudiendo así, ofrecerles un producto de calidad y confiabilidad, dentro de los cuáles se pueden encontrar todo tipo de bolsos y mochilas para Congresos, Centros Deportivos, Universidades, Centros de Salud, Minería y en general cualquier tipo de institución.
        </p> */}
      </section>
    </MainLayout>
  );
}
