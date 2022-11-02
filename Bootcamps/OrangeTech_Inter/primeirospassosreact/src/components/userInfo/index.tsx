import React from "react";
import { 
    Container,
    UserPicture,
    NameText,
    Progress 
} from "./style";
import { IUserInfo } from "./types";

const UserInfo = ({name, img, percentual}: IUserInfo) => {
    return (
        <Container>
            <UserPicture src={img}/>
            <div>
                <NameText>{name}</NameText>
                <Progress percentual={percentual}/>
            </div>
        </Container>
    )
}

export { UserInfo }