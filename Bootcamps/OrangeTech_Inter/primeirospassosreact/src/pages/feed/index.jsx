// import { Link } from "react-router-dom"
import { Button } from "../../components/button"
import { Header } from "../../components/header"
import { Card } from "../../components/card"
import { Container, Title, TitleHeighLight, TextContent} from "./style"
import bannerImage from "../../assets/img/banner.png"

const Feed = () => {
    return (
        <>
            <Header />
            <Container>
                <Card userName="Willyan Carlos"/>
                <Card userName="Willyan Ferreira"/>
                <Card userName="Willyan Da Silva"/>
                <Card userName="Willyan Soares"/>
            </Container>
        </>
    )
}

export { Feed }