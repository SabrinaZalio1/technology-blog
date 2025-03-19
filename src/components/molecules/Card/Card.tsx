import React from 'react'
import { CardCotainer, Title } from './styled'
import { IPost } from '../../../interfaces/Post';
import styled from 'styled-components';

const Image = styled.img`
  width: 100px;
  height: auto;
  border-radius: 8px;
`;

function Card(post:IPost) {
    const { attributes } = post?.post;
    const { coverImg, title} = attributes;



    const baseUrl = 'https://lite-tech-api.litebox.ai';
    const coverUrl = coverImg?.data.attributes.url;

    const imageUrl =  `${baseUrl}${coverUrl}`;
    
console.log('coverImg',coverImg?.data.attributes.url)

  return (
    <CardCotainer>
        <Title>{title}</Title>
      <Image src={imageUrl} alt="Imagen de ejemplo" />
    </CardCotainer>
  )
}

export default Card