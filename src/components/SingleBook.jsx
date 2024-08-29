import React, { useState, useEffect } from "react";
import { fetchSingleBook } from "../API";
import { useParams, Link } from "react-router-dom";

function SingleBook() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBook() {
      console.log(id);

      try {
        const bookData = await fetchSingleBook(id);
        setBook(bookData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getBook();
  }, [id]);

  if (loading) {
    return <p>Loading book information...</p>;
  }

  if (error) {
    return <p>Error fetching book: {error}</p>;
  }

  if (!book) {
    return <p>Book not found.</p>;
  }

  return (
    <div className="book-container">
      <div className="bookcard">
        <h2 id="titles">{book.title}</h2>
        <div id="info">
          <h4 id="author">Author: {book.author}</h4>
          <p id="available">Available? {book.available ? "Yes" : "No"}</p>
        </div>
        <img id="img" src={book.coverimage} alt={book.title} />{" "}
        <p id="description">Description: {book.description}</p>
        <br />
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default SingleBook;
