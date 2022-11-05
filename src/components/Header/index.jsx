import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button1 } from "../../components/Buttons/style";

import logo from '../../assets/icons/logo.png';
import menu from '../../assets/icons/menu.png';
import close from '../../assets/icons/close.png';

import { Container, Nav, Logo, ContainerMenu, ImgMenu, ContainerMenuTablet, LogoAndClose, ContentMenuTablet } from "./style";

export function Header() {
  let navigate = useNavigate()
  const [visibleMenu, setVisibleMenu] = useState(false)

  function toggleVisibleMenu() {
    visibleMenu ? setVisibleMenu(false) : setVisibleMenu(true)
  }

  return (
    <Container>
      <Logo onClick={() => { navigate('/') }}>
        <img src={logo} alt="Logo da photosnap" />
        <p>PHOTOSNAP</p>
      </Logo>

      <ContainerMenu>
        <Nav>
          <a onClick={() => { navigate('/stories') }}>STORIES</a>
          <a onClick={() => { navigate('/features') }}>FEATURES</a>
          <a onClick={() => { navigate('/pricing') }}>PRICING</a>
        </Nav>
        <Button1 onClick={() => { navigate('/pricing') }}>GET AN INVITE</Button1>
      </ContainerMenu>

      <ImgMenu onClick={toggleVisibleMenu} src={menu} alt="ícone do menu" />

      <ContainerMenuTablet isVisible={visibleMenu}>
        <ContentMenuTablet isVisible={visibleMenu}>
          <LogoAndClose>
            <div onClick={() => { navigate('/') }}>
              <img src={logo} alt="Logo da photosnap" />
              <p>PHOTOSNAP</p>
            </div>

            <ImgMenu onClick={toggleVisibleMenu} src={close} alt="ícone do menu" />
          </LogoAndClose>

          <Nav>
            <a onClick={() => { navigate('/stories') }}>STORIES</a>
            <a onClick={() => { navigate('/features') }}>FEATURES</a>
            <a onClick={() => { navigate('/pricing') }}>PRICING</a>
          </Nav>

          <Button1 onClick={() => { navigate('/pricing') }}>GET AN INVITE</Button1>
        </ContentMenuTablet>
      </ContainerMenuTablet>
    </Container>
  )
}