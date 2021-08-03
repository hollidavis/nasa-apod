import axios from "axios";

export const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod',
  timeout: 5000
})