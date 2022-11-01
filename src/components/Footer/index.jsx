import React from "react";

import { Button4 } from "../Buttons/style";

import facebook_white from '../../assets/icons/facebook_white.png';
import twitter_white from '../../assets/icons/twitter_white.png';
import youtube_white from '../../assets/icons/youtube_white.png';
import pinterest_white from '../../assets/icons/pinterest_white.png';
import instagram_white from '../../assets/icons/instagram_white.png';
import facebook_color from '../../assets/icons/facebook_color.png';
import twitter_color from '../../assets/icons/twitter_color.png';
import youtube_color from '../../assets/icons/youtube_color.png';
import pinterest_color from '../../assets/icons/pinterest_color.png';
import instagram_color from '../../assets/icons/instagram_color.png';
import arrow_white from '../../assets/icons/arrow_white.png';

import { Container, ContainerRight, ContainerLeft, Logo, Nav, MidiasSociais, ContainerLogoAndMidia } from "./style";

export function Footer() {
  return (
    <Container>
      <ContainerLeft>
        <ContainerLogoAndMidia>
          <div>
            <Logo>
              <span></span>
              <span></span>
              <span></span>
            </Logo>
            <p>PHOTOSNAP</p>
          </div>

          <MidiasSociais>
            <div>
              <img src={facebook_white} alt="Ícone facebook" />
              <img src={facebook_color} alt="Ícone facebook" />
            </div>
            <div>
              <img src={youtube_white} alt="ícone Youtube" />
              <img src={youtube_color} alt="ícone Youtube" />
            </div>
            <div>
              <img src={twitter_white} alt="Ícone twitter" />
              <img src={twitter_color} alt="Ícone twitter" />
            </div>
            <div>
              <img src={pinterest_white} alt="Ícone pinterest" />
              <img src={pinterest_color} alt="Ícone pinterest" />
            </div>
            <div>
              <img src={instagram_white} alt="Ícone instagram" />
              <img src={instagram_color} alt="Ícone instagram" />
            </div>
          </MidiasSociais>
        </ContainerLogoAndMidia>

        <Nav>
          <a>HOME</a>
          <a>STORIES</a>
          <a>FEATURES</a>
          <a>PRINCING</a>
        </Nav>
      </ContainerLeft>

      <ContainerRight>
        <Button4>GET IN INVITE <img src={arrow_white} alt="Arrow right" /></Button4>
        <p>Copyright 2019. All Rights Reserved</p>
      </ContainerRight>
    </Container>
  )
};