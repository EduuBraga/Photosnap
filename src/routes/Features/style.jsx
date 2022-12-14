import styled from "styled-components";

import img1_section1_features from '../../assets/images/img1_section1_features.png'
import img1_section3_features from '../../assets/images/img1_section3_features.png';

export const SectionOne = styled.div`
  display: grid;
  grid-template: auto / 45% 55%;
  height: 490px;

  @media screen and (max-width: 768px){
    grid-template: auto / 70% 30%;
  }

  @media screen and (max-width: 426px){
    display: flex;
    flex-direction: column-reverse;
  }

  div:nth-child(1){
    background-color: #000000;
    color: #ffffff;
    display: flex;
    align-items: center;

    article{
      display: flex;
      flex-direction: column;
      gap: 21px;
      position: relative;

      padding: 100px;

      @media screen and (max-width: 768px){
        padding: 54px;
      }

      @media screen and (max-width: 426px){
        padding: 72px 28px;
      }

      p{
        opacity: 0.6;
      }

      ::after{
        content: '';
        background-image: linear-gradient(45deg,#ffc593, #bc7198, #5a77ff);
        height: 100%;
        width: 5px;
        position: absolute;
        top: 0;
        left: 0px;

        @media screen and (max-width: 768px){
          left: 0px;
        }

        @media screen and (max-width: 426px){
          height: 6px;
          width: 40%;
          top: 0px;
          left: 28px;
        }
      }
    }
  }

  div:nth-child(2){
    background-image: url(${img1_section1_features});
    background-repeat: no-repeat;
    background-position: center left;
    background-size: cover;

    @media screen and (max-width: 426px){
      height: 294px;
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

  @media screen and (max-width: 768px){
    grid-template: auto auto auto / 1fr 1fr;
    gap: 11px;
    padding:  112px 40px 72px  40px;
  }

  @media screen and (max-width: 426px){
    grid-template: auto auto auto auto auto auto / auto;
    gap: 0px;
    padding:  112px 40px 72px  40px;
  }

  article{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    text-align: center;
    padding-bottom: 84px;

    @media screen and (max-width: 426px){
      padding-bottom: 56px;
    }

    img{
      margin-bottom: 32px;
      width: 71px;
    }
  }
`

export const SectionThree = styled.section`
  color: #fff;
  padding: 68px 165px;
  position: relative;
  background-image: url(${img1_section3_features}) ;
  background-size: cover;
  background-position: center bottom;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px){
    padding: 68px 40px;
  }
  
  @media screen and (max-width: 426px){
    padding: 64px 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
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
    opacity: 0.6;
  }

  &::after{
    content: '';
    background-image: linear-gradient(45deg,#ffc593, #bc7198, #5a77ff);
    height: 100%;
    width: 6px;
    position: absolute;
    left: 0px;
    z-index: 5;

    @media screen and (max-width: 426px){
      height: 6px;
      width: 40%;
      top: 0px;
      left: 28px;
    }
  }

  div, button{
    z-index: 2;
  }
`