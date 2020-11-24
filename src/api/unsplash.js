import axios from "axios";
import { unsplash_client_id } from "./config";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: unsplash_client_id,
  },
});
