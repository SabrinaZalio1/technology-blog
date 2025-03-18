import React from 'react'
import Post from '../../organisms/Post/Post'
import { usePost } from '../../../hooks/usePosts';
import { BannerContainer, Title } from './styled';

export default function Banner() {
    const { post, error, isLoading } = usePost(1);

if (isLoading) return <p>Cargando...</p>;
if (error) return <p>{error}</p>;
if (!post) return <p>No hay datos disponibles</p>;

  return (
    <BannerContainer>
        <Title>Today story</Title>
        <Post post={post} variant='dark'/>
    </BannerContainer>
  )
}
