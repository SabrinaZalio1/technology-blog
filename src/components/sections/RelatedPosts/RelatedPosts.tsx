import React from 'react'
import RelatedPostList from '../../organisms/RelatedPostList/RelatedPostList'
import { RelatedPostListContainer, RelatedPostsContainer, RelatedPostsHeader, Title } from './styled'
import NewPostBtn from '../../atoms/NewPostBtn/NewPostBtn'

export default function RelatedPosts() {
    return (
        <RelatedPostsContainer>
            <RelatedPostsHeader>
                <Title>Related posts</Title>
                <NewPostBtn arrowColor='#9C73F7'/>
            </RelatedPostsHeader>
            <RelatedPostListContainer>
                <RelatedPostList />
            </RelatedPostListContainer>
        </RelatedPostsContainer>
    )
}
