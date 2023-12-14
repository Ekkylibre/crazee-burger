import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LoginForm() {
    // state
    const [inputValue, setinputValue] = useState("")

    // comportement
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Bonjour ${inputValue}`)
    }

    const handleChange = (event) => {
        setinputValue(event.target.value)
    }
    return <form action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <br />
        <h2>Connectez-vous</h2>
        <input value={inputValue} onChange={handleChange} type="text" placeholder="Entre votre prénom..." required />
        <button>Accédez à votre espace</button>
        <Link to="/order">Vers OrderPage</Link>
    </form>
}