import { Link } from "react-router";

import onboarding_discover from '../assets/onboarding_2.png'

export default function OnboardingDiscover() {

  return (
    <main className="onboarding-discover">

        <figure className="onboarding-discover__image">
          <img src={onboarding_discover} alt="newsify_onboarding_discover" />
        </figure>

        <article className="onboarding-discover__figcaption">
          <h1 className="onboarding-discover__title">Become a Savvy Global Citizen.</h1>
          <p className="onboarding-discover__description">Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!</p>
        </article>

        <section className="onboarding-discover__active-dots">
          <span className="onboarding-discover__dot"></span>
          <span className="onboarding-discover__dot onboarding-discover__dot--active"></span>
          <span className="onboarding-discover__dot"></span>
        </section>

        <section className="onboarding-discover__buttons">
            <Link to={"/authentication"}>
                <button className="onboarding-welcome__skip">Skip</button>
            </Link>
            <Link to={"/onboarding_enhance"}>
                <button className="onboarding-welcome__continue">Continue</button>
            </Link>
        </section>
        
    </main>
  )
}