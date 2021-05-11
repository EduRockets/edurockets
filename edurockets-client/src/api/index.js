import axios from 'axios'
const url = 'http://localhost:5000/post'

export const fetchSchoolarShips = () => axios.get(url);
