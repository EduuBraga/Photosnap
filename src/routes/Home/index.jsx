import React from "react"

import { Button1, Button2, Button3, Button4 } from "../../components/Buttons/style"
import { Header } from "../../components/Header"

import img1_Section1 from "../../assets/images/img1_section1.png"
import arrow_white from "../../assets/icons/arrow_white.png"

import { Container, SectionOne } from "./style"

export function Home(){
  return(
    <Container>
      <Header></Header>
      <SectionOne>
        <div>
          <h1>CREATE AND SHARE YOUR PHOTO STORIES. </h1>
          <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
          <Button4>GET AN INVITE <img src={arrow_white} alt="Arrow right" /></Button4>
        </div>
        <div>
          <img src={img1_Section1} alt="Fotógrafo na praia" />
        </div>
      </SectionOne>
    </Container>
  )
}