import Link from "next/link";
import { Form } from "../components/contact/Form";
import { MainLayout } from "../components/layouts/MainLayout";
import circleBg from '../public/asstes/circle-bg.svg';

export default function Contact() {
  return (
    <MainLayout>
      <aside className="contact-aside">
        <h2 className="title">Conversemos</h2>
        <span className="legend-text">Cuentanos que buscas o si tienes alguna idea y encantado te daremos lo que mejor se acomode a tu necesidad</span>

      </aside>
        <section className="form-container">
          <Form />
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
          <div style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            transform: 'translate(50%, 50%)',
            zIndex: 1
          }}>
            <img src={ circleBg.src } alt="circle background" style={{ maxWidth: '100%', maxHeight: '960px', transform: 'rotate(90deg)'}}/>
          </div>
        </section>
    </MainLayout>
  );
}
