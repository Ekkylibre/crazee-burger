import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from "styled-components"

export default function LoginForm() {
    // state
    const [inputValue, setinputValue] = useState("")
    const navigate = useNavigate()

    // comportement
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate(`order/${inputValue}`)
    }

    const handleChange = (event) => {
        setinputValue(event.target.value)
    }

    // affichage
    return <LoginFormStled action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <br />
        <h2>Connectez-vous</h2>
        <input value={inputValue} onChange={handleChange} type="text" placeholder="Entre votre prénom" required />
        <button>Accéder à mon espace</button>
    </LoginFormStled>
}

const LoginFormStled = styled.form`
  background: green;
  display: flex;
  flex-direction: column;
`;