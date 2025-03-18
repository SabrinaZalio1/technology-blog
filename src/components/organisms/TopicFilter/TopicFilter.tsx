import React from 'react'
import { Title, TopicFilterContainer } from './styled'
import FilterPill from '../../atoms/FilterPill/FilterPill'
import { usePosts } from '../../../hooks/usePosts';

function TopicFilter() {
    const { posts } = usePosts();
    
    const topics = posts && posts.map(post => post?.attributes.topic);
    const uniqueTopics = [...new Set(topics)];

    console.log(uniqueTopics);
    return (
        <TopicFilterContainer>
            <Title>Topics</Title>
            {uniqueTopics.map(topic => (
                <FilterPill text={topic} />
            ))}
        </TopicFilterContainer>
    )
}

export default TopicFilter