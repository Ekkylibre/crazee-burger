import { createContext } from "react"

export default createContext({
    isModeAdmin: false,
    setIsModeAdmin: () => {},
    isCollapsed: false,
    setisCollapsed: () => {},
    isAddSelected: false,
    setIsAddSelected: () => {},
    isEditSelected: false,
    setIsEditSelected: () => {},

    handleAddProduct: () => {},

    menu : [],
    handleAdd: () => {},
  })