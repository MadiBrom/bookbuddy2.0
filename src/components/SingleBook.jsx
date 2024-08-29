import React, { useState, useEffect } from "react";
import { fetchSingleBook } from "../API";
import { useParams, Link } from "react-router-dom";

function SingleBook() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function getBook() {
      try {
        const response = await fetchSingleBook(id);
        setBook(response);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, [id]);

  if (!book) {
    return <p>Loading book information...</p>;
  }

  return (
    <div className="book-container">
      <h2>{book.name}</h2>
      <div className="book-card">
        <h4>Breed: {book.breed}</h4>
        <h4>Status: {book.status}</h4>
        <br />
        <img src={book.imageUrl} alt={book.name} />
        <br />
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default SingleBook;
