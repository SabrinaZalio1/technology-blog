import { useEffect, useState } from 'react';
import { getPost, getPosts } from '../service/index.service';
import { IPost } from '../interfaces/Post';

export function usePosts() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then((response) => {
        setPosts(response.data.data);
      })
      .catch(() => setError('Error al cargar los posts'))
      .finally(() => setIsLoading(false));
  }, []);

  return { posts, error, isLoading };
}

export function usePost(id: number) {
  const [post, setPost] = useState<IPost | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);
    getPost(id)
      .then((response) => setPost(response.data.data))
      .catch(() => setError('Error obteniendo el post'))
      .finally(() => setIsLoading(false));
  }, [id]);

  return { post, error, isLoading };
}
