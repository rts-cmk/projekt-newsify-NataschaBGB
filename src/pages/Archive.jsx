import useLocalStorage from 'use-local-storage'
import Header from "../components/Header/Header.jsx";
import Navigation from "../components/Navigation/Navigation.jsx";
import ArchiveDetails from '../components/ArchiveDetails/ArchiveDetails.jsx';
import '../styles/_layout.sass'


export default function Archive() {

    const [isDark] = useLocalStorage("isDark")

    return (
      <>
        <Header />
        <main className="archive-page" data-theme={isDark ? "dark" : "light"}>
            
        <h2 className="archive-page__title">Archive</h2>

        <section className='archive-page__articles'>      
          <ArchiveDetails />
        </section>

        </main>
        <Navigation />
      </>
    )
}