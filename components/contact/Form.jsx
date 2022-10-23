import { useState } from "react";
import { InputText } from "./InputText";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const formInitialValues = {
  name: "",
  email: "",
  message: "",
  subject: "",
};

const fadeInBottomToTop = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 1.5, ease: "easeInOut", delay: 0.0 },
};

// const placeholderByField = {
//     name: "Tu nombre",
//     email: "Email",
//     subject: "Asunto",
//     message: "Deja tu mensaje aquí...",
// }

const formStructure = {
  name: {
    type: "text",
    name: "name",
    placeholder: "Tu nombre",
  },
  email: {
    type: "email",
    name: "email",
    placeholder: "Email",
  },
  subject: {
    type: "text",
    name: "subject",
    placeholder: "Asunto",
  },
  message: {
    type: "textarea",
    name: "message",
    placeholder: "Deja tu mensaje aquí...",
  },
};

export const Form = () => {
  const [formState, setFormState] = useState(formInitialValues);

  const handleChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify(formState);

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    MySwal.fire({
      title: <p>Enviando correo...</p>,

      didOpen: () => {
        MySwal.showLoading();
        fetch(
          "https://oy7lzik2fxa56qyewvo6htaeki0mdwxu.lambda-url.us-east-1.on.aws/",
          requestOptions
        )
          .then((response) => response.text())
          .then(() => setFormState(formInitialValues))
          .then(() =>
            MySwal.fire(
              "Correo enviado!",
              "Nos pondremos brevemente en contacto contigo!",
              "success"
            )
          )
          .catch(() =>
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No pudimos enviar tu correo",
              footer:
                "Estamos investigando la situacion, mientras tanto puedes intentar comunicarte por cualquiera de nuestros canales de comunicación",
            })
          );
      },
    })
      .then(() => {
        return MySwal.fire(
          "Correo enviado!",
          "Nos pondremos brevemente en contacto contigo!",
          "success"
        );
      })
      .catch(() => {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No pudimos enviar tu correo",
          footer:
            "Estamos investigando la situacion, mientras tanto puedes intentar comunicarte por cualquiera de nuestros canales de comunicación",
        });
      });
  };

  return (
    <motion.form action="" {...fadeInBottomToTop}>
      <h2 className="form-title">Estamos siempre abiertos a para ti 24/7</h2>
      {Object.keys(formInitialValues).map(
        (field) =>
          field !== "message" && (
            <InputText
              key={field}
              placeholder={formStructure[field].placeholder}
              name={field}
              value={formState[field]}
              handleChange={handleChange}
            />
          )
      )}
      <textarea
        placeholder="Deja tu mensaje aquí..."
        className="input-primary"
        name="message"
        id="message"
        cols="30"
        rows="10"
        value={formState.message}
        onChange={handleChange}
      ></textarea>

      <button
        type="submit"
        className="main-button w-100"
        onClick={handleSubmit}
      >
        Enviar Mensaje
      </button>
    </motion.form>
  );
};
