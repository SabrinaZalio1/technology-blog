import Post from '../Post/Post';
import { RelatedPostListContainer } from './styled';
import { IPost } from '../../../interfaces/Post';

interface IRelatedPostListProps{
   posts: IPost[];
}

export default function RelatedPostList({posts}:IRelatedPostListProps) {

   return (
      <RelatedPostListContainer>
         {
            posts.length > 0 &&
            posts
               .slice(10, 13)
               .map((post: IPost) => (
                  <Post key={post.id} post={post} variant="light" />
               ))}
      </RelatedPostListContainer>
   );
}
