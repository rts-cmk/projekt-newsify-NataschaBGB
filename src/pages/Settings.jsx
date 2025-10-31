import { Themes } from '../components/Themes/Themes'
import useLocalStorage from 'use-local-storage'
// import { useLocation } from 'react-router';

import logo from '../assets/newsify_logo.png'
import Header from "../components/Header/Header.jsx";
import Navigation from "../components/Navigation/Navigation.jsx";
import SettingsCategories from "../components/SettingsCategories/SettingsCategories.jsx";
import '../styles/_layout.sass'

export default function Settings() {
  
  const [isDark, setIsDark] = useLocalStorage("isDark", false)
  
  return (
    <>
        <Header />
        <main className="settings-page" data-theme={isDark ? "dark" : "light"}>
          
          <h1 className='settings-page__title'>Settings</h1>
          <h2 className='settings-page__subtitle'>Categories</h2>
            
          <section className='settings-page__categories'>
            {/* get all section_names from popular and home fetches to insert in category */}
            <SettingsCategories />
          </section>
          
          <Themes isThemeChecked={isDark} handleThemeChange={() => setIsDark(!isDark)} />

        </main>
        <Navigation />
    </>
  )
}