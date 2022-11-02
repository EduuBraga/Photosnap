import styled from "styled-components";

import img1_Section1_stories from "../../assets/images/img1_section1_stories.png";

export const Container = styled.div`
  
`

export const SectionOne = styled.section`
  background-image: url(${img1_Section1_stories});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 112px 120px;                                                                                                                                                                                                                                                                                                  

  *{
    margin: 0px;
  }

  article{
    width: 387px;
    height: 406px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: white;

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

export const CardsStories = styled.section`
  display: grid;
  grid-template: auto / 25% 25% 25% 25%;
  height: 500px;

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
      margin-top: 12px;
      margin-bottom: 16px;
    }
    h4{
      letter-spacing: 2px;
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
    background-image: url(${ ({img}) =>img[0]});
  }
  div:nth-child(2){
    background-image: url(${ ({img}) =>img[1]});
  }
  div:nth-child(3){
    background-image: url(${ ({img}) =>img[2]});
  }
  div:nth-child(4){
    background-image: url(${ ({img}) =>img[3]});
  }
`