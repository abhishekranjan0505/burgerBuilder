import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-app-d3758.firebaseio.com/",
});

export default instance;
