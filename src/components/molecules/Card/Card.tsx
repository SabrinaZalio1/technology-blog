import { CardCotainer, Image, Title } from './styled'
import { IPost } from '../../../interfaces/Post';

function Card(post: IPost) {
  const { attributes } = post?.post;
  const { coverImg, title } = attributes;

  const baseUrl = 'https://lite-tech-api.litebox.ai';
  const coverUrl = coverImg?.data.attributes.url;
  const imageUrl = `${baseUrl}${coverUrl}`;

  return (
    <CardCotainer>
      <Title>{title}</Title>
      <Image src={imageUrl} alt="Imagen de ejemplo" />
    </CardCotainer>
  )
}

export default Card