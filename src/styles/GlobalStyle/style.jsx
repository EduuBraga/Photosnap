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

  p{
    margin: 0px;
  }

  h1{
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 4.16667px;
    margin: 0px;
  }

  h2{
    font-size:24px;
    line-height: 25px;
    margin: 0px;
  }

  h3{
    font-size:18px;
    line-height: 25px;
    margin: 0px;
  }

  h4{
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 2px;
    margin: 0px;
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