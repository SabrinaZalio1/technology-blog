import React from "react";
import Post from "../../organisms/Post/Post";
import { usePost } from "../../../hooks/usePosts";
import { BannerContainer, Title } from "./styled";

interface BannerProps {
  id?: number; 
  title?:boolean;
}

export default function Banner({ id = 1, title=false }: BannerProps) {
  const { post, error, isLoading } = usePost(id);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>No hay datos disponibles</p>;

  return (
    <BannerContainer>
      {title && <Title>Today story</Title>}
      <Post post={post} variant="dark" />
    </BannerContainer>
  );
}
