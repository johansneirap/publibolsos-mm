import { useState } from "react"
import { InputText } from "./InputText";

const formInitialValues = {
    name: "",
    email: "",
    message: "",
    subject: "",
}

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
        placeholder: "Tu nombre"
    },
    email: {
        type: "email",
        name: "email",
        placeholder: "Email"
    },
    subject: {
        type: "text",
        name: "subject",
        placeholder: "Asunto"
    },
    message: {
        type: "textarea",
        name: "message",
        placeholder: "Deja tu mensaje aquí..."
    }
}

export const Form = () => {
    const [formState, setFormState] = useState(formInitialValues);

    const handleChange = ({ target }) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);

        // let data = formState;
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify(formState);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://oy7lzik2fxa56qyewvo6htaeki0mdwxu.lambda-url.us-east-1.on.aws/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .then(() => setFormState(formInitialValues))
        .then(() => alert("Mensaje enviado"))
        .catch(error => console.log('error', error));

    }

    return (
        <form action="">
            <h2 className="form-title">Estamos siempre abiertos a para ti 24/7</h2>
            {
                Object.keys(formInitialValues).map(field => (
                    field !== 'message' &&
                    <InputText key={ field } placeholder={ formStructure[field].placeholder }
                        name={ field }
                        value={ formState[field] }
                        handleChange={ handleChange }/>
                ))
            }
            <textarea 
                placeholder="Deja tu mensaje aquí..." 
                className="input-primary" 
                name="message" 
                id="message" 
                cols="30" rows="10"
                value={ formState.message }
                onChange={ handleChange }>
            </textarea>

            <button 
                type="submit" 
                className="main-button w-100"
                onClick={ handleSubmit }>
                    Enviar Mensaje
            </button>
        </form>
    )
}