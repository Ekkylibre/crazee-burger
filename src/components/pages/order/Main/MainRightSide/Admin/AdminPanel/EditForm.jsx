import { useContext, useState } from "react"
import OrderContext from "../../../../../../context/OrderContext.jsx"
import Form from "./Form"
import EditInfoMessage from "./EditInfoMessage"
import SavingMessage from "./SavingMessage.jsx"
import { useSuccessMessage } from "../../../../../../../hooks/useSuccessMessage.jsx"

export default function EditForm() {
  // state
  const { username, productSelected, setProductSelected, handleEdit, titleEditRef } = useContext(OrderContext)

  const [valueOnFocus, setvalueOnFocus] = useState()
  const { isSubmitted: isSaved, displaySuccessMessage } = useSuccessMessage()

  // comportements (gestionnaires d'événement ou "event handlers")
  const handleChange = (event) => {
    const { name, value } = event.target

    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    }

    setProductSelected(productBeingUpdated) // cette ligne update le formulaire
    handleEdit(productBeingUpdated, username) // cette ligne update le menu
  }

  const hanldeOnFocus = (event) => {
    const valueOnFocus = event.target.value
    setvalueOnFocus(valueOnFocus)
    console.log("valueOnFocus :", valueOnFocus)
  }

  const handleOnBlur = (event) => {
    const valueOnBlur = event.target.value
    if (valueOnFocus !== valueOnBlur) {
      console.log("ça à changé")
      displaySuccessMessage()
    }
  }

  // affichage
  return (
    <Form product={productSelected} onChange={handleChange} onFocus={hanldeOnFocus} onBlur={handleOnBlur} ref={titleEditRef}>
      {isSaved ? <SavingMessage /> : <EditInfoMessage />}
    </Form>
  )
}
