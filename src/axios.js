import axios from "axios"
import {baseUrl} from "../../netflix/src/constents/constents"

const instance = axios.create({
    baseURL:baseUrl,
  });
  export default instance