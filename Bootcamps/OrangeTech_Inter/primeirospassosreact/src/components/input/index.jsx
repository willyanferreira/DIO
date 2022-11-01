import React from "react";
import { InputContainer, IconContainer, InputText } from "./style"
import { Controller } from "react-hook-form"
const Input = ({leftIcon, name, control, ...rest}) => {
    return (
        <InputContainer>
            {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
            <Controller 
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => <InputText {...field} {...rest} /> }
            />
        </InputContainer>
    )
}

export { Input }