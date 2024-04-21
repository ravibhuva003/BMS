import axios from "axios";

const baseURL = `${window.location.origin}/`;

export default axios.create({ baseURL: baseURL });
