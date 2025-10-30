import logo from '../../assets/newsify_logo.png'
import './BookmarkToArchive.sass'


export default function BookmarkToArchive({title, abstract}) {

  return (
    <>
        <section className='archive-page__category'>
            <img src={logo} alt="newsify_logo" />
            <h3>{title}</h3>
            <p>{abstract}</p>
        </section>
    </>
  )

}