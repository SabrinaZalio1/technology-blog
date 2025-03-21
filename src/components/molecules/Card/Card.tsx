import { CardContainer, CardSection, Image, ImageWrapper, LoaderContainer, Title } from './styled'
import { IPost } from '../../../interfaces/Post';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';

function Card(post: IPost) {
  const [isLoading, setIsLoading] = useState(true);

  const { attributes } = post?.post;
  const { coverImg, title } = attributes;

  const baseUrl = 'https://lite-tech-api.litebox.ai';
  const coverUrl = coverImg?.data.attributes.url;
  const imageUrl = `${baseUrl}${coverUrl}`;

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
  )
}

export default Card



