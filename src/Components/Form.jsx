import React from "react";


const Form = () => {
  const [values, setValues] = React.useState({
    name: "",
    Email: ""
  })
  const [validations, setValidations] = React.useState({
    name: '',
    email: '',
  })
  const validateAll = () => {
    const { name, email } = values
    const validations = { name: '', email: '' }
    let isValid = true
    if (!name) {
      validations.name = "Nombre es requerido"
      isValid = false
    }
    if ((name && name.length < 5)) {
      validations.name = 'Nombre debe contener mas de 5 caracteres'
      isValid = false
    }
    if (!email) {
      validations.email = 'Email es requerido'
      isValid = false
    }
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      validations.email = 'Formato de Email no valido Ejemplo@mail.com'
      isValid = false
    }
    if (!isValid) {
      setValidations(validations)
    }
    return isValid
  }
  const validateOne = (e) => {
    const { name } = e.target
    const value = values[name]
    let message = ''
    if (!value) {
      message = "Nombre es requerido"
    }
    if (value && name === 'name' && (value.length < 5)) {
      message = 'Nombre debe contener mas de 5 caracteres'
    }
    if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      message = 'Formato de Email no valido Ejemplo@mail.com'
    }
    setValidations({ ...validations, [name]: message })
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validateAll()
    if (!isValid) {
      return false
    }
    alert(`Gracias ${name}, te contactaremos cuando antes vía mail`);

  }
  const { name, email } = values
  const { name: nameVal, email: emailVal } = validations

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name" placeholder="Nombre completo"
            value={name}
            onChange={handleChange}
            onBlur={validateOne}
          />
          <div>{nameVal}</div>
        </div>
        <div>
          <input
            type="email"
            name="email" placeholder="Email"
            value={email}
            onChange={handleChange}
            onBlur={validateOne}
          />
          <div>{emailVal}</div>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
export default Form;
