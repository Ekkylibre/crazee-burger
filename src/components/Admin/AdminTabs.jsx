import styled from "styled-components";
import Tab from "../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../theme";

export default function AdminTabs({ isCollapsed, setisCollapsed }) {

    return (
        <AdminTabsStyled>
            <Tab Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown/>} onClick={() => setisCollapsed(!isCollapsed)} 
            className={isCollapsed ? "is-active": ""}/>
        </AdminTabsStyled>
    )
}

const AdminTabsStyled = styled.div`
  /* border: 1px solid red; */

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white}
  }
`;