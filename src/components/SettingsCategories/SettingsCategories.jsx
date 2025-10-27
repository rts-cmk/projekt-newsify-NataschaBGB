import logo from '../../assets/newsify_logo.png'

import './SettingsCategories.sass'


export default function SettingsCategories() {

  return (
    <>
        <section className='settings-page__category'>
            <img src={logo} alt="newsify_logo" />
            <h2>Category Headline</h2>
            <label className="settings-page__category-switch">
                <input type="checkbox" className='settings-page__category-input'/>
                <span className="settings-page__category-slider"></span>
            </label>
        </section>
    </>
  )

}