//src/api/pixabay-api.ts
// import axios from "axios";

// const API_KEY = "5T5QvSakbyKs_C-p2REm5FHgLPRq5OgptIysWWYW2Hg";
// const BASE_URL = "https://pixabay.com/api/";

// export const fetchPixabayImages = async (query, page = 1, perPage = 12) => {
//   try {
//     const response = await axios.get(BASE_URL, {
//       params: {
//         key: API_KEY,
//         q: query,
//         image_type: "photo",
//         orientation: "horizontal",
//         safesearch: true,
//         per_page: perPage,
//         page,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error("Ошибка при запросе к Pixabay API:", error);
//     throw error;
//   }
// };

// src/api/pixabay-api.ts
import axios from 'axios';

interface PixabayImage {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}

interface PixabayApiResponse {
  totalHits: number;
  hits: PixabayImage[];
}

const API_KEY = "5T5QvSakbyKs_C-p2REm5FHgLPRq5OgptIysWWYW2Hg";
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPixabayImages = async (
  query: string,
  page: number = 1,
  perPage: number = 12
): Promise<PixabayApiResponse> => {
  try {
    const response = await axios.get<PixabayApiResponse>(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: perPage,
        page,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Ошибка при запросе к Pixabay API:', error);
    throw error;
  }
};

//PixabayImage
//PixabayApiResponse
//axios.get<PixabayApiResponse>