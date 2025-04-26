//src/api/unsplash-api.ts
// import axios from "axios";

// const UNSPLASH_ACCESS_KEY = "5T5QvSakbyKs_C-p2REm5FHgLPRq5OgptIysWWYW2Hg";
// axios.defaults.baseURL = "https://api.unsplash.com/";

// export const fetchImages = async (query) => {
//   const response = await axios.get("search/photos", {
//     params: {
//       query,
//       per_page: 12,
//       client_id: UNSPLASH_ACCESS_KEY,
//     },
//   });

//   return response.data.results;
// };

// src/api/unsplash-api.ts
import axios from 'axios';

const UNSPLASH_ACCESS_KEY = "5T5QvSakbyKs_C-p2REm5FHgLPRq5OgptIysWWYW2Hg";

axios.defaults.baseURL = 'https://api.unsplash.com/';

export interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    full: string;
  };
}

interface UnsplashResponse {
  results: UnsplashImage[];
}

export const fetchImages = async (query: string): Promise<UnsplashImage[]> => {
  const response = await axios.get<UnsplashResponse>('search/photos', {
    params: {
      query,
      per_page: 12,
      client_id: UNSPLASH_ACCESS_KEY,
    },
  });

  return response.data.results;
};

//UnsplashImage и UnsplashResponse
//query: string
//fetchImages возвр. fetchImages
//<UnsplashResponse>