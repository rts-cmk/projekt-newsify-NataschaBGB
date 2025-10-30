import key from "../key.jsx";
import React, { useState, useEffect } from "react";
import useLocalStorage from 'use-local-storage'
import Navigation from "../components/Navigation/Navigation.jsx";
import Header from "../components/Header/Header.jsx";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";
import '../styles/_layout.sass'
// remove this when img in articles are displayed
import standin from '../assets/standin-image.jpeg'
import HomeDetails from "../components/HomeDetails/HomeDetails.jsx";
import BookmarkToArchive from "../components/BookmarkToArchive/BookmarkToArchive.jsx";


export default function Home() {

  // name of state, name of function to update state
  const [newsData, setNewsData] = useState([]);

  const [isDark, setIsDark] = useLocalStorage("isDark", false)

  const apiUrl = `/api/svc/topstories/v2/home.json?api-key=${key}`

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then((data) => {
        setNewsData(data)
        // console.log(data)
      });
  }, []);


  function addBookmark() {
    // console.log(event.target.hidden.h3);
    // console.log(data);
    

    // const title = document.getElementById("news_title").innerHTML
    // const abstract = document.getElementById("news_abstract").innerHTML

    // console.log(title);
    // console.log(abstract);
    
  }
  

  // map() loops through all objects in 'docs' and we find all values of 'section_name'
  // create 'new Set' with all unique values found in section_name (no duplicates)
  // '...' before 'new Set' converts the Set of unique values into an array
  const sectionNames = [...new Set(newsData && newsData.results && newsData.results.map(result => result.section))]
  // console.log(sectionNames);
  
  return (
    <>
      <Header />
      
      <main className="home-page" data-theme={isDark ? "dark" : "light"}>

        <section className="home-page__searchbar">
          <input type="text" name="home-page-search" placeholder="Search news"/>
        </section>

        <section className="home-page__news">
          {/* loop through all section_names */}
          {sectionNames.map((section_name) => {
            // Create array with elements - each element has a section_name that matches section
            const results = newsData && newsData.results
              ? newsData.results.filter(result => result.section === section_name)
              : [];

            return (
              // key = helps react identify what element has been updated
              <HomeDetails key={section_name} category={section_name}>
                <section className="home-page__articles">
                  {/* if results array is not empty and elements matches the section above */}
                  {results.length > 0 ? (
                    // loop through the array
                    results.map((result) => (
                      // key set to title taken from results objects to identify article
                      <article key={result.title} id={result.title} className="home-page__article">
                        <a href={result.url} target="_blank">
                        
                          {/* if multimedia array is not empty */}
                          {result.multimedia.length > 0 ? (
                            <img src={result.multimedia[2].url} alt="article-image" />
                          ) : (
                            // set imageSrc to default image
                            <img src="https://lh4.googleusercontent.com/proxy/EWm9FVpPqF7N5rcraSRF-UMDuwBzfkA2tYNH73WwfdaqqrhD7V-TQL22-XP7fOgbjSp4X836b8_TVTYw1JN7bSJuUHbgtMURdiA2n-lyFKYnnpRzFzCJ72kCEw" alt="article-image" />
                          )}

                          {/* if headline or abstract is empty/null/undefined - show string instead */}
                          <div className="home-page__article-text">
                            <h3 id="news_title">{result.title || 'No Headline'}</h3>
                            <p id="news_abstract">{result.abstract || 'No text'}</p>
                          </div>
                        </a>
                        <Link to={{ pathname: "/archive", state: "title", }}>
                          <FaRegBookmark className='navigation__icon' />
                        </Link>

                      </article>
                      
                    ))
                  ) : (
                    // if docs is empty
                    <p>No articles was found for this section.</p>
                  )}
                </section>
              </HomeDetails>
              
            );
          })}
        </section>
      </main>

      <Navigation />
    </>
  );


}