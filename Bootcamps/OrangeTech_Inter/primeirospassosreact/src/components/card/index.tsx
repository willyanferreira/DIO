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
import { ICard } from "./types"

const Card = ({userName}: ICard ) => {
    return(
        <CardContainer>
            <ImageBackground src="data:image/jpeg;base64,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" />
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/75634228?s=96&v=4"/>
                    <div>
                        <h4>{userName}</h4>
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