import useLocalStorage from 'use-local-storage'
import Header from "../components/Header/Header.jsx";
import Navigation from "../components/Navigation/Navigation.jsx";
import BookmarkToArchive from '../components/BookmarkToArchive/BookmarkToArchive.jsx';
import '../styles/_layout.sass'


// export default function Archive({title, abstract}) {

//     const [isDark, setIsDark] = useLocalStorage("isDark", false)

//     return (
//         <>
//             <Header />
//             <main className="archive-page" data-theme={isDark ? "dark" : "light"}>
                
//             <h2>Archive</h2>
//             {title}
//             {abstract}

//             {/* <BookmarkToArchive>

//             </BookmarkToArchive> */}

                
//             </main>
//             <Navigation />
//         </>
//     )
// }


import { useLocation } from "react-router";

const Archive = () => {
  
  const location = useLocation();
  console.log(location);
  
    const {title} = location.state;
    console.log(location.state);


  return (
      <div className="work-parent2">
        <p>{title}</p>
      </div>
  );
}

export default Archive;