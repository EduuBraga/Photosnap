import React, { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Container, SectionOne, SectionTwo, SectionThree, CardLightPricing, CardBlackPricing, Switch, SectionFor } from "./style";
import { Button1, Button3 } from "../../components/Buttons/style";

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
      setBasicPrice('$190.90')
      setProPrice('$390.90')
      setBusinessPrice('$990.90')
    }
  }

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
            <h2>Basic</h2>
            <p>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
            <div>
              <p>{basicPrice}</p>
              {MonthlyOrYearly === 'monthly' ? (<span>per month</span>) : (<span>per year</span>)}
            </div>
            <Button1>PICK PLAN</Button1>
          </CardLightPricing>

          <CardBlackPricing>
            <h2>Pro</h2>
            <p>More advanced features available. Recommended for photography veterans and professionals.</p>
            <div>
              <p>{proPrice}</p>
              {MonthlyOrYearly === 'monthly' ? (<span>per month</span>) : (<span>per year</span>)}
            </div>
            <Button3>PICK PLAN</Button3>
          </CardBlackPricing>

          <CardLightPricing>
            <h2>Business</h2>
            <p>Additional features available such as more detailed metrics. Recommended for business owners.</p>
            <div>
              <p>{businessPrice}</p>
              {MonthlyOrYearly === 'monthly' ? (<span>per month</span>) : (<span>per year</span>)}
            </div>
            <Button1>PICK PLAN</Button1>
          </CardLightPricing>
        </SectionThree>

        <SectionFor>
          
        </SectionFor>
      </main>

      <Footer />
    </Container>
  )
}