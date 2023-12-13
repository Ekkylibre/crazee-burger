import { useState } from "react"

export default function LoginPages() {
   // state
   const [inputValue,setinputValue] = useState("")

   // comportement
   const handleSubmit = (event) => { 
     event.preventDefault()
     alert(`Bonjour ${inputValue}`)
    }
 
    const handleChange = (event) => { 
     const newInputValue = event.target.value
     setinputValue(newInputValue)
     }
 
   // affichage
   return <div>
     <h1>Bienvenue chez nous !</h1>
     <br/>
     <h2>Connectez-vous</h2>
     <form action="submit" onSubmit={handleSubmit}>
       <input value={inputValue} onChange={handleChange} type="text" placeholder="Entre votre prénom..." required/>
       <button>Accédez à votre espace</button>
     </form>
   </div>
}
