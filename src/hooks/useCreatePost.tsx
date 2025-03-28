import { useState, useCallback } from 'react';
import { createPost } from '../service/index.service';
import axios from 'axios';
import { ICreatePost } from '../interfaces/Post';

export function useCreatePost() {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const TOKEN = import.meta.env.VITE_TOKEN;

   const create = useCallback(async (data:ICreatePost) => {
      console.log('Datos enviados:', data);
      setIsLoading(true);
      setError(null);

      try {
         const response = await createPost(data, TOKEN);
         return response.data;
      } catch (error) {
         if (axios.isAxiosError(error) && error.response) {
            console.error(
               'Error en la respuesta del servidor:',
               error.response.data
            );
         } else {
            console.error('Error desconocido:', error);
         }
         setError('Error al crear el post');
         return null;
      } finally {
         setIsLoading(false);
      }
   }, []);

   return { create, isLoading, error };
}