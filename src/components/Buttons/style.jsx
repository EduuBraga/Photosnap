import styled from "styled-components"

export const Button1 = styled.button`
  width: 158px;
  height: 40px;
  background-color: var(--black);
  color: var(--white);
  top: calc(50% - 16px/2);
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 2px;
  border: none;
  transition: all 0.3s;
  cursor: pointer;

  &:hover, &:active{
    color: var(--black);
    background-color: var(--lightGray);
  }
`
export const Button2 = styled.button`
  height: 40px;
  background-color: #00000000;
  color: var(--black);
  top: calc(50% - 16px/2);
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 2px;
  border: none;
  transition: all 0.3s;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  img{
    width: 25px;
  }

  &:hover, &:active{
    text-decoration: underline;
  }
`
export const Button3 = styled.button`
  width: 158px;
  height: 40px;
  background-color: var(--white);
  color: var(--black);
  top: calc(50% - 16px/2);
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 2px;
  border: none;
  transition: all 0.3s;
  cursor: pointer;

  &:hover, &:active{
    color: var(--white);
    background-color: var(--lightGray);
  }
`
export const Button4 = styled.button`
  height: 40px;
  background-color: #00000000;
  color: var(--white);
  top: calc(50% - 16px/2);
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 2px;
  border: none;
  transition: all 0.3s;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  img{
    width: 25px;
  }

  &:hover, &:active{
    text-decoration: underline;
  }
`