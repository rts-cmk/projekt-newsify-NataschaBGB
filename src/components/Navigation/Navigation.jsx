import './Navigation.sass'

import { Link } from "react-router";

import useLocalStorage from 'use-local-storage'

import { RiHome2Line } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { RiSettings3Line } from "react-icons/ri";


export default function Navigation() {

    const [isDark, setIsDark] = useLocalStorage("isDark", false)

  return (
    <nav className="navigation" data-theme={isDark ? "dark" : "light"}>
        
        <ul className='navigation__navbar'>
            <li className="navigation__item">
                <Link to="/home" className="navigation__link">
                    <RiHome2Line className='navigation__icon' />
                    <p>Home</p>
                </Link>
            </li>
            <li className="navigation__item">
                <Link to="/archive" className="navigation__link">
                    <FaRegBookmark className='navigation__icon' />
                    <p>Archive</p>
                </Link>
            </li>
            <li className="navigation__item">
                <Link to="/popular" className="navigation__link">
                    <FaRegStar className='navigation__icon' />
                    <p>Popular</p>
                </Link>
            </li>
            <li className="navigation__item">
                <Link to='/settings' className="navigation__link">
                    <RiSettings3Line className='navigation__icon' />
                    <p>Settings</p>
                </Link>
            </li>
        </ul>
        
    </nav>
  )
}