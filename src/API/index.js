const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books";

export async function fetchAllBooks() {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json.books;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchSingleBook({ books }) {
  try {
    const response = await fetch(`API_URL/${books.id}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setBook(data);
  } catch (error) {
    console.error("Error fetching book:", error);
    setError(error.message);
  } finally {
    setLoading(false);
  }
}

fetchSingleBook;
