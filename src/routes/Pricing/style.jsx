import styled from "styled-components"

import img1_section1_pricing from '../../assets/images/img1_section1_pricing.png'

export const Container = styled.div`
  
`

export const SectionOne = styled.section`
  display: grid;
  grid-template: auto / 40% 60%;
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
    background-image: url(${img1_section1_pricing}) ;
    background-size: cover;
    background-position: center bottom;
  }
`

export const SectionTwo = styled.section`
  
`