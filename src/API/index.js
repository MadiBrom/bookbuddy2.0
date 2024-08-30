const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books"; // Base URL for book-related endpoints
const AUTH_ENDPOINT =
  "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/auth/login"; // Authentication endpoint

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

export async function fetchBooks() {
  const token = localStorage.getItem("authToken");
  try {
    const response = await fetch(`${API_URL}/secure-endpoint`, {
      // Adjust to the actual secure endpoint
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorMessage = `Error: ${response.status} ${response.statusText}`;
      console.error("Failed to fetch books with token:", errorMessage);
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books with token:", error);
    throw error;
  }
}

export async function handleLogin(email, password) {
  try {
    const response = await fetch(AUTH_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("authToken", data.token);
      console.log("Sign-in successful");
    } else {
      throw new Error("Sign-in failed");
    }
  } catch (error) {
    console.error("An error occurred during login:", error);
    throw error;
  }
}
