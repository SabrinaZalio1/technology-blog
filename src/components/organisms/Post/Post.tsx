import { useState, useEffect } from 'react';
import { PostContainer } from './styled';
import { IPost } from '../../../interfaces/Post';
import HeaderPost from '../HeaderPost.tsx/HeaderPost';
import defaultBackground from './../../../assets/defaultImg.jpg';

export default function Post({ post, variant, headerVariant }: IPost & { headerVariant?: 'pill' | 'author' }) {
    const { attributes } = post || {}; 
    const coverImg = attributes?.coverImg || null;

    const baseUrl = 'https://lite-tech-api.litebox.ai';
    const imageUrl = coverImg?.data?.attributes?.url ? `${baseUrl}${coverImg.data.attributes.url}` : defaultBackground;

    const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => setImgLoaded(true); // Cuando la imagen se carga, cambia el estado
    }, [imageUrl]);

    return (
        <PostContainer backgroundimg={imgLoaded ? imageUrl : 'none'} imgLoaded={imgLoaded}>
            <div className="overlay"></div>
            <HeaderPost attributes={attributes} variant={variant} headerVariant={headerVariant} />
        </PostContainer>
    );
}
