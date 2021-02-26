import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
        font-size: 62.5%;
    }

    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }

    h2{
        font-size: 3rem;
        /* font-family: 'Abril Fatface',cursive; */
        font-weight: lighter;
        color:#333;
    }

    h3{
        font-size: 2rem;
        color:#333;
        padding:1.5rem 0rem;
    }
    p{
        font-size: 2rem;
        line-height:200%;
        color: #696969;
    }

    a{
        text-decoration: none;
        color:#333;
    }

    img{
        display: block;
    }

    input{
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
    }

    li{
        list-style-type: none;
    }


    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
        border-color: lightblue;
    }
`;

export default GlobalStyled;
