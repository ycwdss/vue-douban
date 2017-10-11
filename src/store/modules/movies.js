import * as types from '../types';
import * as api from '../api';

const state = {
  movies: {
    [api.API_TYPE.movies.in_theaters]: {
      title: '',
      start: 0,
      total: 0,
      subjects: [],
      data: [],
    },
    [api.API_TYPE.movies.coming_soon]: {
      title: '',
      start: 0,
      total: 0,
      subjects: [],
      data: [],
    },
    moviesQuery: {
      total: 0,
      subjects: [],
      q: '',
    }
  },
};

//获取数据 payload是dispatch传过来的参数
const actions = {
  [types.FETCH_MOVIES]({commit}, payload){
    api.fetchMovies(payload.type, {city: payload.city, start: payload.start, count: payload.count})
      .then(data => commit(types.FETCH_MOVIES, {
        type: payload.type,
        start: payload.start,
        data: data
      }));
  },
  [types.FETCH_MOVIES_QUERY]({commit}, payload){
    api.fetchMoviesQuery(payload.type, {q: payload.q})
      .then(data => commit(types.FETCH_MOVIES_QUERY, {
        type: payload.type,
        data: data
      }))
  }
};

//修改数据 payload是action cimmit过来的参数
const mutations = {
  [types.FETCH_MOVIES](state, payload){
    //数据集合
    state.movies[payload.type].data = payload.data;
    //subjects
    state.movies[payload.type].title = payload.data.title;
    state.movies[payload.type].start = payload.start;
    state.movies[payload.type].total = payload.data.total;
    state.movies[payload.type].subjects = state.movies[payload.type].subjects.concat(payload.data.subjects);
  },
  [types.FETCH_MOVIES_QUERY](state,payload){
    //数据集合
    state.movies.moviesQuery.data=payload.data

    state.movies.moviesQuery.total=payload.data.total
    state.movies.moviesQuery.subjects=payload.data.subjects
    state.movies.moviesQuery.q=payload.data.q
  }
};

//重新计算数据
const getters = {}

export default {
  getters,
  state,
  mutations,
  actions
}
