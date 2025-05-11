import { useState, useEffect, lazy, Suspense } from 'react';
import { PostContainer } from './styled';
import { IPost } from '../../../interfaces/Post';
import defaultBackground from './../../../assets/defaultImg.jpg';
import HeaderPostSkeleton from '../HeaderPost.tsx/Skeleton/HeaderPostSkeleton';

const HeaderPost = lazy(() => import('../HeaderPost.tsx/HeaderPost'));

interface IPostComponent {
   post: IPost;
   variant: 'light' | 'dark'
   headerVariant?: 'pill' | 'author'
}
export default function Post({
   post,
   variant,
   headerVariant,
}: IPostComponent) {
   const { attributes } = post || {};
   const coverImg = attributes?.coverImg || null;

   const baseUrl = 'https://lite-tech-api.litebox.ai';
   const imageUrl = coverImg?.data?.attributes?.url
      ? `${baseUrl}${coverImg.data.attributes.url}`
      : defaultBackground;

   const [imgLoaded, setImgLoaded] = useState(false);

   useEffect(() => {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => setImgLoaded(true);
   }, [imageUrl]);

   return (
      <PostContainer
         backgroundimg={imgLoaded ? imageUrl : 'none'}
         imgLoaded={imgLoaded}
      >
         <div className="overlay"></div>
         <Suspense fallback={<HeaderPostSkeleton />}>
            <HeaderPost
               post={post}
               variant={variant}
               headerVariant={headerVariant}
            />
         </Suspense>
      </PostContainer>
   );
}
