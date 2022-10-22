import Link from "next/link";
import { Form } from "../components/contact/Form";
import { MainLayout } from "../components/layouts/MainLayout";
import circleBg from "../public/asstes/circle-bg.svg";
import { motion } from "framer-motion";

const fadeInTopToBottom = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 1.5, ease: "easeInOut", delay: 0.0 },
};

export default function Contact() {
  return (
    <MainLayout>
      <aside className="contact-aside">
        <motion.h2 className="title" {...fadeInTopToBottom}>
          Conversemos
        </motion.h2>
        <motion.span className="legend-text" {...fadeInTopToBottom}>
          Cuentanos que buscas o si tienes alguna idea y encantado te daremos lo
          que mejor se acomode a tu necesidad
        </motion.span>
      </aside>
      <section className="form-container">
        <Form />
        <aside className="contact-info-container">
          <div>
            <h3>Llámanos</h3>
            <p>+56 9 891 364 50</p>
            {/* <p>+1-492-4918-395</p> */}
          </div>
          <div>
            <h3>Envíanos un correo</h3>
            <p>contacto.mochilasmineras@gmail.com</p>
            <p>reactionbag@gmail.com</p>
          </div>
          <div>
            <h3>Visítanos</h3>
            <p>Pasaje Ríos Gallardo #0359</p>
            <p>Quilpué, V Región</p>
          </div>
        </aside>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            transform: "translate(50%, 50%)",
            zIndex: 1,
          }}
        >
          <img
            src={circleBg.src}
            alt="circle background"
            style={{
              maxWidth: "100%",
              maxHeight: "960px",
              transform: "rotate(90deg)",
            }}
          />
        </div>
      </section>
    </MainLayout>
  );
}
