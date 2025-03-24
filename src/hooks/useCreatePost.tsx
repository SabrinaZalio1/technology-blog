import { useState, useCallback } from "react";
import { createPost } from "../service/index.service";
import axios from "axios";

export function useCreatePost() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const TOKEN = "5c9a0edad827ab8309726bf0c8e0d3922ceeb58f7684688ac88f20b030fd46968fb2b4fd504e1d8977f3f0a157ea46c507f37d3ffd30b645f848eb12194aa159be70c6fb09bfb33051d5d912acafbf0bceeb7acc21421c6c38b2e0f358242a47d2f9110d0db69f0dd586fd22691abb245c59f225b118f1f5b5c7663e21908f65";

  const create = useCallback(async (data) => {
    console.log("Datos enviados:", data);
    setIsLoading(true);
    setError(null);

    try {
      const response = await createPost(data, TOKEN);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Error en la respuesta del servidor:", error.response.data);
      } else {
        console.error("Error desconocido:", error);
      }
      setError("Error al crear el post");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);


  return { create, isLoading, error };
}
