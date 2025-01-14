import { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../context/OrderContext.jsx"
import AdminPanel from "./AdminPanel/AdminPanel.jsx"
import AdminTabs from "./AdminTabs"
import { fadeInFromBottom } from "../../../../../../theme/animations.js"
import { theme } from "../../../../../../theme/index.js"

export default function Admin() {
  const { isCollapsed } = useContext(OrderContext)

  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;

  animation: ${fadeInFromBottom} ease-out ${theme.animations.speed.slow};
`
