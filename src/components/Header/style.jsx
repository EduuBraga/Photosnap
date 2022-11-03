import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  color: black;
  height: 70px;


  div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    img{
      width: 25px;
    }

    p{
      font-weight: 700;
      font-size: 20px;
    } 
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 37px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
  letter-spacing: 2px;

  a:active, a:hover{
    opacity: 0.3;
    text-decoration: none;
  }
`