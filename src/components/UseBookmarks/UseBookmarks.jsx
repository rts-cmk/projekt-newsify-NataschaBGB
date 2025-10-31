import { useState, useEffect } from "react";

export function useBookmarks() {
    const [bookmarked, setBookmarked] = useState(() => {
    return JSON.parse(localStorage.getItem("saved_articles")) || [];
});

  useEffect(() => {
    localStorage.setItem("saved_articles", JSON.stringify(bookmarked));
  }, [bookmarked]);

  const isBookmarked = (url) => bookmarked.some((a) => a.id === url);

  const addBookmark = (url, title, abstract) => {
    if (isBookmarked(url)) return;

    const newArticle = {
      id: url,
      headline: title,
      text: abstract,
      buttonPressed: true,
    };

    setBookmarked((prev) => [...prev, newArticle]);
  };


  const removeBookmark = (url) => {
    setBookmarked((prev) => prev.filter((a) => a.id !== url));
  };

  return { bookmarked, addBookmark, removeBookmark, isBookmarked };
}