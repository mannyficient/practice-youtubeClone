import axios from "axios";
const KEY = "AIzaSyBMatpPn1mnOkPfXvUvqKf4jerCqT3AN9k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",

  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
