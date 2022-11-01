import styled from "styled-components"

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
 
    p{
      font-weight: 700;
      font-size: 20px;
      position: relative;
      top: 4px;
      right: 25px;
      z-index: 10;
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
    background-color: white;
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
    background-color: white;
    z-index: 5;
    position: relative;
    right: 17px;
    bottom: 4px;
    rotate: 55deg;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 37px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;

  a:active, a:hover{
    opacity: 0.3;
    text-decoration: none;
  }
`
