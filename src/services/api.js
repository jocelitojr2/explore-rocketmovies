import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovies-api-x63j.onrender.com"
});