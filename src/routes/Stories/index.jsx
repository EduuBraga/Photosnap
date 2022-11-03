import React from "react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button4 } from "../../components/Buttons/style";

import arrow_white from "../../assets/icons/arrow_white.png";
import img1_section4 from '../../assets/images/img1_section4_home.png';
import img2_section4 from '../../assets/images/img2_section4_home.png';
import img3_section4 from '../../assets/images/img3_section4_home.png';
import img4_section4 from '../../assets/images/img4_section4_home.png';
import img1_section3_stories from '../../assets/images/img1_section3_stories.png';
import img2_section3_stories from '../../assets/images/img2_section3_stories.png';
import img3_section3_stories from '../../assets/images/img3_section3_stories.png';
import img4_section3_stories from '../../assets/images/img4_section3_stories.png';
import img1_section4_stories from '../../assets/images/img1_section4_stories.png';
import img2_section4_stories from '../../assets/images/img2_section4_stories.png';
import img3_section4_stories from '../../assets/images/img3_section4_stories.png';
import img4_section4_stories from '../../assets/images/img4_section4_stories.png';
import img1_section5_stories from '../../assets/images/img1_section5_stories.png';
import img2_section5_stories from '../../assets/images/img2_section5_stories.png';
import img3_section5_stories from '../../assets/images/img3_section5_stories.png';
import img4_section5_stories from '../../assets/images/img4_section5_stories.png';

import { SectionOne, CardsStories } from "./style";

export function Stories() {
  return (
    <>
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

        <CardsStories img={[img1_section4, img2_section4, img3_section4, img4_section4]}>
          <div >
            <p>April 16th 2020</p>
            <h3>The Mountains</h3>
            <p>by John Appleseed</p>
            <span></span>
            <h4>READ STORY <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
          <div >
            <p>April 14th 2020</p>
            <h3>Sunset Cityscapes</h3>
            <p>by Benjamin Cruz</p>
            <span></span>
            <h4>READ STORY <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
          <div >
            <p>April 11th 2020</p>
            <h3>18 Days Voyage</h3>
            <p>by Alexei Borodin</p>
            <span></span>
            <h4>READ STORY <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
          <div >
            <p>April 9th 2020</p>
            <h3>Architecturals</h3>
            <p>by Samantha Brooke</p>
            <span></span>
            <h4>READ STORY <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
        </CardsStories>

        <CardsStories img={[img1_section3_stories, img2_section3_stories, img3_section3_stories, img4_section3_stories]}>
          <div >
            <p>April 7th 2020</p>
            <h3>World Tour 2019</h3>
            <p>by Timothy Wagner</p>
            <span></span>
            <h4>READ STORY <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
          <div >
            <p>April 3rd 2020</p>
            <h3>Unforeseen Corners</h3>
            <p>by William Malcolm</p>
            <span></span>
            <h4>READ STORY <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
          <div >
            <p>March 29th 2020</p>
            <h3>King on Africa: Part II</h3>
            <p>by Tim Hillenburg</p>
            <span></span>
            <h4>READ STORY <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
          <div >
            <p>March 21st 2020</p>
            <h3>The Trip to Nowhere</h3>
            <p>by Felicia Rourke </p>
            <span></span>
            <h4>READ STORY <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
        </CardsStories>

        <CardsStories img={[img1_section4_stories, img2_section4_stories, img3_section4_stories, img4_section4_stories]}>
          <div >
            <p>March 19th 2020</p>
            <h3>Rage of The Sea</h3>
            <p>by Mohammed Abdul</p>
            <span></span>
            <h4>READ STORY <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
          <div >
            <p>March 16th 2020</p>
            <h3>Running Free</h3>
            <p>by Michelle</p>
            <span></span>
            <h4>READ STORY <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
          <div >
            <p>March 11th 2020</p>
            <h3>Behind the Waves</h3>
            <p>by Lamarr Wilson</p>
            <span></span>
            <h4>READ STORY <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
          <div >
            <p>March 9th 2020</p>
            <h3>Calm Waters</h3>
            <p>by Samantha Brooke</p>
            <span></span>
            <h4>READ STORY <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
        </CardsStories>

        <CardsStories img={[img1_section5_stories, img2_section5_stories, img3_section5_stories, img4_section5_stories]}>
          <div >
            <p>March 5th 2020</p>
            <h3>The Milky Way</h3>
            <p>by Benjamin Cruz</p>
            <span></span>
            <h4>READ STORY <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
          <div >
            <p>March 4th 2020</p>
            <h3>Night at The Dark Forest</h3>
            <p>by  Mohammed Abdul</p>
            <span></span>
            <h4>READ STORY <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
          <div >
            <p>March 1st 2020</p>
            <h3>Somwarpet’s Beauty</h3>
            <p>by Michelle</p>
            <span></span>
            <h4>READ STORY <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
          <div >
            <p>February 25th 2020</p>
            <h3>Land of Dreams</h3>
            <p>by William Malcolm</p>
            <span></span>
            <h4>READ STORY <img src={arrow_white} alt="Arrow right" /></h4>
          </div>
        </CardsStories>
      </main>

      <Footer />
    </>
  )
}