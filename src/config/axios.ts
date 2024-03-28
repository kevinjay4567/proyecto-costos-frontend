import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    post: {
      'Access-Control-Allow-Origin': '*',
      "Content-Type": 'multipart/form-data'
    }
  }
})