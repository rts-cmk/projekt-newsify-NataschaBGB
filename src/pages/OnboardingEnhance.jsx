import { Link } from "react-router";

import onboarding_enhance from '../assets/onboarding_3.png'

export default function OnboardingEnhance() {

  return (
    <main className="onboarding-enhance">
        
        <figure className="onboarding-enhance__image">
          <img src={onboarding_enhance} alt="newsify_onboarding_enhance" />
        </figure>
        
        <article className="onboarding-enhance__figcaption">
          <h1 className="onboarding-enhance__title">Enhance your News Journey Now!</h1>
          <p className="onboarding-enhance__description">Be part of our dynamic community and contribute your insights and participate in enriching conversations.</p>
        </article>

        <section className="onboarding-enhance__active-dots">
          <span className="onboarding-enhance__dot"></span>
          <span className="onboarding-enhance__dot"></span>
          <span className="onboarding-enhance__dot onboarding-enhance__dot--active"></span>
        </section>
        
        <section className="onboarding-enhance__buttons">
            <Link to={"/authentication"}>
                <button className="onboarding-welcome__skip">Skip</button>    
            </Link>
            <Link to={"/authentication"}>
                <button className="onboarding-welcome__continue">Continue</button>
            </Link>
        </section>

    </main>
  )
}