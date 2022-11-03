import { ButtonContainer } from "./style";

export const  Button = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  }
  