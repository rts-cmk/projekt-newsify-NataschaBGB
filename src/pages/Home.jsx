import React, { useState, useEffect } from "react";
import useLocalStorage from 'use-local-storage'
import Navigation from "../components/Navigation/Navigation.jsx";
import Header from "../components/Header/Header.jsx";
import { FaRegBookmark } from "react-icons/fa";
import '../styles/_layout.sass'
// remove this when img in articles are displayed
import HomeDetails from "../components/HomeDetails/HomeDetails.jsx";
import { useBookmarks } from "../components/UseBookmarks/UseBookmarks.jsx";



export default function Home() {

  const API_KEY = import.meta.env.VITE_NYT_API_KEY;
  
  const apiUrl = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then((data) => {
        
        setNewsData(data)
        // console.log(data)

      });
  }, []);

  // name of state, name of function to update state
  // use newsData to manipulate data, use setNewsData to tell the code what data to manipulate
  const [newsData, setNewsData] = useState([]);

  // get the isDark from localstorage to see if dark mode is active or not
  const [isDark] = useLocalStorage("isDark")

  // get addBookmark and isBookmarked from useBookmarks hook
  const { addBookmark, isBookmarked } = useBookmarks();



  // get sectionNames from localstorage
  const savedSections = JSON.parse(localStorage.getItem("saved_sections")) || [];
  // const activeSections = savedSections.filter((value) => value.display === true);
  const activeSections = savedSections.filter((value) => value.display);

  // if there is no sections in localstorage
  if (activeSections.length === 0) {
    // map() loops through all objects in 'docs' and we find all values of 'section_name'
  // create 'new Set' with all unique values found in section_name (no duplicates)
  // '...' before 'new Set' converts the Set of unique values into an array
    const sectionNames = [...new Set(newsData?.results?.map(result => result.section))]

    // loop through section names and save each name in an object
    // standard bool value = true so section is shown on home page
    const newSections = sectionNames.map(name => ({
      name,
      display: true
    }))

    // merge existing and new sections
    const mergedSections = [
      // keep old sections with their bool value
      ...activeSections,
      // add new sections with standard bool value
      ...newSections.filter(
        newSection => !activeSections.some(saved => saved.name === newSection.name)
      )
    ]

    // save the merged sections in localstorage
    localStorage.setItem('saved_sections', JSON.stringify(mergedSections))
  }


  // use this function to map through the activeSections gotten from localstorage
  function displaySections(section) {
    
    // Create array with elements - each element has a section_name that matches section
    const results = newsData && newsData.results
      ? newsData.results.filter(result => result.section === section.name)
      : [];

    return (
      // key = helps react identify what element has been updated
      <HomeDetails key={section.name} category={section.name}>
        <section className="home-page__articles">
          {/* if results array is not empty and elements matches the section above */}
          {results.length > 0 ? (
            // loop through the array
            results.map((result) => (
              // key set to title taken from results objects to identify article
              <article key={result.url} id={result.url} className="home-page__article">
                <a href={result.url} target="_blank">
                
                  {/* if multimedia array is not empty */}
                  {result.multimedia && result.multimedia.length > 0 ? (
                    // set image to match image found in the articles multimedia
                    <img key={result.multimedia.url} src={result.multimedia[2].url} alt="article-image" />
                  ) : (
                    // set imageSrc to default image
                    <img src="https://lh4.googleusercontent.com/proxy/EWm9FVpPqF7N5rcraSRF-UMDuwBzfkA2tYNH73WwfdaqqrhD7V-TQL22-XP7fOgbjSp4X836b8_TVTYw1JN7bSJuUHbgtMURdiA2n-lyFKYnnpRzFzCJ72kCEw" alt="article-image" />
                  )}

                  {/* if headline or abstract is empty/null/undefined - show string instead */}
                  <div className="home-page__article-text">
                    <h3>{result.title || 'No Headline'}</h3>
                    <p>{result.abstract || 'No text'}</p>
                  </div>
                </a>
                <button className={`home-page__bookmark-button ${isBookmarked(result.url) ? "home-page__bookmark-button--added" : "home-page__bookmark-button--not-added"}`} onClick={() => addBookmark(result.url, result.title, result.abstract)} disabled={isBookmarked(result.url)}>
                  <FaRegBookmark className="bookmark-button-svg" />
                </button>
              </article>
            ))
          ) : (
            // if docs is empty
            <p>No articles was found for this section.</p>
          )}
        </section>
      </HomeDetails>
      
    );
  }
  
  return (
    <>
      <Header />
      
      <main className="home-page" data-theme={isDark ? "dark" : "light"}>

        <h2 className="home-page__title">Home</h2>

        <section className="home-page__searchbar">
          <input type="text" name="home-page-search" placeholder="Search news"/>
        </section>

        <section className="home-page__news">
          {/* loop through all section_names */}
          {/* looping through with displaySections function returns all data to get both sections and bookmarks */}
          {activeSections.map(displaySections)}
        </section>

      </main>

      <Navigation />
    </>
  );


}