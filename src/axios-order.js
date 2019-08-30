import axios from 'axios';

const instace = axios.create({
    baseURL: 'https://react-my-burger-45f4a.firebaseio.com/'
});

export default instace;