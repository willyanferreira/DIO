// import { Link } from "react-router-dom"
// import { Button } from "../../components/button"
import { Header } from "../../components/header"
import { Card } from "../../components/card"
import { UserInfo } from "../../components/userInfo"
import { Container, Title, TitleHighLight, Column } from "./style"
// import bannerImage from "../../assets/img/banner.png"

const Feed = () => {
    return (
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card userName="Willyan Carlos" />
                    <Card userName="Ferreira da Silva" />
                    <Card userName="Soares" />
                </Column>

                <Column flex={1}>
                    <TitleHighLight># Top 5 da semana</TitleHighLight>
                    <UserInfo name="Willyan Carlos" img="https://avatars.githubusercontent.com/u/75634228?s=96&v=4" percentual={70} />
                    <UserInfo name="Ferreira da Silva" img="https://avatars.githubusercontent.com/u/75634228?s=96&v=4" percentual={90} />
                    <UserInfo name="Soares" img="https://avatars.githubusercontent.com/u/75634228?s=96&v=4" percentual={80} />
                </Column>
            </Container>
        </>
    )
}

export { Feed }