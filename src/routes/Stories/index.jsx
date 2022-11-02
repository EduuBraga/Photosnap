import React from "react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button4 } from "../../components/Buttons/style";

import arrow_white from "../../assets/icons/arrow_white.png";

import { Container, SectionOne, SectionTwo, SectionThree } from "./style";

export function Stories() {
  return (
    <Container>
      <Header />

      <main>
        <SectionOne>
          <article>
            <h4>LAST MONTH’S FEATURED STORY</h4>
            <h1>HAZY FULL MOON OF APPALACHIA</h1>
            <div>
              <p>March 2nd 2020</p>
              <p>by John Appleseed</p>
            </div>
            <p>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
            <Button4 onClick={() => { navigate('/stories') }}> READ THE STORY <img src={arrow_white} alt="Arrow right" /></Button4>
          </article>
        </SectionOne>

        <SectionTwo>
          <div onClick={() => { navigate('/stories') }}>
            <p>April 16th 2020</p>
            <h3>The Mountains</h3>
            <p>by John Appleseed</p>
            <span></span>
            <h4>READ STORIES <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
          <div onClick={() => { navigate('/stories') }}>
            <p>April 14th 2020</p>
            <h3>Sunset Cityscapes</h3>
            <p>by Benjamin Cruz</p>
            <span></span>
            <h4>READ STORIES <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
          <div onClick={() => { navigate('/stories') }}>
            <p>April 11th 2020</p>
            <h3>18 Days Voyage</h3>
            <p>by Alexei Borodin</p>
            <span></span>
            <h4>READ STORIES <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
          <div onClick={() => { navigate('/stories') }}>
            <p>April 9th 2020</p>
            <h3>Architecturals</h3>
            <p>by Samantha Brooke</p>
            <span></span>
            <h4>READ STORIES <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
        </SectionTwo>

        <SectionThree>
          <div onClick={() => { navigate('/stories') }}>
            <p>April 7th 2020</p>
            <h3>World Tour 2019</h3>
            <p>by Timothy Wagner</p>
            <span></span>
            <h4>READ STORIES <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
          <div onClick={() => { navigate('/stories') }}>
            <p>April 3rd 2020</p>
            <h3>Unforeseen Corners</h3>
            <p>by William Malcolm</p>
            <span></span>
            <h4>READ STORIES <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
          <div onClick={() => { navigate('/stories') }}>
            <p>March 29th 2020</p>
            <h3>King on Africa: Part II</h3>
            <p>by Tim Hillenburg</p>
            <span></span>
            <h4>READ STORIES <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
          <div onClick={() => { navigate('/stories') }}>
            <p>March 21st 2020</p>
            <h3>The Trip to Nowhere</h3>
            <p>by Felicia Rourke </p>
            <span></span>
            <h4>READ STORIES <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
        </SectionThree>


      </main>

      <Footer />
    </Container>
  )
}