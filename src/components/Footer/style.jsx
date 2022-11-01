import styled from "styled-components"

export const Container = styled.footer`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 65px 150px;
`

export const ContainerLeft = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 80px;
`

export const ContainerLogoAndMidia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 80px;

  div:nth-child(1){
    display: flex;
    justify-content: center;
    align-items: center;

    p{
      font-weight: 700;
      font-size: 20px;
      position: relative;
      top: 4px;
      right: 25px;
      z-index: 10;
      margin: 0px;
    } 
  }
`

export const Logo = styled.div`
  span{
    width: 27px;
    height: 27px;
  }
  span:nth-child(1){
    width: 30px;
    height: 20px;
    background-color: black;
    z-index: 5;
    position: relative;
    left: 17px;
    bottom: 4px;
    rotate: 305deg;
  }
  span:nth-child(2){
    background: linear-gradient(26.57deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%);
  }
  span:nth-child(3){
    width: 30px;
    height: 20px;
    background-color: black;
    z-index: 5;
    position: relative;
    right: 17px;
    bottom: 4px;
    rotate: 55deg;
  }
`

export const MidiasSociais = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;

  div{
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

  a{
    font-size: 12px;
    letter-spacing: 2px;

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

  p{
    opacity: 0.5;
  }
`