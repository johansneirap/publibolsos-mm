import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import transitionBgShape from '../public/asstes/transition-bg-shape.svg';
import { motion } from "framer-motion";

export default function About() {

  return (
    <MainLayout>
      <section className="about-container">
      <div className="about-shape-bg">
          <img src={ transitionBgShape.src } alt="circle background" style={{ maxWidth: '100%'}}/>
        </div>
        <motion.h1 
          className="title"
          initial={{ y: -100, opacity: 0 }}
            animate={{ 
              y: 0,
              opacity: 1,
              transition: { duration: 1.5, ease: "easeInOut" }
            }}>
          Quienes Somos
        </motion.h1>
        <article className="about-card-container">
          <motion.div 
            className="about-card" 
            initial={{ x: -100, opacity: 0 }}
            animate={{ 
              x: 0,
              opacity: 1,
              transition: { duration: 1.5, ease: "easeInOut" }
            }}>
            <h3 className="about-card-title">EMPRESA</h3>
            <span className="about-card-text">
              Somos una empresa dedicada al diseño y fabricación de bolsos, mochilas y artículos publicitarios a medida de nuestros clientes.
              Poseemos más de 20 años de experiencia en el rubro, con impactantes alianzas y espléndidos resultados que nuestros clientes avalan.
              Tenemos además nuestro propio taller de confección, estampado y bordado. Lo que nos permite ofrecer un alto nivel de personalozación para nuestros clientes.
              Contamos además con un equipo capacitado para afrontar cualquier tipo de desafío 
            </span>
          </motion.div>
          <motion.div 
            className="about-card"
            initial={{ x: 100, opacity: 0 }}
            animate={{ 
              x: 0,
              opacity: 1,
              transition: { duration: 1.5, ease: "easeInOut" }
            }}>
            <h3 className="about-card-title">NUESTRO ENFOQUE</h3>
            <span className="about-card-text">
            Tenemos un enfoque al detalle con tal de poder conectar con cada requerimiento de nuestros clientes, desde nuestra primer encuentro, en la elección de cada uno de los materiales, pasando por la confección del producto, hasta un cuidadoso control de calidad. 
            Todo esto con el fin de poder ofrecerles un producto de calidad y confiabilidad, dentro de los cuáles se pueden encontrar todo tipo de bolsos y mochilas para Congresos, Centros Deportivos, Universidades, Centros de Salud, Minería y en general cualquier tipo de institución.
            </span>
          </motion.div>
        </article>
      </section>
    </MainLayout>
  );
}
