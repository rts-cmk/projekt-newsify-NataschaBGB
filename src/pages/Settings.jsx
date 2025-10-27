import { Link } from "react-router";
import Header from "../components/Header/Header.jsx";
import Navigation from "../components/Navigation/Navigation.jsx";
import SettingsCategories from "../components/SettingsCategories/SettingsCategories.jsx";
import SettingsDarkMode from "../components/SettingsDarkMode/SettingsDarkMode.jsx";
import '../styles/_layout.sass'

export default function Settings() {

  return (
    <>
        <Header />
        <main className="settings-page">
          <h1>Settings</h1>
          <h2>Categories</h2>
            
          <section className='settings-page__categories'>
            <SettingsCategories />
          </section>

          <SettingsDarkMode />
          

        </main>
        <Navigation />
    </>
  )
}