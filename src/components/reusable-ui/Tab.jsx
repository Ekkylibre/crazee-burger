import styled from "styled-components";
import { theme } from "../../theme"

export default function Tab({ label, Icon, onClick, className }) {
    return (
        <TabStyled onClick={onClick} className={className}>
            <div className="icon">{Icon}</div>
            {label && <span className="label">{label}</span>}
        </TabStyled>
    )
}

const TabStyled = styled.button`
  border: 1px solid blue;
  height: 43px;
  padding: 0 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  left: 5%;
  top: 1px;

  cursor: pointer;

  //fonts
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};

  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};
  
  //border
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
 
  
  //border-radius
  border-radius: 5px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

  &:hover {
    border-bottom-color: ${theme.colors.white};
    text-decoration: underline;
  }

  .icon {
    display: flex;
  }

  .label {
    margin-left: 13px;
  }
`;
