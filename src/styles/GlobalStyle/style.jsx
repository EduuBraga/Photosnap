import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
    --black:#000000 ;
    --white:#ffffff ;
    --lightGray: #dfdfdf;
    --mainAccent: linear-gradient(#ffc593, #bc7198, #5a77ff);
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body{
    margin: 0px;
    padding: 0px;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    line-height: 25px;
    box-sizing: content-box;
  }

  h1{
    font-size: 40px;
    line-height: 48px;
  }

  h2{
    font-size:24px;
    line-height: 25px;
  }

  h3{
    font-size:18px;
    line-height: 25px;
  }

  h4{
    font-size: 12px;
    line-height: 16px;
  }

  a{
    text-decoration: none;
    cursor: pointer;
    color: inherit;

    &:hover, &:active{
      text-decoration: underline;
    }
  }
`