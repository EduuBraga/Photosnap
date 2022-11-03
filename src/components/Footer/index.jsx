import React from "react";
import { useNavigate } from "react-router-dom";

import logo from '../../assets/icons/logo.png'

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

import { Container, ContainerRight, ContainerLeft, Nav, MidiasSociais, ContainerLogoAndMidia } from "./style";

export function Footer() {
  let navigate = useNavigate()

  return (
    <Container>
      <ContainerLeft>
        <ContainerLogoAndMidia>
          <div onClick={() => { navigate('/') }}>
            <img src={logo} alt="Logo da photosnap" />
            <p>PHOTOSNAP</p>
          </div>

          <MidiasSociais>
            <div>
              <img src={facebook_white} alt="Ícone facebook branco" />
              <img src={facebook_color} alt="Ícone facebook colorido" />
            </div>
            <div>
              <img src={youtube_white} alt="ícone Youtube branco" />
              <img src={youtube_color} alt="ícone Youtube colorido" />
            </div>
            <div>
              <img src={twitter_white} alt="Ícone twitter branco" />
              <img src={twitter_color} alt="Ícone twitter colorido" />
            </div>
            <div>
              <img src={pinterest_white} alt="Ícone pinterest branco" />
              <img src={pinterest_color} alt="Ícone pinterest colorido" />
            </div>
            <div>
              <img src={instagram_white} alt="Ícone instagram branco" />
              <img src={instagram_color} alt="Ícone instagram colorido" />
            </div>
          </MidiasSociais>
        </ContainerLogoAndMidia>

        <Nav>
          <a onClick={() => { navigate('/') }}>HOME</a>
          <a onClick={() => { navigate('/stories') }}>STORIES</a>
          <a onClick={() => { navigate('/features') }}>FEATURES</a>
          <a onClick={() => { navigate('/pricing') }}>PRINCING</a>
        </Nav>
      </ContainerLeft>

      <ContainerRight>
        <Button4 onClick={() => { navigate('/pricing') }}>GET IN INVITE <img src={arrow_white} alt="Arrow right" /></Button4>
        <p>Copyright 2019. All Rights Reserved</p>
      </ContainerRight>
    </Container>
  )
};