import { useState, useCallback } from "react";
import { updatePost } from "../service/index.service";

export function useUpdatePost() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = useCallback(async (id: number, data: { title?: string; content?: string }) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await updatePost(id, data);
      return response.data; 
    } catch {
      setError("Error al actualizar el post");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { update, isLoading, error };
}
