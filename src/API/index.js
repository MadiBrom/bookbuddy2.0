const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books";

export async function fetchAllBooks() {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json.books;
  } catch (error) {
    console.error("Error fetching all books:", error);
    return [];
  }
}

export async function fetchSingleBook(id) {
  console.log(id);

  try {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
      const errorMessage = `Error: ${response.status} ${response.statusText}`;
      console.error("Failed to fetch single book:", errorMessage);
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data.book;
  } catch (error) {
    console.error("Error fetching book:", error);
    throw error;
  }
}
