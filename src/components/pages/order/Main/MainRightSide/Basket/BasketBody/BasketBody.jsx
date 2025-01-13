import { useContext } from "react";
import { isEmpty } from "../../../../../../../utils/array";
import Basket from "../Basket";
import BasketProducts from "./BasketProducts";
import EmptyBasket from "./EmptyBasket";
import OrderContext from "../../../../../../context/OrderContext";

export default function BasketBody() {
      const { basket, menu } = useContext(OrderContext)
    
  return (
    <>
        {isEmpty(Basket) ? <EmptyBasket isLoading={menubar === undefined} /> : <BasketProducts />}
    </>
  )
}
