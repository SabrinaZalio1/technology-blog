import React from 'react'
import { IPost } from '../../../interfaces/Post'
import { MostViewPostsContainer, PostBodyContainer, PostDetailContainer, SocialMediaContainer, StyledBody, Title } from './styled';
import LinkedIn from '../../../assets/icons/LinkedIn';
import Facebook from '../../../assets/icons/Facebook';
import Twitter from '../../../assets/icons/Twitter';
import MostViewPosts from '../MostViewPosts/MostViewPosts';
import { theme } from '../../../styles/themes';

export default function PostDetail({ post }: IPost) {
    const { attributes } = post || {};
    // console.log('attributes', attributes)
    return (
        <PostDetailContainer>
            <SocialMediaContainer>
                <Title>Share on</Title>
                <div>
                    <LinkedIn color={theme.colors.background} />
                    <Facebook color={theme.colors.background} />
                    <Twitter color={theme.colors.background} />
                </div>
            </SocialMediaContainer>
            <PostBodyContainer>
                <Title>{attributes?.subtitle}</Title>
                <StyledBody dangerouslySetInnerHTML={{ __html: attributes?.body }}></StyledBody>
            </PostBodyContainer>
            {/* <MostViewPostsContainer> */}
            <MostViewPosts />
            {/* </MostViewPostsContainer> */}
        </PostDetailContainer>
    )
}
