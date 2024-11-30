import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Card from "../../../../reusable-ui/Card";
import { formatPrice } from "../../../../../utils/maths";
import OrderContext from "../../../../context/OrderContext";
import EmptyMenuClient from "./Menu/EmptyMenuClient";
import EmptyMenuAdmin from "./Menu/EmptyMenuAdmin";
import { checkIfProductIsClicked } from "./Menu/helper";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png"

export default function Menu() {
  const { menu, isModeAdmin, handleDelete, resetMenu, setProductSelected, productSelected } = useContext(OrderContext)
  // state

  // comportements

  // affichage
  if (menu.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />
    return <EmptyMenuAdmin onReset={resetMenu} />
  }

  const handleClick = (idProductClicked) => { 
    console.log("idProductClicked:", idProductClicked)
    const productClickedOn = menu.find((product)=> product.id === idProductClicked)
   setProductSelected(productClickedOn)
  }

  const handleCardDelete = (event, idProducToDelete) => { 
    event.stopPropagation()
    handleDelete(idProducToDelete)
   }

  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={(event) => handleCardDelete(event, id)}
            onClick={()=>handleClick(id)}
            isHoverable={isModeAdmin}
            isSelected={checkIfProductIsClicked(id, productSelected.id)}
          />
        )
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`
