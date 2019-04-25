import { ADD_POST , FETCH_POST, EDIT_POST } from "../constants/action-types";
import axios from 'axios';
import qs from 'qs';
import {apiUrl} from '../constants/url';

export const createPostSuccess =  (data) => {
  return {
    type: ADD_POST,
    payload: {
      id: data.id,
      date: data.date,
      title: data.title,
      text: data.text,
      file: data.file,
      infoComment: data.infoComment,
    }
  }
};
export const createPost = ({ date, title, text, formData, infoComment }) => {
  return (dispatch) => {
      const optionsFile = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: formData,
        url:apiUrl+'/scripts/uploadFiles.php',
      };
      return axios(optionsFile)
       .then(response => {
         const data = ({'date':date, 'title':title, 'text':text, 'file': response.data, 'infoсomment': infoComment});
console.log(data);
         const options = {
           method: 'POST',
           headers: { 'content-type': 'application/x-www-form-urlencoded' },
           data: qs.stringify(data),
           url:apiUrl+'/scripts/addPost.php',
         };

         axios(options)
         .then(response =>{
          dispatch(createPostSuccess(response.data));
         })
       })
       .catch(error => {
         throw(error);
       });
    };
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
      url:apiUrl+'/scripts/selectPosts.php',
    };
    return axios(options)
      .then(response => {
        dispatch(fetchPosts(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const editPostSuccess = (data) => {
  return {
    type: EDIT_POST,
    payload: {
      id: data.id,
      date: data.date,
      title: data.title,
      text: data.text,
      file: data.file,
      infoComment: data.infoComment,
    }
  }
};

export const editPost = ({ date, title, text, infoComment }) => {
  return (dispatch) => {
      const data = ({'date':date, 'title':title, 'text':text, 'infoсomment': infoComment});
      const editPostOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url:apiUrl+'/scripts/editPost.php',
      };
      return axios(editPostOptions)
       .then(response => {
          dispatch(editPostSuccess(response.data));
        })
       .catch(error => {
         throw(error);
       });
    };
};
