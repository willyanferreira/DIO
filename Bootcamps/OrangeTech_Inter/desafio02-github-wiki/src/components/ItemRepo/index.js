import React from "react";
import { ItemContainer } from "./styles";

function ItemRepo() {
  return (
    <ItemContainer>
      <h3>Deus é bom!</h3>
      <p>Willyan</p>
      <a href="teste">Ver repositório</a>
      <br />
      <a href="teste" className="remover">Remover</a>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;