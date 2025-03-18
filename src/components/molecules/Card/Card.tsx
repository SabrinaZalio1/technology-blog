import React from 'react'
import { CardCotainer, Title } from './styled'
import { IPost } from '../../../interfaces/Post';


function Card(post:IPost) {
    const { attributes } = post;
    const { author, body, coverImg, createdAt, publishedAt, readTime, subtitle, title, topic, updatedAt } = attributes;



    // const baseUrl = 'https://lite-tech-api.litebox.ai'
    
// const imageUrl = coverImg?.attributes?.url ? `${baseUrl}${coverImg.attributes.url}` : '';
    
console.log('title',title)

  return (
    <CardCotainer>
        {/* <Title>{title}</Title> */}
      {/* <img src={imageUrl} alt={title || "Post Image"} /> */}
      
    </CardCotainer>
  )
}

export default Card