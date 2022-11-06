import React from "react";
import { ButtonContainer } from "./styles";

function Button({onClick}) {
  return (
    <ButtonContainer onClick={onClick}>
      Procurar
    </ButtonContainer>
  );
}

export default Button;