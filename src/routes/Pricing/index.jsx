import React, { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Container, SectionOne, SectionTwo, SectionThree, CardLightPricing, CardBlackPricing, Switch } from "./style";
import { Button1, Button3 } from "../../components/Buttons/style";

export function Pricing() {
  const [MonthlyOrYearly, setMonthlyOrYealy] = useState('monthly')
  const checkPrice = document.querySelector('#CheckPrice')

  function toggleMonthlyOrYearly(event){
    event.target.checked ? setMonthlyOrYealy('monthly') : setMonthlyOrYealy('yearly')
  }

  useEffect(()=>{
    console.log(checkPrice)
    console.log(MonthlyOrYearly)
  }, [MonthlyOrYearly])

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
          <Switch onChange={toggleMonthlyOrYearly}>
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
              <p>$19.00</p>
              <span>per month</span>
            </div>
            <Button1>PICK PLAN</Button1>
          </CardLightPricing>

          <CardBlackPricing>
            <h2>Pro</h2>
            <p>More advanced features available. Recommended for photography veterans and professionals.</p>
            <div>
              <p>$39.00</p>
              <span>per month</span>
            </div>
            <Button3>PICK PLAN</Button3>
          </CardBlackPricing>

          <CardLightPricing>
            <h2>Business</h2>
            <p>Additional features available such as more detailed metrics. Recommended for business owners.</p>
            <div>
              <p>$99.00</p>
              <span>per month</span>
            </div>
            <Button1>PICK PLAN</Button1>
          </CardLightPricing>
        </SectionThree>
      </main>

      <Footer />
    </Container>
  )
}