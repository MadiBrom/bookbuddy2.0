const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books";

export async function fetchAllPlayers() {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json.data.players;
  } catch (error) {
    console.log(error);
    return [];
  }
}
