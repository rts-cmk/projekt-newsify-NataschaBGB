import { Themes } from '../components/Themes/Themes'
import useLocalStorage from 'use-local-storage'
// import { useLocation } from 'react-router';

import Header from "../components/Header/Header.jsx";
import Navigation from "../components/Navigation/Navigation.jsx";
import SettingsCategories from "../components/SettingsCategories/SettingsCategories.jsx";
import '../styles/_layout.sass'

export default function Settings() {

  // const location = useLocation()
  // console.log(location.state);
  
  const [isDark, setIsDark] = useLocalStorage("isDark", false)

  return (
    <>
        <Header />
        <main className="settings-page" data-theme={isDark ? "dark" : "light"}>
          
          <h1>Settings</h1>
          <h2>Categories</h2>
            
          <section className='settings-page__categories'>
            {/* get all section_names from popular and home fetches to insert in category */}
            <SettingsCategories category="section_name">

            </SettingsCategories>
          </section>
          
          <Themes isThemeChecked={isDark} handleThemeChange={() => setIsDark(!isDark)} />

        </main>
        <Navigation />
    </>
  )
}