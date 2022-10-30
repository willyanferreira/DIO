// import { Link } from "react-router-dom"
import { Button } from "../../components/button"
import { Header } from "../../components/header"
import {
    Container,
    Title,
    TitleLogin,
    SubTitleLogin,
    EsqueciText,
    CriarText,
    Wrapper,
    Column,
    Row
} from "./style"
// import bannerImage from "../../assets/img/banner.png"
import { Input } from "../../components/input"
import { MdEmail, MdLock } from "react-icons/md"

const Login = () => {
    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change</SubTitleLogin>
                        <form action="">
                            <Input placeholder="E-mail" leftIcon={<MdEmail />} />
                            <Input placeholder="Senha" type="password" leftIcon={<MdLock />} />
                            <Button title="Entrar" variant="secondary" />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Login }