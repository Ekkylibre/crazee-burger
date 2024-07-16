import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { theme } from "../../../../theme";
import { useState } from "react";
import ToastAdmin from "./ToastAdmin";
import { toast } from "react-toastify";

export default function NavBarRightSide({ username }) {

  const [isModeAdmin, setisModeAdmin] = useState(false);

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
        labelIfUnchecked="ACTIVER LE MODE ADMAIN"
        labelIfChecked="DÉSACTIVER LE MODE ADMAIN"
        onToggle={displayToastNotification} />
      <Profile username={username} />
      <ToastAdmin />
    </NavBarRightSideStyled>
  )
}

const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;