import key from "../assets/secret/secret.jsx";
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

  const [newsData, setNewsData] = useState([]);

    const url = `/api/svc/mostpopular/v2/viewed/1.json?api-key=${key}`

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setNewsData(data)
                console.log(data);
                
            });
    }, []);

  // map() loops through all objects in 'results' and we find all values of 'section_name'
  // create 'new Set' with all unique values found in section_name (no duplicates)
  // '...' before 'new Set' converts the Set of unique values into an array
  const sectionNames = [...new Set(newsData && newsData.results && newsData.results.map(result => result.section))]
  // console.log(`There is ${sectionNames.length} unique section_names.`)

  return (
    <>
      <Header />
      
      <main className="popular-page">
        
        <section className="popular-page__news">
          {/* loop through all section_names */}
          {sectionNames.map((section_name) => {
            // Create array with max 3 elements (headline and abstract) - each element has a section_name that matches section
            const results = newsData && newsData.results
              ? newsData.results.filter(result => result.section === section_name).slice(0, 3)
              : [];

            // variable to save img url taken from -GET IMG- above
            let imageUrl

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
                        {/* if headline or abstract is empty/null/undefined - show string instead */}
                        {result.media.map((res) => {
                          console.log(res);
                          const imgUrl = res.media-metadata.map((mediaData))
                          console.log(imgUrl);
                          
                          
                          // const imgUrl = result.multimedia.filter(res => res.format === "threeByTwoSmallAt2X")
                          // if (imgUrl) {
                          //   imageUrl = res.url
                          // }
                          // else {
                          //   imageUrl = {standin}
                          // }
                        })}
                        <img src={imageUrl} alt="article-image" />
                        {/* <img src={standin} alt="article-image" /> */}
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