import logo from '../../assets/newsify_logo.png'

import './SettingsDarkMode.sass'


export default function SettingsDarkMode() {

      // // MARK: SET DARK MODE
  // const themeSwitch = header.querySelector("input");
  // // when page loads > check localstorage
  // const savedTheme = localStorage.getItem("theme");
  // // if savedTheme is in storage
  // if (savedTheme) {
  //     // clear classes from container element
  //     container.classList.remove("light-mode", "dark-mode");
  //     // and add the saved theme
  //     container.classList.add(savedTheme);

  //     // if saved theme is dark-mode
  //     if (savedTheme === "dark-mode") {
  //         // set the switch to true (set it to be checked)
  //         themeSwitch.checked = true;
  //     }
  // }
  
  // // add event listener to switch
  // themeSwitch.addEventListener("click", toggleDarkLight);

  // // MARK: CALL DARK MODE
  //  // call this function if switch is clicked
  // function toggleDarkLight() {
  //   // if light-mode is active - set dark-mode
  //   body.classList.toggle("light-mode");
  //   // if dark-mode is active - set light-mode
  //   body.classList.toggle("dark-mode");

  //   // find the current class on body element
  //   const currentTheme = body.classList.contains("dark-mode") 
  //       ? "dark-mode" 
  //       : "light-mode";

  //   // and save the current class in localstorage (this is the new value in getItem("theme") above)
  //   localStorage.setItem("theme", currentTheme);
  // }


    return (
        <>
            <section className="settings-page__dark-mode">
                <p>Dark Mode</p>
                <label className="settings-page__dark-mode-switch">
                    <input type="checkbox" className='settings-page__dark-mode-input'/>
                    <span className="settings-page__dark-mode-slider"></span>
                </label>
            </section>
        </>
    )

}