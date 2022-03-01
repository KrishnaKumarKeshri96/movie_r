import axios from "axios";

export const fetchApi = axios.create({
  baseURL: "https://www.omdbapi.com",
});
