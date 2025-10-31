import { LuTrash } from "react-icons/lu";
import './ArchiveDetails.sass'
import { useBookmarks } from "../UseBookmarks/UseBookmarks";

export default function ArchiveDetails() {
  const { bookmarked, removeBookmark } = useBookmarks();

  return (
    <>
      {bookmarked && bookmarked.length > 0 ? (
        bookmarked.map((article) => (
          
          <article key={article.id} className="archive-page__article">
            <a href={article.id} target="_blank">
              <section className="archive-page__article-text">
                <h3>{article.headline}</h3>
                <p>{article.text}</p>
              </section>

              
            </a>
            <button onClick={() => removeBookmark(article.id)} className="archive-page__delete-button">
              <LuTrash />
            </button>
          </article>
        ))
      ) : (
        <h3>No articles have been saved</h3>
      )}
    </>
  );
}