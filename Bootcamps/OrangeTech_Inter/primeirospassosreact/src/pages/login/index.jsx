// import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
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
import { useForm } from "react-hook-form"

const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm();
    const onSubmit = data => console.log(data);

    const handleClick = () => {
        navigate("./feed")
    }
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
                        <form onSubmit={handleSubmit}>
                            <Input name="email" control={control} placeholder="E-mail" type="text" leftIcon={<MdEmail />} />
                            <Input name="password" control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                            <Button title="Entrar" variant="secondary" onClick={handleClick} type="submit"/>
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