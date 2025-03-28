import {
   CardContainer,
   CardSection,
   Image,
   ImageWrapper,
   LoaderContainer,
   Title,
} from './styled';
import { IPost } from '../../../interfaces/Post';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

interface ICard {
  post: IPost;
}

function Card({post}: ICard) {
   const [isLoading, setIsLoading] = useState(true);

   const { coverImg, title } = post.attributes;

   const baseUrl = 'https://lite-tech-api.litebox.ai';
   const coverUrl = coverImg?.data.attributes.url;
   const imageUrl = `${baseUrl}${coverUrl}`;

   useEffect(() => {
      const img = new window.Image();
      img.src = imageUrl;
      img.onload = () => setIsLoading(false);
   }, [imageUrl]);

   return (
      <CardContainer>
         <Title>{title}</Title>
         <CardSection>
            <ImageWrapper>
               {isLoading && (
                  <LoaderContainer>
                     <CircularProgress size="30px" color="inherit" />
                  </LoaderContainer>
               )}
               <Image
                  src={imageUrl}
                  onLoad={() => setIsLoading(false)}
                  $isLoading={isLoading}
               />
            </ImageWrapper>
         </CardSection>
      </CardContainer>
   );
}

export default Card;
