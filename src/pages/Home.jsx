import key from "../assets/secret/secret.jsx";
import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation/Navigation.jsx";
import Header from "../components/Header/Header.jsx";
import logo from '../assets/newsify_logo.png'
import { IoChevronForwardSharp } from "react-icons/io5";
import '../styles/_layout.sass'
// remove this when img in articles are displayed
import standin from '../assets/standin-image.jpeg'
import HomeDetails from "../components/HomeDetails/HomeDetails.jsx";


export default function Home() {

  // name of state, name of function to update state
  const [newsData, setNewsData] = useState([]);

  const apiUrl = `/api/svc/topstories/v2/home.json?api-key=${key}`

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then((data) => {
        setNewsData(data)
        console.log(data)
        
      });
  }, []);

  // map() loops through all objects in 'docs' and we find all values of 'section_name'
  // create 'new Set' with all unique values found in section_name (no duplicates)
  // '...' before 'new Set' converts the Set of unique values into an array
  const sectionNames = [...new Set(newsData && newsData.results && newsData.results.map(result => result.section))]
  // console.log(`There is ${sectionNames.length} unique section_names.`)

  // MARK: GET IMG -----
  // if inserted where img tag is, only the latest img is displayed on all articles
  // how to get img matching the article to be displayed????
  // {docs.map((doc) => {
  //   const cropName = doc.multimedia.find(crop => crop.crop_name == "thumbStandard")
  //   // Add a check to ensure cropName is not undefined
  //   if (cropName && cropName.url) {
  //     // if (cropName.url )
  //       const thumbnail = cropName.url
  //       console.log(thumbnail);
  //       // FIX THIS TO LINK TO IMG THAT MATCHES ARTICLE ID
  //       imgUrl = "https://static01.nyt.com/" + thumbnail
  //   }
  //   else {
  //       // Handle the case where cropName or cropName.legacy is undefined,
  //       // e.g., by providing a default thumbnail or logging a warning.
  //       console.warn("Could not find 'thumbStandard' crop or 'legacy' property for a document.", doc);
  //       imgUrl = logo
  //   }
    
  // })}
  // <img src={imgUrl} alt="" />

  return (
    <>
      <Header />
      
      <main className="home-page">

        <section className="home-page__searchbar">
          <input type="text" name="home-page-search" placeholder="Search news"/>
        </section>

        <section className="home-page__news">
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
              <HomeDetails key={section_name} category={section_name}>
                <section className="home-page__articles">
                  {/* if results array is not empty and elements matches the section above */}
                  {results.length > 0 ? (
                    // loop through the array
                    results.map((result) => (
                      // key set to _id taken from results objects to identify article
                      <a key={result.title} id={result.title} href={result.url} target="_blank" className="home-page__article">
                        {/* if headline or abstract is empty/null/undefined - show string instead */}
                        {result.multimedia.map((res) => {
                          const imgUrl = result.multimedia.filter(res => res.format === "threeByTwoSmallAt2X")
                          if (imgUrl) {
                            imageUrl = res.url
                          }
                          else {
                            imageUrl = {standin}
                          }
                        })}
                        <img src={imageUrl} alt="article-image" />
                        <div className="home-page__article-text">
                          <h3>{result.title || 'No Headline'}</h3>
                          <p>{result.abstract || 'No text'}</p>
                        </div>
                      </a>
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


// {/* <main className="home-page">
        
//         <section className="home-page__searchbar">
//           <input type="text" name="home-page-search" placeholder="Search news"/>
//         </section>

//         <section className="home-page__news">

//           {/* loop through all section_names */}
//           {sectionNames.map((section) => {
//             // Create array with max 3 elements (headline and abstract) - each element has a section_name that matches section
//             const docs = newsData && newsData.response && newsData.response.docs
//               ? newsData.response.docs.filter(doc => doc.section_name === section).slice(0, 3)
//               : [];

//             // variable to save img url taken from -GET IMG- above
//             // let imgUrl

//             return (
//               // key = helps react identify what element has been updated
//               <section key={section} className="home-page__section">
//                 <div className="home-page__section-title">
//                   <img src={logo} alt="newsify_logo" />
//                   <h2>{section}</h2>
//                   <IoChevronForwardSharp className="chevron-down" />
//                 </div>
                
//                 <section className="home-page__articles">
//                   {/* if docs array is not empty and elements matches the section above */}
//                   {docs.length > 0 ? (
//                     // loop through the array
//                     docs.map((doc) => (
//                       // key set to _id taken from docs objects to identify article
//                       <a key={doc._id} id={doc._id} href={doc.web_url} target="_blank" className="home-page__article">
//                         {/* if headline or abstract is empty/null/undefined - show string instead */}
//                         <img src={standin} alt="article-image" />
//                         <div className="home-page__article-text">
//                           <h3>{doc.headline?.main || 'No Headline'}</h3>
//                           <p>{doc.abstract || 'No text'}</p>
//                         </div>
                        
//                       </a>
//                     ))
//                   ) : (
//                     // if docs is empty
//                     <p>No articles was found for this section.</p>
//                   )}
//                 </section>
                
//               </section>
//             );

//           })}

//         </section>

//       </main> */}