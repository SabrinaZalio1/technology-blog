import { useEffect, useState } from "react";
import { getPost, getPosts } from "../service/index.service";

export function usePosts() {
  const [posts, setPosts] = useState<[]>([]); 
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    getPosts()
    .then(response => {
      setPosts(response.data.data);
    })
    .catch(() => setError("Error al cargar los posts"))
    .finally(() => setIsLoading(false)); 
  }, []);

  return { posts, error, isLoading  };
}

export function usePost(id: number) {
  const [post, setPost] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    getPost(id)
      .then(response => setPost(response.data))
      .catch(error => setError("Error obteniendo el post"));
  }, [id]);

  return { post, error };
}
