import React from "react";
import { useNavigate } from "react-router-dom";

import { Button2, Button4 } from "../../components/Buttons/style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import img1_Section1 from "../../assets/images/img1_section1_home.png";
import img1_Section2 from "../../assets/images/img1_section2_home.png";
import img1_Section3 from "../../assets/images/img1_section3_home.png";
import arrow_white from "../../assets/icons/arrow_white.png";
import arrow_black from "../../assets/icons/arrow_black.png";
import midias_sociais from "../../assets/icons/midias_sociais.jpg";
import infinite from "../../assets/icons/infinite.jpg";
import media_screen from "../../assets/icons/media_screen.jpg";

import { SectionOne, SectionTwo, SectionThree, SectionFor, SectionFive } from "./style";

export function Home() {
  let navigate = useNavigate()

  return (
    <>
      <Header />

      <main>
        <SectionOne>
          <div>
            <h1>CREATE AND SHARE YOUR PHOTO STORIES. </h1>
            <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
            <Button4 onClick={() => { navigate('/pricing') }}>GET AN INVITE <img src={arrow_white} alt="Arrow right" /></Button4>
          </div>
          <div></div>
        </SectionOne>

        <SectionTwo>
          <div></div>
          <div>
            <h1>BEAUTIFUL STORIES EVERY TIME</h1>
            <p>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
            <Button2 onClick={() => { navigate('/stories') }}>VIEW THE STORIES <img src={arrow_black} alt="Arrow right" /></Button2>
          </div>
        </SectionTwo>

        <SectionThree>
          <div>
            <h1>DESIGNED FOR EVERYONE</h1>
            <p>Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. </p>
            <Button2 onClick={() => { navigate('/stories') }}>VIEW THE STORIES <img src={arrow_black} alt="Arrow right" /></Button2>
          </div>
          <div></div>
        </SectionThree>

        <SectionFor>
          <div onClick={() => { navigate('/stories') }}>
            <h3>The Mountains</h3>
            <p>by John Appleseed</p>
            <span></span>
            <h4>READ STORY <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
          <div onClick={() => { navigate('/stories') }}>
            <h3>Sunset Cityscapes</h3>
            <p>by Benjamin Cruz</p>
            <span></span>
            <h4>READ STORY <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
          <div onClick={() => { navigate('/stories') }}>
            <h3>18 Days Voyage</h3>
            <p>by Alexei Borodin</p>
            <span></span>
            <h4>READ STORY <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
          <div onClick={() => { navigate('/stories') }}>
            <h3>Architecturals</h3>
            <p>by Samantha Brooke</p>
            <span></span>
            <h4>READ STORY <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
        </SectionFor>

        <SectionFive>
          <div>
            <img src={media_screen} alt="Medias screen" />
            <h3>100% Responsive</h3>
            <p>No matter which the device you???re on, our site is fully responsive and stories look beautiful on any screen.</p>
          </div>
          <div>
            <img src={infinite} alt="??cone do infinite" />
            <h3>No Photo Upload Limit</h3>
            <p>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
          </div>
          <div>
            <img src={midias_sociais} alt="Midias sociais" />
            <h3>Available to Embed</h3>
            <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </p>
          </div>
        </SectionFive>
      </main>

      <Footer />
    </>
  )
};