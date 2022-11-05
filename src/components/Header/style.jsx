import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  grid-template: auto / 30% 70%;
  justify-content: space-between;
  padding: 0px 40px;
  align-items: center;
  color: black;
  height: 70px;
  position: relative;
  z-index: 15;
`

export const Logo = styled.div`
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
`

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 37px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
  letter-spacing: 2px;

  @media screen and (max-width: 768px){
    flex-direction: column;
    gap: 20px;
    border-bottom: 1px solid #000;
    padding-bottom: 20px;

    a{
      text-align: center;
      width: 80vw;
    }
  }

  a:active, a:hover{
    opacity: 0.3;
    text-decoration: none;
  }
`

export const ContainerMenu = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: 768px){
    display: none;
  }
`

export const ImgMenu = styled.img`
  width: 20px;
  justify-self: flex-end;
  cursor: pointer;

  &:active{
    transform: scale(0.90);
  }

  @media screen and (min-width: 769px){
    display: none;
  }
`

export const ContainerMenuTablet = styled.section`
  z-index: 5;
  background-color: #00000060;
  position: fixed;
  top: ${({isVisible})=> isVisible ? '100vh' : '0px'};
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.2s ease-out;

  @media screen and (min-width: 769px){
    display: none;
  }
`

export const ContentMenuTablet = styled.div`
  position: fixed;
  top: ${({isVisible})=> isVisible ? '100vh' : '0px'};
  left: 0;
  right: 0;
  background-color: white;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s ease-out;

  button{
    margin-top: 20px;
    width: 90%;
  }
`

export const LogoAndClose = styled.div`
  padding-bottom: 28px;
  
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

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`