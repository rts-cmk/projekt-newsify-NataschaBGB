import useLocalStorage from 'use-local-storage'
import './Header.sass'

import { Link } from "react-router";

import newsify_logo from '../../assets/newsify_logo.png'

export default function Header() {

  const [isDark, setIsDark] = useLocalStorage("isDark", false)

  return (
    <header className="header" data-theme={isDark ? "dark" : "light"}>
        
        <Link to="/home" className="header__logo-link">
            <img src={newsify_logo} alt="Newsify Logo" className="header__image" />
            <h1 className="header__title">Newsify</h1>
        </Link>

    </header>
  )
}