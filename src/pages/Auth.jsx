import { Link } from "react-router";

import useLocalStorage from 'use-local-storage'
import newsify_logo from '../assets/newsify_logo.png'

export default function Authentication() {

  const [isDark, setIsDark] = useLocalStorage("isDark", false)

  return (
    <main className="authentication" data-theme={isDark ? "dark" : "light"}>
        
        <figure className="authentication__logo">
          <img src={newsify_logo} alt="newsify_logo" className="authentication__image" />
          <h1 className="authentication__title">Newsify</h1>
          <figcaption className="authentication__figcaption">
            <p>Welcome! Let's dive into your account!</p>
          </figcaption>
        </figure>
        
        <section className="authentication__login-buttons">
          <button className="authentication__login-facebook">Continue with Facebook</button>
          <button className="authentication__login-google">Continue with Google</button>
        </section>

        <section className="authentication__divider">
          <hr />
          <p>or</p>
        </section>
        
        <section className="authentication__login-password">
          <Link to={"/home"}>
            <button>Sign in with password</button>
          </Link>
        </section>

        <p className="authentication__no-account">Don’t have an account? <a href="#">Sign up</a></p>

    </main>
  )
}