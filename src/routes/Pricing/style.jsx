import styled from "styled-components"

import img1_section1_pricing from '../../assets/images/img1_section1_pricing.png'
import img1_section3_features from '../../assets/images/img1_section3_features.png'

export const SectionOne = styled.section`
  display: grid;
  grid-template: auto / 40% 60%;
  height: 490px;

  @media screen and (max-width: 768px){
    grid-template: auto / 70% 30%;
  }

  div:nth-child(1){
    background-color: #000000;
    color: #ffffff;
    display: flex;
    align-items: center;
    padding: 100px;

    @media screen and (max-width: 768px){
      padding: 54px;
    }

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
        height: 100%;
        width: 6px;
        position: absolute;
        left: -100px;

        @media screen and (max-width: 768px){
          left: -54px;
        }
      }
    }
  }

  div:nth-child(2){
    background-image: url(${img1_section1_pricing}) ;
    background-size: cover;
    background-position: center bottom;
  }
`

export const SectionTwo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 120px 20px 48px 20px;

  @media screen and (max-width: 768px){
    padding: 112px 20px 0px 20px;
  }

  p:nth-child(1){
    font-weight: 700;
    opacity:${({MonthlyOrYearly})=> MonthlyOrYearly === 'monthly' ? ' 1' : '0.5'};
  }
  p:nth-child(3){
    font-weight: 700;
    opacity:${({MonthlyOrYearly})=> MonthlyOrYearly === 'yearly' ? ' 1' : '0.5'};
  }
`

export const Switch = styled.label`
  cursor: pointer;

  div{
    width: 60px;
    height: 30px;
    position: relative;

    span{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      border-radius: 40px;
      background-color: ${({MonthlyOrYearly})=> MonthlyOrYearly === 'monthly' ? 'var(--lightGray)' : '#000'};

      &::before {
        content: "";
        width: 23px;
        height: 23px;
        background-color: ${({MonthlyOrYearly})=> MonthlyOrYearly === 'monthly' ? '#000' : '#fff'};;
        border-radius: 50%;
        position: absolute;
        right: 3px;
        transition: .5s all ease;
      }
    }

    input:checked + ::before {
      transform: translateX(-30px);
    }
  }
`

export const SectionThree = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 0px 165px 0px 165px;

  @media screen and (max-width: 768px){
    gap: 24px;
    flex-direction: column;
    padding: 40px;
  }

  p:nth-child(2), span{
    opacity: 0.6;
  }

  h2{
    @media screen and (max-width: 768px){
      align-self: flex-start;
    }
  }
`

export const CardBlackPricing = styled.section`
  padding: 56px 40px;
  color: white;
  background-color: #000;
  position: relative;

  @media screen and (max-width: 768px){
    display: grid;
    grid-template: auto / 50% 50%;
    flex-direction: row;
    width: auto;
    padding: 40px;
  }

  ::after{
    content: '';
    background-image: linear-gradient(45deg,#ffc593, #bc7198, #5a77ff);
    height: 6px;
    width: 100%;
    position: absolute;
    top: -5px;
    left: 0;

    @media screen and (max-width: 768px){
      height: 100%;
      width: 6px;
      top: 0;
    }
  }
`

export const CardLightPricing = styled.section`
  padding: 56px 40px;
  background-color: #f5f5f5;

  @media screen and (max-width: 768px){
    display: grid;
    grid-template: auto / 50% 50%;
    flex-direction: row;
    width: auto;
    padding: 40px;
  }
`

export const ContentOneCardPricing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 18px;

  @media screen and (max-width: 768px){
    align-items: center;
    text-align: left;
  }

  button{
    width: 100%;
  }

  div{
    margin-bottom: 22px;
    margin-top: 22px;

    @media screen and (max-width: 768px){
      display: none;
    }

    p{
      font-size: 40px;
      line-height: 48px;
      letter-spacing: 4.16667px;
      font-weight: 700;
    }
  }
`

export const ContentTwoCardPricing = styled.div`
  margin-bottom: 22px;
  margin-top: 22px;

  @media screen and (min-width: 769px){
    display: none;
  }

  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    margin: 0px;
  }

  h2{
    @media screen and (max-width: 768px){
      align-self: flex-start;
    }
  }

  p{
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 4.16667px;
    font-weight: 700;
  }
`

export const SectionFor = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 160px 40px 160px 40px;

  h1{
    margin-bottom: 36px;
  }

  table{
    border-collapse: collapse;

    thead{
      tr{
        font-size: 12px;
        font-weight: 700;
        border-bottom: 1px solid #000 ;
       
        th:nth-child(1){
          text-align: left;
          padding: 23.5px 100px 23.5px 23.5px;
          @media screen and (max-width: 768px){
            padding: 23px;
          }
        }
      
        th{
          padding: 23.5px;
          line-height: 15.62px;
          text-align: center;
          letter-spacing: 2px;
        }
      }
    }

    tbody{
      tr{
        font-size: 12px;
        font-weight: 700;
        border-bottom: 1px solid #dfdfdf;

        td:nth-child(1){
          text-align: left;
          padding: 23.5px 100px 23.5px 23.5px;
          
          @media screen and (max-width: 768px){
            padding: 23px;
          }
        }

        td{
          padding: 23.5px;
          line-height: 15.62px;
          text-align: center;
          letter-spacing: 2px;
        }
      }
    }
    
    img{
      width: 16px;
    }
  }
`

export const SectionFive = styled.section`
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
  }

  div, button{
    z-index: 2;
  }
`