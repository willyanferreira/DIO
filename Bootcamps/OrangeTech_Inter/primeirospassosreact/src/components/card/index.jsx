import React from "react";
import { 
    CardContainer,
    ImageBackground,
    Content,
    UserInfo,
    UserPicture,
    PostInfo,
    HasInfo
} from "./style";
import { FiThumbsUp } from "react-icons/fi"

const Card = () => {
    return(
        <CardContainer>
            <ImageBackground />
            <Content>
                <UserInfo>
                    <UserPicture />
                    <div>
                        <h4>Willyan Ferreira</h4>
                        <p>Há alguns dias</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Curso de React</h4>
                    <p>recriando página de usuário logado da DIO</p>
                </PostInfo>
                <HasInfo>
                    <h4>#React</h4>
                    <p>
                        <FiThumbsUp /> 12
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }