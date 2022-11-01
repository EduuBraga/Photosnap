import styled from "styled-components"

export const Container = styled.div`
  
`
export const SectionOne = styled.section`
  display: grid;
  grid-template: auto / 45% 55%;
  
  div:nth-child(1){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 21;
    padding: 111px;
    color: white;
    background-color: black;

    P{
      opacity: 0.6;
    }

    button{
      align-self: flex-start;
    }
  }

  div:nth-child(2){
    height: 650px;
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
