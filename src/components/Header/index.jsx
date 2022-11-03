import React from "react";
import { useNavigate } from "react-router-dom";

import { Button1 } from "../../components/Buttons/style";

import logo from '../../assets/icons/logo.png';

import { Container, Nav } from "./style";

export function Header() {
  let navigate = useNavigate()

  return (
    <Container>
      <div onClick={() => { navigate('/') }}>
        <img src={logo} alt="Logo da photosnap" />
        <p>PHOTOSNAP</p>
      </div>
      <Nav>
        <a onClick={() => { navigate('/stories') }}>STORIES</a>
        <a onClick={() => { navigate('/features') }}>FEATURES</a>
        <a onClick={() => { navigate('/pricing') }}>PRICING</a>
      </Nav>
      <Button1 onClick={() => { navigate('/pricing') }}>GET AN INVITE</Button1>
    </Container>
  )
}