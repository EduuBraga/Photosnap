import React, { useState } from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button1, Button3, Button4 } from "../../components/Buttons/style";

import arrow_white from "../../assets/icons/arrow_white.png";
import check from "../../assets/icons/check.png";

import { SectionOne, SectionTwo, SectionThree, CardLightPricing, CardBlackPricing, Switch, SectionFor, SectionFive, ContentOneCardPricing, ContentTwoCardPricing } from "./style";

export function Pricing() {
  const [MonthlyOrYearly, setMonthlyOrYealy] = useState('monthly')
  const [basicPrice, setBasicPrice] = useState('$19.00')
  const [proPrice, setProPrice] = useState('$39.00')
  const [businessPrice, setBusinessPrice] = useState('$99.00')

  function toggleMonthlyOrYearly(event) {
    if (event.target.checked) {
      setMonthlyOrYealy('monthly')
      setBasicPrice('$19.90')
      setProPrice('$39.90')
      setBusinessPrice('$99.90')
    } else {
      setMonthlyOrYealy('yearly')
      setBasicPrice('$190.00')
      setProPrice('$390.00')
      setBusinessPrice('$990.00')
    }
  }

  return (
    <>
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

        <SectionTwo MonthlyOrYearly={MonthlyOrYearly}>
          <p>Monthlly</p>
          <Switch onChange={toggleMonthlyOrYearly} MonthlyOrYearly={MonthlyOrYearly}>
            <div >
              <input id="CheckPrice" type="checkbox" defaultChecked={true} />
              <span ></span>
            </div>
          </Switch>
          <p>Yearly</p>
        </SectionTwo>

        <SectionThree>
          <CardLightPricing>
            <ContentOneCardPricing>
              <h2>Basic</h2>
              <p>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
              <div>
                <p>{basicPrice}</p>
                {MonthlyOrYearly === 'monthly' ? (<span>per month</span>) : (<span>per year</span>)}
              </div>
              <Button1>PICK PLAN</Button1>
            </ContentOneCardPricing>

            <ContentTwoCardPricing>
              <p>{basicPrice}</p>
              {MonthlyOrYearly === 'monthly' ? (<span>per month</span>) : (<span>per year</span>)}
            </ContentTwoCardPricing>
          </CardLightPricing>

          <CardBlackPricing>
            <ContentOneCardPricing>
              <h2>Pro</h2>
              <p>More advanced features available. Recommended for photography veterans and professionals.</p>
              <div>
                <p>{proPrice}</p>
                {MonthlyOrYearly === 'monthly' ? (<span>per month</span>) : (<span>per year</span>)}
              </div>
              <Button3>PICK PLAN</Button3>
            </ContentOneCardPricing>

            <ContentTwoCardPricing>
              <p>{proPrice}</p>
              {MonthlyOrYearly === 'monthly' ? (<span>per month</span>) : (<span>per year</span>)}
            </ContentTwoCardPricing>
          </CardBlackPricing>

          <CardLightPricing>
            <ContentOneCardPricing>
              <h2>Business</h2>
              <p>Additional features available such as more detailed metrics. Recommended for business owners.</p>
              <div>
                <p>{businessPrice}</p>
                {MonthlyOrYearly === 'monthly' ? (<span>per month</span>) : (<span>per year</span>)}
              </div>
              <Button1>PICK PLAN</Button1>
            </ContentOneCardPricing>

            <ContentTwoCardPricing>
              <p>{businessPrice}</p>
              {MonthlyOrYearly === 'monthly' ? (<span>per month</span>) : (<span>per year</span>)}
            </ContentTwoCardPricing>
          </CardLightPricing>
        </SectionThree>

        <SectionFor>
          <h1>COMPARE</h1>
          <table>
            <thead>
              <tr>
                <th>THE FEATURES</th>
                <th>BASIC</th>
                <th>PRO</th>
                <th>BUSINESS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>UNLIMITED STORY POSTING</td>
                <td><img src={check} alt="icon check" /></td>
                <td><img src={check} alt="icon check" /></td>
                <td><img src={check} alt="icon check" /></td>
              </tr>
              <tr>
                <td>UNLIMITED PHOTO UPLOAD</td>
                <td><img src={check} alt="icon check" /></td>
                <td><img src={check} alt="icon check" /></td>
                <td><img src={check} alt="icon check" /></td>
              </tr>
              <tr>
                <td>EMBEDDING CUSTOM CONTENT</td>
                <td></td>
                <td><img src={check} alt="icon check" /></td>
                <td><img src={check} alt="icon check" /></td>
              </tr>
              <tr>
                <td>CUSTOMIZE METADATA</td>
                <td></td>
                <td><img src={check} alt="icon check" /></td>
                <td><img src={check} alt="icon check" /></td>
              </tr>
              <tr>
                <td>ADVANCED METRICS</td>
                <td></td>
                <td></td>
                <td><img src={check} alt="icon check" /></td>
              </tr>
              <tr>
                <td>PHOTO DOWNLOADS</td>
                <td></td>
                <td></td>
                <td><img src={check} alt="icon check" /></td>
              </tr>
              <tr>
                <td>SEARCH ENGINE INDEXING</td>
                <td></td>
                <td></td>
                <td><img src={check} alt="icon check" /></td>
              </tr>
              <tr>
                <td>CUSTOM ANALYTICS</td>
                <td></td>
                <td></td>
                <td><img src={check} alt="icon check" /></td>
              </tr>
            </tbody>
          </table>
        </SectionFor>

        <SectionFive>
          <div>
            <h1>WE´RE IN BETA. <br /> GET YOUR INVITE <br /> TODAY!</h1>
          </div>
          <Button4 onClick={() => { navigate('/pricing') }}>GET AN INVITE <img src={arrow_white} alt="Arrow right" /></Button4>
        </SectionFive>
      </main>

      <Footer />
    </>
  )
}