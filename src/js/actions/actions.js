import { ADD_POST , FETCH_POST } from "../constants/action-types";
import axios from 'axios';
import qs from 'qs';
import {apiUrl} from '../constants/url';


export function addPost(payload) {
  return { type: ADD_POST, payload }
};

export const createPost = ({ date, title, text }) => {

  return (dispatch) => {
      const data = ({'date':date, 'title':title, 'text':text});
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url:apiUrl+'/addPost.php',
      };
      return axios(options)
       .then(response => {
         dispatch(createPostSuccess(response.data))
       })
       .catch(error => {
         throw(error);
       });
    };
};

export const createPostSuccess =  (data) => {
  return {
    type: ADD_POST,
    payload: {

      date: data.date,
      title: data.title,
      text: data.text,

    }
  }
};
export const fetchPosts = (posts) => {
  return {
    type: FETCH_POST,
    posts
  }
};

export const fetchAllPosts = () => {
  return (dispatch) => {
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      url:apiUrl+'/selectPosts.php',
    };
    return axios(options)
      .then(response => {
        console.log(response);
        dispatch(fetchPosts(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
