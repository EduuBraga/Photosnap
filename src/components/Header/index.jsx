import React from "react"
import { useNavigate } from "react-router-dom";

import { Button1 } from "../../components/Buttons/style"

import { Container, Logo, Nav } from "./style"

export function Header() {
  let navigate = useNavigate()

  return (
    <Container>
      <div>
        <Logo>
          <span></span>
          <span></span>
          <span></span>
        </Logo>
        <p>PHOTOSNAP</p>
      </div>
      <Nav>
        <a onClick={() => { navigate('/stories') }}>STORIES</a>
        <a>FEATURES</a>
        <a>PRICING</a>
      </Nav>
      <Button1>GET AN INVITE</Button1>
    </Container>
  )
}