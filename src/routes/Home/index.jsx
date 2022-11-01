import React from "react"
import { Button1, Button2, Button3, Button4 } from "../../components/Buttons/style"
import { Container, Header } from "./style"

export function Home(){
  return(
    <Container>
      <Header>
        <div> <div/> <p>PHOTOSNAP</p> </div>
        <nav>
          <a>STORIES</a>
          <a>FEATURES</a>
          <a>PRICING</a>
        </nav>
        <Button1>GET AN INVITE</Button1>
      </Header>
    </Container>
  )
}