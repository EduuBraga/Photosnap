import styled from "styled-components"

export const Container = styled.section`
  
`
export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  color: black;
  height: 70px;


  div{
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 700;
    font-size: 20px;

    div{
      border-top: 19px solid green;
      border-right: 19px solid blue;
      border-left: 19px solid red;
      border-bottom: 19px solid linear-gradient(26.57deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%);
      width: 19px;
      height: 19px;

      background: linear-gradient(26.57deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%);
    }
  }
`
