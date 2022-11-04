import styled from "styled-components";

export const Container = styled.footer`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  gap: 100px;
  padding: 65px 150px;

  @media screen and (max-width: 768px){
    padding: 65px 40px;
  }
  @media screen and (max-width: 580px){
    padding: 56px 33px;
  }
`

export const ContainerLeft = styled.div`
  display: none;
  justify-content: space-between;
  gap: 80px;

  @media screen and (min-width: 769px){
    display: flex;
  }
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 8px;

  @media screen and (max-width: 768px){
    justify-content: flex-start;
  }

  img{
    width: 25px;
  }

  p{
    font-weight: 700;
    font-size: 20px;
  } 
`

export const ContainerLeftTwo = styled.div`
  display: none;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  gap: 72px;

  @media screen and (max-width: 768px){
    display: flex;
  }
  @media screen and (max-width: 581px){
    display: none;
  }
`

export const ContainerLogoAndNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`

export const ContainerLogoAndMidia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
`

export const MidiasSociais = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;

  @media screen and (max-width: 580px){
    padding-top: 32px;
  }

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img:nth-child(1){
      width: 20px;
      cursor: pointer;
      position: absolute;
      opacity: 1;
      z-index: 1;
      transition: all 400ms ease;
      &:active{
        transform: scale(0.95);
      }
      &:hover{
        opacity: 0;
      }
    }
    img:nth-child(2){
      width: 20px;
      cursor: pointer;

      &:active{
        transform: scale(0.95);
      }
    }
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 19px;

  @media screen and (max-width: 768px){
    flex-direction: row;
    gap: 26px;
  }

  @media screen and (max-width: 580px){
    flex-direction: column;
    gap: 19px;
    padding-top: 50px;
    padding-bottom: 120px;
  }

  a{
    font-size: 12px;
    letter-spacing: 2px;
    transition: all 0.2s ease;

    &:active, &:hover{
      text-decoration: none;
      opacity: 0.3;
    }
  }
`

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 86px;

  @media screen and (max-width: 581px){
    display: none;
  }

  p{
    opacity: 0.5;
  }
`

export const ContainerMobileScreen = styled.div`
  display: none;
  flex-direction: column;
  margin: 0 auto;
  align-items: center ;

  @media screen and (max-width: 580px){
    display: flex;
  }
`

export const ContainerBefore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  p{
    opacity: 0.5;
  }
`