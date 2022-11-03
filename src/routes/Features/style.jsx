import styled from "styled-components";

import img1_section3_features from '../../assets/images/img1_section3_features.png';


export const SectionOne = styled.div`
  display: grid;
  grid-template: auto / 45% 55%;
  height: 490px;

  div:nth-child(1){
    background-color: #000000;
    color: #ffffff;
    display: flex;
    align-items: center;
    padding: 100px;

    article{
      display: flex;
      flex-direction: column;
      gap: 21px;
      position: relative;

      p{
        opacity: 0.6;
      }

      ::after{
        content: '';
        background-image: var(--mainAccent);
        height: 12em;
        width: 5px;
        position: absolute;
        left: -100px;
      }
    }
  }

  div:nth-child(2){
    display: flex;
    justify-content: center;
    align-items: center;
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
  grid-template: auto auto / 1fr 1fr 1fr;
  justify-content: center;
  align-content: center;
  gap: 30px;
  padding:  116px 116px 76px  116px;

  article{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    text-align: center;
    padding-bottom: 84px;

    img{
      margin-bottom: 32px;
      width: 71px;
    }
  }
`

export const SectionThree = styled.section`
  color: white;
  padding: 68px 165px;
  position: relative;
  background-image: url(${img1_section3_features}) ;
  background-size: cover;
  background-position: center bottom;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::before{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000000 ;
    z-index: 1;
    opacity: 0.6;
  }

  &  &::after{
    content: '';
    background-image: linear-gradient(45deg,#ffc593, #bc7198, #5a77ff);
    height: 100%;
    width: 6px;
    position: absolute;
    left: 0px;
    z-index: 5;
  }

  div, button{
    z-index: 2;
  }
`