import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { useState } from "react";
import OrderContext from "../../context/OrderContext";
import { useParams } from "react-router-dom";
import { fakeMenu } from "../../../fakeData/fakeMenu";


export default function OrderPage() {
  // state
  const { username } = useParams()
  const [isModeAdmin, setIsModeAdmin] = useState(true)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [menu, setMenu] = useState(fakeMenu.MEDIUM)

  // comportements

  const handleAdd = (newProduct) => {
    const menuCopy = [...menu];
  
    const menuUpdated = [newProduct, ...menuCopy];
  
    setMenu(menuUpdated);
  };  

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    handleAdd,
    menu,
    setMenu,
  }

  //affichage
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar username={username} />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  )
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`
