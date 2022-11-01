import React from "react"
import { Button1 } from "../../components/Buttons/style"
import { Container, Logo, Nav } from "./style"

export function Header() {
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
        <a>STORIES</a>
        <a>FEATURES</a>
        <a>PRICING</a>
      </Nav>
      <Button1>GET AN INVITE</Button1>
    </Container>
  )
}