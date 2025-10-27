// import OnboardingButtons from '../components/OnboardingButtons/OnboardingButtons.jsx'

import { Link } from "react-router";

import onboarding_welcome from '../assets/onboarding_1.png'

export default function OnboardingWelcome() {

  return (
    <main className="onboarding-welcome">

      <figure className="onboarding-welcome__image">
        <img src={onboarding_welcome} alt="newsify_onboarding_welcome" />
      </figure>
      
      <article className="onboarding-welcome__figcaption">
        <h1 className="onboarding-welcome__title">Stay Connected, Everywhere, Anytime</h1>
        <p className="onboarding-welcome__description">Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.</p>
      </article>

      <section className="onboarding-welcome__active-dots">
        <span className="onboarding-welcome__dot onboarding-welcome__dot--active"></span>
        <span className="onboarding-welcome__dot"></span>
        <span className="onboarding-welcome__dot"></span>
      </section>

      <section className="onboarding-welcome__buttons">
        <Link to={"/authentication"}>
          <button className="onboarding-welcome__skip">Skip</button>
        </Link>
        <Link to={"/onboarding_discover"}>
          <button className="onboarding-welcome__continue">Continue</button>
        </Link>
      </section>
      
    </main>
  )
}