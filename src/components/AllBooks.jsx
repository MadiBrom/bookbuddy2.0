import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { fetchAllBooks } from "../API";
import NavBar from "./NavBar";
import SingleBook from "./SingleBook";

function AllBooks({ books }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState("");
  const [featBook, setBook] = useState(null);
  const featuredBook = books.find((book) => book.id === featBook);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchParams.toLowerCase())
  );

  function handleClick() {
    navigate(<SingleBook />);
  }

  return (
    <div className="App">
      {books.map((book) => (
        <p onClick={() => setFeatPupId(book.id)} key={book.id}>
          {book.name}
        </p>
      ))}

      {featBook && featuredBook && (
        <div>
          {" "}
          <h2 id="title">Library</h2>
          <NavBar setSearchParams={setSearchParams} />
          <div
            className="books-container"
            onClick={() => handleClick(books.id)}
          >
            {filteredBooks.map((book) => (
              <div key={book.id} className="book-card">
                <h3>{book.title}</h3>
                <h5>Author: {book.author}</h5>
                <img id="img" src={book.coverimage} alt={book.title} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AllBooks;
