import styled, { css } from "styled-components"
import { theme } from "../../theme"

export default function Button({ label, Icon, className, version = "normal", onClick, disabled = false }) {
  return (
    <StyledButton
      className={`${className} ${disabled ? 'is-disabled' : ''}`}
      version={version}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{label}</span>
      {Icon && <span className="icon">{Icon}</span>}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 18px 24px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 800;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;
  transition: all 200ms ease-out;

  ${({ version }) => version === "success" && extraStyleSuccess};
  ${({ version }) => version === "normal" && extraStylePrimary};

  &:disabled {
    opacity: 50%;
    cursor: not-allowed;
    z-index: 2;
  }
  
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const extraStylePrimary = css`
  background-color: #ff9f1b;
  color: white;
  border: 1px solid #ff9f1b;

  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
  }

  &:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  &.with-focus {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.white};
    }
  }
`

const extraStyleSuccess = css`
  background: ${theme.colors.success};
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  height: 35px;
  padding: 0 1.5em;
  font-weight: ${theme.fonts.weights.semiBold};

  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }

  &:active {
    background: ${theme.colors.success};
    color: ${theme.colors.white};
  }
`
