import axios from "axios";

export const fetchApi = axios.create({
  baseUrl: "https://www.omdbapi.com",
});
