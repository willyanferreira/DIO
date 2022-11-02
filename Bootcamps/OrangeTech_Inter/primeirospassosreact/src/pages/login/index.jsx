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
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from "../../services/api";

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(3, "senha deve ter no mínimo 3 caracteres").required(),
  }).required();

const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
});

    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate("./feed")
            }
        } catch (error) {
            console.log("Houve um erro: ", error);            
        }
    };

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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" control={control} placeholder="E-mail" type="text" leftIcon={<MdEmail />} />
                            <Input name="password" control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                            <Button title="Entrar" variant="secondary"  type="submit"/>
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