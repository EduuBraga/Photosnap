import React from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Container, SectionOne, SectionTwo } from "./style";

export function Pricing() {
  return (
    <Container>
      <Header />

      <main>
        <SectionOne>
          <div>
            <article>
              <h1>PRICING</h1>
              <p>Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.</p>
            </article>
          </div>
          <div />
        </SectionOne>

        <SectionTwo>

        </SectionTwo>
      </main>

      <Footer />
    </Container>
  )
}