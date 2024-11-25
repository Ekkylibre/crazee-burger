import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../context/OrderContext.jsx";

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext)

  const [title, setTitle] = useState("")
  const [imageSource, setimageSource] = useState("")
  const [price, setPrice] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(newProduct)
  }

  const newProduct = {
    id: new Date().getTime(),
    title: "Nouveau produit",
    imageSource: "https://ffcuisine.fr/wp-content/uploads/2024/06/1718492522_recette-facile-de-chicken-burger-gourmand-et-rapide.jpg",
    price: 2.5,
  }

  const handleTitileChange = (e) => {
    setTitle(e.target.value)
  }

  const handleImageChange = (e) => {
    setimageSource(e.target.value)
  }
  const handlePriceChange = (e) => {
    setPrice(e.target.value)
  }

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">Image Preview</div>
      <div className="input-field">
        <input type="text" placeholder="Nom" onChange={handleTitileChange} value={title} />
        <input type="text" placeholder="Image URL" onChange={handleImageChange} value={imageSource} />
        <input type="text" placeholder="Prix" onChange={handlePriceChange} value={price ? price : ""} />
      </div>
      <button className="submit-button">Submit button</button>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;

  .image-preview {
    background: red;
    grid-area: 1/1/4/2;
  }

  .input-field {
    background: blue;
    grid-area: 1/-2/-2/-1;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }

  .submit-button {
    background: green;
    grid-area: 4/-2/-1/-1;
    width: 50%;
    
  }
`;