import React from "react";
import { 
    Container,
    UserPicture,
    NameText,
    Progress 
} from "./style";

const UserInfo = ({name, img, percentual}) => {
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