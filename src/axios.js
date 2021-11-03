import axios from "axios";

/**  base URL to make request to the movie dadabase */
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
