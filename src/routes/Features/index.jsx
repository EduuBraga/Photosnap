import React from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button4 } from "../../components/Buttons/style";

import midias_sociais from "../../assets/icons/midias_sociais.jpg";
import infinite from "../../assets/icons/infinite.jpg";
import media_screen from "../../assets/icons/media_screen.jpg";
import domain from "../../assets/icons/domain.jpg";
import boost from "../../assets/icons/boost.jpg";
import drop_img from "../../assets/icons/drop_img.jpg";
import arrow_white from "../../assets/icons/arrow_white.png";

import { SectionOne, SectionThree, SectionTwo } from "./style";

export function Features() {
  let navigate = useNavigate()

  return (
    <>
      <Header />

      <main>
        <SectionOne>
          <div>
            <article>
              <h1>FEATURES</h1>
              <p>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</p>
            </article>
          </div>
          <div></div>
        </SectionOne>

        <SectionTwo>
          <article>
            <img src={media_screen} alt="Medias screen" />
            <h3>100% Responsive</h3>
            <p>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
          </article>
          <article>
            <img src={infinite} alt="ícone do infinite" />
            <h3>No Photo Upload Limit</h3>
            <p>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
          </article>
          <article>
            <img src={midias_sociais} alt="Midias sociais" />
            <h3>Available to Embed</h3>
            <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </p>
          </article>
          <article>
            <img src={domain} alt="Medias screen" />
            <h3>Custom Domain</h3>
            <p>With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!</p>
          </article>
          <article>
            <img src={drop_img} alt="Midias sociais" />
            <h3>Drag & Drop Image</h3>
            <p>Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.</p>
          </article>
          <article>
            <img src={boost} alt="ícone do infinite" />
            <h3>Boost Your Exposure</h3>
            <p>Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.</p>
          </article>
        </SectionTwo>

        <SectionThree>
          <div>
            <h1>WE´RE IN BETA. <br/> GET YOUR INVITE <br/> TODAY!</h1>
          </div>
          <Button4 onClick={() => { navigate('/pricing') }}>GET AN INVITE <img src={arrow_white} alt="Arrow right" /></Button4>
        </SectionThree>
      </main>

      <Footer />
    </>
  )
}