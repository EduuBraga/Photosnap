import styled from "styled-components";

import img1_Section1_stories from "../../assets/images/img1_section1_stories.png";

export const SectionOne = styled.section`
  background-image: url(${img1_Section1_stories});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 426px){
    background-image: none;
    background-color: #000;
  }

  article{
    width: 387px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: white;
    padding: 112px 120px;    
  
    @media screen and (max-width: 768px){
      padding: 122px 30px;   
    }

    @media screen and (max-width: 426px){
      padding: 48px 28px;   
      width: auto;
    }

    h1{
      @media screen and (max-width: 426px){
        font-size: 32px;
        line-height: 40px;
        letter-spacing: 3.33333px;
      }
    }

    div{
      display: flex;
      gap: 9px;
      font-size: 13px;
      letter-spacing: normal;

      p:nth-child(1){
        opacity: 0.75;
      }
    }

    p:nth-child(4){
      opacity: 0.6;
    }
  }
`

export const ContainerImagem = styled.div`
  background-image: url(${img1_Section1_stories});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 427px){
    display: none;
  }
  @media screen and (max-width: 426px){
    height: 270px;
  }
`

export const CardsStories = styled.section`
  display: grid;
  grid-template: 500px / 25% 25% 25% 25%;

  @media screen and (max-width: 768px){
    grid-template: 500px 500px / 50% 50%;
  }

  @media screen and (max-width: 426px){
    grid-template: 400px 400px 400px 400px / auto;
  }

  div{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 4px;
    padding: 30px;
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
    background-image: url(${({ img }) => img[0]});
  }
  div:nth-child(2){
    background-image: url(${({ img }) => img[1]});
  }
  div:nth-child(3){
    background-image: url(${({ img }) => img[2]});
  }
  div:nth-child(4){
    background-image: url(${({ img }) => img[3]});
  }
`