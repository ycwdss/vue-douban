
import axios from 'axios';

// 使用代理
const HOST = '/api/';

export const API_TYPE = {
  movies: {
    in_theaters: 'in_theaters',
    coming_soon: 'coming_soon',
  }
};
//封装axios
export default function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(HOST + url, {params})
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
}

//获取电影集合
export function fetchMovies(type, params) {
  return fetch(`movie/${type}`, params)
}
//根据电影ID查看详细
export function fetchMovieSubject(id) {
  return fetch(`movie/subject/${id}`);
}
//电影搜索
export function fetchMoviesQuery(type,params) {
  return fetch(`movie/${type}`, params);
}
