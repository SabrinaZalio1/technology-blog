import { usePosts } from '../../../hooks/usePosts';
import { IPost } from '../../../interfaces/Post';
import Post from '../../organisms/Post/Post';
import { StyledNewsGrid } from './styled';

interface PostListProps {
   variant?: 'default' | 'reversed';
   startIndex: number;
}

const PostList = ({ variant = 'default', startIndex }: PostListProps) => {
   const { posts, error, isLoading } = usePosts();

   if (error) return <p>{error}</p>;
   if (isLoading) return <div>Cargando...</div>;

   const selectedPosts = posts.slice(startIndex, startIndex + 3); 

   return (
      <StyledNewsGrid variant={variant}>
         {selectedPosts.length > 0 ? (
            selectedPosts.map((post: IPost) => (
               <Post key={post.id} post={post} variant="light" />
            ))
         ) : (
            <p>No hay suficientes posts para mostrar.</p>
         )}
      </StyledNewsGrid>
   );
};

export default PostList;
