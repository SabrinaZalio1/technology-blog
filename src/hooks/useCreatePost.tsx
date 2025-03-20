import { useState, useCallback } from "react";
import { createPost } from "../service/index.service";

export function useCreatePost() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const create = useCallback(async (data: { title: string; subtitle: string }) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await createPost(data);
      return response.data; 
    } catch {
      setError("Error al crear el post");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { create, isLoading, error };
}
