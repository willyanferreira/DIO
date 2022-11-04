import { ButtonContainer } from "./style";

export const  Button = ({label, onClick, className}) => {
    return (
      <ButtonContainer onClick={onClick} className={className}>
        {label}
      </ButtonContainer>
    );
  }
  