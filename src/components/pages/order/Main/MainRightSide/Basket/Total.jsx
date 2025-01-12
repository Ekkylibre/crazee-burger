import { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../context/OrderContext"
import { theme } from "../../../../../../theme"
import Header from "../../../../../reusable-ui/Header"
import { calculateSumToPay } from "./helper"
import CasinoEffect from "../../../../../reusable-ui/CasinoEffect"
import { formatPrice } from "../../../../../../utils/maths"

export default function Total() {
  const { basket, menu } = useContext(OrderContext)

  const sumToPay = calculateSumToPay(basket, menu)

  return (
    <Header>
      <TotalStyled>
        <span className="total">Total</span>
        {/* <span className="amount">{formatPrice(sumToPay)}</span> */}
        <CasinoEffect count={formatPrice(sumToPay)} />
      </TotalStyled>
    </Header>
  )
}

const TotalStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.primary};
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`
