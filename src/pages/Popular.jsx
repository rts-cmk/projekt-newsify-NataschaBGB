import useLocalStorage from 'use-local-storage'
import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation/Navigation.jsx";
import Header from "../components/Header/Header.jsx";
import { IoChevronForwardSharp } from "react-icons/io5";
import logo from '../assets/newsify_logo.png'
import '../styles/_layout.sass'
// remove this when img in articles are displayed
import standin from '../assets/standin-image.jpeg'
import PopularDetails from "../components/PopularDetails/PopularDetails.jsx";

export default function Popular() {

  const API_KEY = import.meta.env.VITE_NYT_API_KEY;

    const apiUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`
  
    useEffect(() => {
      fetch(apiUrl)
        .then(response => response.json())
        .then((data) => {
          
          setNewsData(data)
          // console.log(data)
  
        });
    }, []);

  const [newsData, setNewsData] = useState([]);

  const [isDark] = useLocalStorage("isDark")

  // map() loops through all objects in 'results' and we find all values of 'section_name'
  // create 'new Set' with all unique values found in section_name (no duplicates)
  // '...' before 'new Set' converts the Set of unique values into an array
  const sectionNames = [...new Set(newsData && newsData.results && newsData.results.map(result => result.section))]
  // console.log(`There is ${sectionNames.length} unique section_names.`)

  return (
    <>
      <Header />
      
      <main className="popular-page" data-theme={isDark ? "dark" : "light"}>

        <h2 className="popular-page__title">Popular</h2>
        
        <section className="popular-page__news">
          {/* loop through all section_names */}
          {sectionNames.map((section_name) => {
            // Create array with elements - each element has a section_name that matches section
            const results = newsData && newsData.results
              ? newsData.results.filter(result => result.section === section_name)
              : [];

            return (
              // key = helps react identify what element has been updated
              <PopularDetails key={section_name} category={section_name}>
                <section className="popular-page__articles">
                  
                  {/* if results array is not empty and elements matches the section above */}
                  {results.length > 0 ? (
                    // loop through the array
                    results.map((result) => (
                      
                      // key set to _id taken from results objects to identify article
                      <a key={result.id} id={result.id} href={result.url} target="_blank" className="popular-page__article">

                        {/* if media array is not empty */}
                        {result.media.length > 0 ? (
                          // loop through media array
                          result.media.map((mediaData) => {
                            // if media-metadata array inside media array is not empty
                            if (mediaData['media-metadata'].length > 0) {
                              // return img element with src set to img url from array
                              return (
                                <img key={mediaData['media-metadata'][0].url} src={mediaData['media-metadata'][0].url} alt="article-image" />
                              )
                            }
                            // if media-metadata is empty
                            else {
                              // set img element with default src
                              <img src="https://lh4.googleusercontent.com/proxy/EWm9FVpPqF7N5rcraSRF-UMDuwBzfkA2tYNH73WwfdaqqrhD7V-TQL22-XP7fOgbjSp4X836b8_TVTYw1JN7bSJuUHbgtMURdiA2n-lyFKYnnpRzFzCJ72kCEw" alt="article-image" />
                            }
                            
                          })
                        // if media is empty
                        ) : (
                          // set imageSrc to default image
                          <img src="https://lh4.googleusercontent.com/proxy/EWm9FVpPqF7N5rcraSRF-UMDuwBzfkA2tYNH73WwfdaqqrhD7V-TQL22-XP7fOgbjSp4X836b8_TVTYw1JN7bSJuUHbgtMURdiA2n-lyFKYnnpRzFzCJ72kCEw" alt="article-image" />
                        )}

                        {/* if headline or abstract is empty/null/undefined - show string instead */}
                        <div className="popular-page__article-text">
                          <h3>{result.title || 'No Headline'}</h3>
                          <p>{result.abstract || 'No text'}</p>
                        </div>
                      </a>
                    ))
                  ) : (
                    // if results is empty
                    <p>No articles was found for this section.</p>
                  )}
                </section>
              </PopularDetails>
        
            );
          })}

        </section>

      </main>
      <Navigation />
    </>
  );
}