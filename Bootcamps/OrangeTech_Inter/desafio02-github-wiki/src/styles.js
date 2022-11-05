import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body{
        background-color: #22272e;
        color: #fff;
    }

    svg{
        background-color: #fff;
        border-radius: 50%;
        border: none;
        margin-bottom: 20px;
    }

    a{
        text-decoration: none;
    }
` 