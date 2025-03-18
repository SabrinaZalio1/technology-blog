
import { PostContainer } from './styled'
import { IPost } from '../../../interfaces/Post';
import HeaderPost from '../HeaderPost.tsx/HeaderPost';

export default function Post({ post, variant }: IPost) {
    const { attributes } = post; 
    const { coverImg } = attributes;
    // const { author, body, coverImg, createdAt, publishedAt, readTime, subtitle, title, topic, updatedAt } = attributes;
 
    const baseUrl = 'https://lite-tech-api.litebox.ai'
    const imageUrl=`${baseUrl}${coverImg?.data.attributes.url}`

    return (
        <PostContainer backgroundImg={imageUrl}>
            <HeaderPost attributes={attributes} variant={variant} />
        </PostContainer>
    )
}
