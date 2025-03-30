import { Button } from '../../components/atoms/Button/Button';
import InfoBanner from '../../components/molecules/InfoBanner/InfoBanner';
import MostViewPosts from '../../components/sections/MostViewPosts/MostViewPosts';
import PostList from '../../components/sections/PostsList/PostsList';
import { IPost } from '../../interfaces/Post';
import { BlogContainer, ButtonContainer, PostsContainer } from './styled';

interface IBlogProps{
   posts: IPost[];
}

function Blog({posts}:IBlogProps) {
   return (
      <BlogContainer>
         <PostsContainer>
            <PostList variant="default" startIndex={1} posts={posts}/>
            <InfoBanner />
            <PostList variant="reversed" startIndex={4} posts={posts}/>
            <PostList variant="default" startIndex={7} posts={posts}/>
            <ButtonContainer>
               <Button text='Load More' variant='primary' width='155px'/>
            </ButtonContainer>
         </PostsContainer>
         <MostViewPosts posts={posts} />
      </BlogContainer>
   );
}

export default Blog;
