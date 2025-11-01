import axios from 'axios';
import { rapidApiKey } from '../note/constants';

// const baseUrl = 'https://exercisedb.p.rapidapi.com';
const baseUrl = 'https://exercisedb-api1.p.rapidapi.com';


const apiCall = async (url, params) => {
  try {
    const options = {
      method: 'GET',
      url,
      params,
      headers: {
        'x-rapidapi-key': rapidApiKey,
        'x-rapidapi-host': 'exercisedb-api1.p.rapidapi.com'
      }
    };
    // const response = await axios.get(url, options);
    const response = await axios.request(options);
    return response.data;
  }
  catch (err) {
    console.log('error', err.message);
  }
}

export const fetchExcercisesByBodypart = async (bodyPart) => {
  // let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`);
  let data = await apiCall(baseUrl + '/api/v1/bodyparts/');
  return data;
}

export const fetchBodypart = async () => {
  // let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`);
  let data = await apiCall(baseUrl + '/api/v1/bodyparts');
  return data;
}