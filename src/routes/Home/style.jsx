import styled from "styled-components"

import img1_section4 from '../../assets/images/img1_section4.png'
import img2_section4 from '../../assets/images/img2_section4.png'
import img3_section4 from '../../assets/images/img3_section4.png'
import img4_section4 from '../../assets/images/img4_section4.png'

export const Container = styled.div`
  
`
export const SectionOne = styled.section`
  display: grid;
  grid-template: auto / 45% 55%;
  height: 650px;
  
  div:nth-child(1){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 21;
    padding: 111px;
    color: white;
    background-color: black;

    h1{
      letter-spacing: 4.16667px;
    }

    P{
      opacity: 0.6;
    }

    button{
      margin-top: 20px;
      align-self: flex-start;
    }
  }

  div:nth-child(2){
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`

export const SectionTwo = styled.section`
  display: grid;
  grid-template: auto / 55% 45%;
  height: 650px;
  
  div:nth-child(1){
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  div:nth-child(2){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 21;
    padding: 111px;
    color: black;
    background-color: white;
    
    h1{
      letter-spacing: 4.16667px;
    }

    P{
      opacity: 0.6;
    }

    button{
      margin-top: 20px;
      align-self: flex-start;
    }
  }
`

export const SectionThree = styled.section`
  display: grid;
  grid-template: auto / 45% 55%;
  height: 650px;
  
  div:nth-child(1){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 21;
    padding: 111px;
    color: black;
    background-color: white;

    h1{
      letter-spacing: 4.16667px;
    }

    P{
      opacity: 0.6;
    }

    button{
      margin-top: 20px;
      align-self: flex-start;
    }
  }

  div:nth-child(2){
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`

export const SectionFor = styled.section`
  display: grid;
  grid-template: auto / auto auto auto auto;
  height: 500px;

  div{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 12px;
    padding: 30px;

    color: white;
    z-index: 10;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;
    transition: overflow 0.1s, transform 0.3s ease-out;
    cursor: pointer;

    h3{
      margin: 0px;
    }
    p{
      margin:0px;
    }
    span{
      border-bottom: 1px solid white;
      opacity: 0.25;
    }
    h4{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0px;

      img{
        width: 28px;
      }
    }

    &::after{
      content: '';
      z-index: 5;
      display: block;
      width: 100%;
      height: 5px;
      background-image: linear-gradient(45deg,#ffc593, #bc7198, #5a77ff);
      position: absolute;
      bottom: -5px;
      left: 0;
    }

    &:active, &:hover{
      transform: translateY(-20px);
      overflow: visible;
    }
  }

  div:nth-child(1){
    background-image: url(${img1_section4});
  }
  div:nth-child(2){
    background-image: url(${img2_section4});
  }
  div:nth-child(3){
    background-image: url(${img3_section4});
  }
  div:nth-child(4){
    background-image: url(${img4_section4});
  }
`

export const SectionFive = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  padding: 116px;

  div{
    width: 350px;
    height: 236px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    text-align: center;

    h3{
      margin: 0px;
    }
    p{
      margin: 0px;
    }

    img{
      margin-bottom: 25px;
      width: 74px;
    }
  }
`