import axios from "axios";

// const baseURL = "http://192.168.100.202:8080";

const baseURL = "http://localhost:8080";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
