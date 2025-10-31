import { useState, useEffect } from "react";
import logo from "../../assets/newsify_logo.png";
import "./SettingsCategories.sass";

export default function SettingsCategories() {
  // get sections from localstorage (saved on home page)
  const [sections, setSections] = useState(() => {
    return JSON.parse(localStorage.getItem("saved_sections")) || [];
  });

  // useEffect to save when state changes
  useEffect(() => {
    localStorage.setItem("saved_sections", JSON.stringify(sections));
  }, [sections]);

  // function to toggle sections display value to true/false
  const toggleSection = (sectionName) => {
    // loop through sections and create a copy of the array
    const updatedSections = sections.map((section) =>
      // if name from sections matches the clicked section - return section name as it is and set the 'display' value: true -> false / false -> true
      // : section = if it is not the clicked section, keep section as it is
      section.name === sectionName ? { ...section, display: !section.display } : section
    );
    // update state with new array
    setSections(updatedSections);
  };

  // render one section
  const displaySection = (section) => {
    return (
      <section key={section.name} className="settings-page__category">
        <img src={logo} alt="newsify_logo" className="settings-page__category-logo" />
        <h2>{section.name}</h2>
        <label className="settings-page__category-switch">
          <input
            type="checkbox"
            className="settings-page__category-input"
            checked={section.display} // ✅ checkbox følger state
            onChange={() => toggleSection(section.name)}
          />
          <span className="settings-page__category-slider"></span>
        </label>
      </section>
    );
  };

  // loop through sections with displaySection to render all sections
  return (
    <>
      {sections.map(displaySection)}
    </>
  ) 
}