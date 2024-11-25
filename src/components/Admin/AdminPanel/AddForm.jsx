import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../context/OrderContext.jsx";

export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
}

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: new Date().getTime(),
    }

    handleAdd(newProductToAdd)
  }

  const handleChange = (e) => {
    const newValue = e.target.value
    const name = e.target.name
    console.log("newValue:", e.target.value)
    setNewProduct({ ...newProduct, [name]: newValue })
  }

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">Image Preview</div>
      <div className="input-field">
        <input name="title" type="text" placeholder="Nom" onChange={handleChange} value={newProduct.title} />
        <input name="imageSource" type="text" placeholder="Image URL" onChange={handleChange} value={newProduct.imageSource} />
        <input name="price" type="text" placeholder="Prix" onChange={handleChange} value={newProduct.price ? newProduct.price : ""} />
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