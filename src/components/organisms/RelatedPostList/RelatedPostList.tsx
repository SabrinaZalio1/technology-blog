import React from 'react'
import Post from '../Post/Post'
import { RelatedPostListContainer } from './styled'
import { usePosts } from '../../../hooks/usePosts';
import { IPost } from '../../../interfaces/Post';
import SliderCarousel from '../SliderCarousel';


export default function RelatedPostList() {
    const { posts, error, isLoading } = usePosts();

    if (error) return <p>{error}</p>;

    if (isLoading) return <div>Cargando...</div>

    return (
        <>
            <RelatedPostListContainer>
            {!isLoading && posts.length > 0 && (
                posts.slice(2, 5).map((post: IPost) => (
                    <Post key={post.id} post={post} variant='light' />
                ))
            )}

        </RelatedPostListContainer>
{/* 
<SliderCarousel/> */}
        </>
    )
}
