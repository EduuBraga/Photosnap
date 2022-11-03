import styled from "styled-components";

import img1_section3_features from '../../assets/images/img1_section3_features.png'

export const Container = styled.div`
  
`

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
  padding: 116px;

  article{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    text-align: center;

    img{
      margin-bottom: 1rem;
      width: 80px;
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

  ::before{
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

  div, button{
    z-index: 2;
  }
`