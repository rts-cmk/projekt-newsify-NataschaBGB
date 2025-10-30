import './Themes.sass'

export const Themes = ({handleThemeChange, isThemeChecked}) => {
    return (
        <section className="settings-page__toggle-container">
            <p>Dark Mode</p>
            <input type="checkbox" id="check" className='settings-page__toggle' onChange={handleThemeChange} checked={isThemeChecked}/>
            <label htmlFor="check"></label>
        </section>
    )
}