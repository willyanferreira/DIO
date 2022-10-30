// import { Link } from "react-router-dom"
import { Button } from "../../components/button"
import { Header } from "../../components/header"
import { Container, Title, TitleHeighLight, TextContent} from "./style"
import bannerImage from "../../assets/img/banner.png"

const Feed = () => {
    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHeighLight>
                            Implemente<br/>
                        </TitleHeighLight>
                        o seu futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title="Começar agora" variant="secondary" onClick={() => null} />
                </div>
                <div>
                    <img src={bannerImage} alt="Imagem principal" />
                </div>
            </Container>
        </>
    )
}

export { Feed }