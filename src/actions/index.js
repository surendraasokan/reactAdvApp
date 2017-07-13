import axios from 'axios';
export const FETCH_POSTS = "fetchPosts";
export const CREATE_POST = "createPost";
export const FETCH_POST = "fetchPost";
export const DELETE_POST = "deletePost";
export const FETCH_WEATHER = 'FETCH_WEATHER';

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = '?key=sarbein123';

const WEATHER_API_KEY = "7746e5b5833095ff488469f7d131e015";
const WEATHER_ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;


export function fetchWeather(city) {
    const url = `${WEATHER_ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

export function fetchPosts() {

  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {

  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
                  .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
                  .then(() => callback());
  return {
    type: DELETE_POST,
    payload: id
  };
}
