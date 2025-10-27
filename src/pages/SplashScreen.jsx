import { Link } from "react-router";

import '../styles/_layout.sass'
import newsify_logo from '../assets/newsify_logo.png'

export default function SplashScreen() {

  return (
    <main className="splashscreen">
        <Link to={"/onboarding_welcome"} className="splashscreen__link">
            <img src={newsify_logo} alt="newsify_logo" />
            <h1>Newsify</h1>
        </Link>
    </main>
  )
}