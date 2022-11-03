import styled from "styled-components";

import img1_section4 from '../../assets/images/img1_section4_home.png'
import img2_section4 from '../../assets/images/img2_section4_home.png'
import img3_section4 from '../../assets/images/img3_section4_home.png'
import img4_section4 from '../../assets/images/img4_section4_home.png'

export const SectionOne = styled.section`
  display: grid;
  grid-template: auto / 45% 55%;
  height: 650px;
  
  div:nth-child(1){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 21px;
    padding: 111px;
    color: white;
    background-color: black;

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
    gap: 21px;
    padding: 111px;
    color: black;
    background-color: white;

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
    gap: 21px;
    padding: 111px;
    color: black;
    background-color: white;

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
  grid-template: auto / 25% 25% 25% 25%;
  height: 500px;

  div{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 4px;

    padding: 40px;
    color: white;
    z-index: 10;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: overflow 0s, transform 0.3s ease-out;
    
    &:active, &:hover{
      transform: translateY(-26px);
      overflow: visible;
    }

    &::after{
      content: '';
      z-index: 5;
      display: block;
      width: 100%;
      height: 6px;
      background-image: linear-gradient(45deg,#ffc593, #bc7198, #5a77ff);
      position: absolute;
      bottom: -6px;
      left: 0;
    }

    &::before{
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #000000 ;
      z-index: 1;
      opacity: 0.3;
    }

    h3, p, span, h4{
      z-index: 2;
    }

    p{
      font-size: 13px;
      line-height: 17px;
    }

    span{
      border-bottom: 1px solid white;
      opacity: 0.25;
      margin-top: 12px;
      margin-bottom: 16px;
    }

    h4{
      letter-spacing: 2px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img{
        width: 28px;
      }
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

    p{
      opacity: 0.6;
    }

    img{
      margin-bottom: 25px;
      width: 71px;
    }
  }
`