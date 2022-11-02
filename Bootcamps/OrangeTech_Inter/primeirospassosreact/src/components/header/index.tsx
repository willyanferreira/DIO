import React from "react"
import { Button } from "../button"
import {
    Container,
    Row,
    // Column,
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    UserPicture,
    Input
} from "./style"
import logo from "../../assets/img/logo-dio.png"

const Header = ({autenticado}) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da dio" />
                    {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder="Buscar..." />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? 
                            <UserPicture src="https://avatars.githubusercontent.com/u/75634228?s=96&v=4" />
                     : 
                        <>
                            <MenuRight href="#">Home</MenuRight>
                            <Button title="Entrar" />
                            <Button title="Cadastrar" />
                        </>
                    }
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }