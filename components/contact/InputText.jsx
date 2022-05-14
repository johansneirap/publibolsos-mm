
export const InputText = ({ placeholder, name, value, handleChange }) => {
  return (
    <input 
        placeholder={ placeholder }
        className="input-primary" 
        type="text" 
        name={ name } 
        id={ name }
        value={ value }
        onChange={ handleChange } />
  )
}
