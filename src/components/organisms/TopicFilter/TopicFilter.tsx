import React from 'react'
import { Title, TopicFilterContainer } from './styled'
import FilterPill from '../../atoms/FilterPill/FilterPill'
import { usePosts } from '../../../hooks/usePosts';

function TopicFilter() {
    const { posts } = usePosts();
    
    const topics = posts && posts.map(post => post?.attributes.topic);
    const uniqueTopics = [...new Set(topics)];

    return (
        <TopicFilterContainer>
            <Title>Topics</Title>
            {uniqueTopics.map((topic, index) => (
                <FilterPill key={index} text={topic} />
            ))}
        </TopicFilterContainer>
    )
}

export default TopicFilter