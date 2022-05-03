import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function Contact() {
  return (
    <MainLayout>
      <aside className="contact-aside">
        <h2 className="title">Conversemos</h2>
        <span className="legend-text">Cuentanos que buscas o si tienes alguna idea y encantado te daremos lo que mejor se acomode a tu necesidad</span>

      </aside>
        <section className="form-container">
          <form action="">
            <h2 className="form-title">Estamos siempre abiertos a para ti 24/7</h2>
            <input placeholder="Tu nombre" className="input-primary" type="text" name="name" id="name" />
            <input placeholder="Email" className="input-primary" type="email" name="email" id="email" />
            <input placeholder="Asunto" className="input-primary" type="text" name="asunto" id="asunto" />
            <textarea placeholder="Deja tu mensaje aquí..." className="input-primary" name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
            <button type="submit" className="main-button w-100">Enviar Mensaje</button>
          </form>
          <aside className="contact-info-container">
            <div>
              <h3>Llámanos</h3>
              <p>+1-492-4918-395</p>
              <p>+1-492-4918-395</p>
            </div>
            <div>
              <h3>Envíanos un correo</h3>
              <p>informacion@mail.com</p>
              <p>soporte@mail.com</p>
            </div>
            <div>
              <h3>Visítanos</h3>
              <p>Calle 1 #1</p>
              <p>Ciudad, Estado</p>
            </div>
          </aside>
        </section>
    </MainLayout>
  );
}
