import { PostContainer } from './styled';
import { IPost } from '../../../interfaces/Post';
import HeaderPost from '../HeaderPost.tsx/HeaderPost';
import defaultBackground from './../../../assets/defaultImg.jpg';
import { useEffect } from 'react';

export default function Post({ post, variant }: IPost) {
    const { attributes } = post || {}; 
    const coverImg = attributes?.coverImg || null;

    const baseUrl = 'https://lite-tech-api.litebox.ai';
    const imageUrl = coverImg?.data?.attributes?.url ? `${baseUrl}${coverImg.data.attributes.url}` : defaultBackground;

    const preloadImage = (src: string) => {
        const img = new Image();
        img.src = src;
    };
    
    useEffect(() => {
        if (imageUrl) {
            preloadImage(imageUrl);
        }
    }, [imageUrl]);

    return (
        <PostContainer backgroundImg={imageUrl}>
            <HeaderPost attributes={attributes} variant={variant} />
        </PostContainer>
    );
}
