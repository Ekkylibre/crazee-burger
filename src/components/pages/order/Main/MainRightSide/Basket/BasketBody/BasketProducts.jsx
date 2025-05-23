import styled from "styled-components"
import BasketCard from "./BasketCard"
import { IMAGE_COMING_SOON } from "../../../../../../../enums/product"
import { useContext } from "react";
import { findObjectById } from "../../../../../../../utils/array"
import { checkIfProductIsClicked } from "../../Menu/helper"
import OrderContext from "../../../../../../context/OrderContext"
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { basketAnimation } from "../../../../../../../theme/animations";

export default function BasketProducts() {
  const {
    basket,
    isModeAdmin,
    handleDeleteBasketProduct,
    menu,
    handleProductSelected,
    productSelected,
  } = useContext(OrderContext)

  const handleOnDelete = (event, id) => {
    event.stopPropagation()
    handleDeleteBasketProduct(id)
  }

  return (
      <TransitionGroup component={BasketProductsStyled} className={"transition-group"}>
        {basket.map((basketProduct) => {
          const menuProduct = findObjectById(basketProduct.id, menu)
          return (
            <CSSTransition
            appear={true}
            classNames={"animation-basket"}
            key={basketProduct.id}
            timeout={300}
            >
              <div className="card-container">
                <BasketCard
                  {...menuProduct}
                  imageSource={menuProduct.imageSource ? menuProduct.imageSource : IMAGE_COMING_SOON}
                  quantity={basketProduct.quantity}
                  onDelete={(event) => handleOnDelete(event, basketProduct.id)}
                  isClickable={isModeAdmin}
                  onClick={isModeAdmin ? () => handleProductSelected(basketProduct.id) : null}
                  isSelected={checkIfProductIsClicked(basketProduct.id, productSelected.id)}
                  className={"card"}
                />
              </div>
            </CSSTransition >
          )
        })}
      </TransitionGroup>
  )
}

const BasketProductsStyled = styled.div`
  /* border: 1px solid red; */
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .card-container {
    /* border: 1px solid blue; */
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    :first-child {
      /* margin-top: 20px; */
      /* border: 1px solid red; */
    }
    :last-child {
      /* margin-bottom: 20px; */
    }
  }

    ${basketAnimation}
`