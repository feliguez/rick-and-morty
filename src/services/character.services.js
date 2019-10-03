import axios from 'axios';
import { API } from './config';

const MODULE = 'character';

export const getAllService = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API}/${MODULE}`)
      .then(response => {
        resolve(response.data.results);
      })
      .catch(err => reject(err.message));
  });
};

export const getService = id => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API}/${MODULE}/${id}`)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => reject(err.message));
  });
};
