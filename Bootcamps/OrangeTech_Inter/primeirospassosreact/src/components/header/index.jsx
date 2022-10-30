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
    // UserPicture,
    Input
} from "./style"
import logo from "../../assets/img/logo-dio.png"

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da dio" />
                    <BuscarInputContainer>
                        <Input placeholder="Buscar..." />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }