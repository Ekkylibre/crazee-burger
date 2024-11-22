import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { useContext } from "react";
import ToastAdmin from "./ToastAdmin";
import { toast } from "react-toastify";
import OrderContext from "../../../context/OrderContext";

export default function NavBarRightSide() {

  const {isModeAdmin, setisModeAdmin} = useContext(OrderContext)

  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    setisModeAdmin(!isModeAdmin)
  }

  return (
    <NavBarRightSideStyled>
      <ToggleButton
        isChecked={isModeAdmin}
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        onToggle={displayToastNotification} />
      <Profile />
      <ToastAdmin />
    </NavBarRightSideStyled>
  )
}

const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;