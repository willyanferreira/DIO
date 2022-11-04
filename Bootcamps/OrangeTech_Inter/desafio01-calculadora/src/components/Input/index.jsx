import { InputContainer } from "./style";

export const  Input = ({value}) => {
    return (
      <InputContainer>
        <input disabled value={value} />
      </InputContainer>
    );
  }
  