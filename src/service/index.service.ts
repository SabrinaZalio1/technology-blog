import axios from 'axios';
import { ICreatePost } from '../interfaces/Post';

const base_url = 'https://lite-tech-api.litebox.ai';
// const TOKEN = "5c9a0edad827ab8309726bf0c8e0d3922ceeb58f7684688ac88f20b030fd46968fb2b4fd504e1d8977f3f0a157ea46c507f37d3ffd30b645f848eb12194aa159be70c6fb09bfb33051d5d912acafbf0bceeb7acc21421c6c38b2e0f358242a47d2f9110d0db69f0dd586fd22691abb245c59f225b118f1f5b5c7663e21908f65"; // Debería obtenerse dinámicamente (ej: desde el contexto de autenticación)

export function getPosts() {
   const url = `${base_url}/api/posts`;
   return axios.get(url);
}

export function getPost(id: string | number) {
   const url = `${base_url}/api/posts/${id}`;
   return axios.get(url);
}

export const createPost = async (data: ICreatePost, token:string) => {
   if (!token) {
      throw new Error('El token de autenticación es requerido');
   }

   try {
      const response = await axios.post(`${base_url}/api/posts`, data, {
         headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
         },
      });
      return response.data;
   } catch (error) {
      throw new Error(`Unexpected error, ${error}`)
   }
};

export function updatePost(
   id: string | number,
   data: { title?: string; subtitle?: string }
) {
   const url = `${base_url}/api/posts/${id}`;
   return axios.put(url, data);
}
