import { Button } from '../../components/atoms/Button/Button';
import InfoBanner from '../../components/molecules/InfoBanner/InfoBanner';
import MostViewPosts from '../../components/sections/MostViewPosts/MostViewPosts';
import PostList from '../../components/sections/PostsList/PostsList';
import { BlogContainer, ButtonContainer, PostsContainer } from './styled';

function Blog() {
   return (
      <BlogContainer>
         <PostsContainer>
            <PostList variant="default" startIndex={1} />
            <InfoBanner />
            <PostList variant="reversed" startIndex={4} />
            <PostList variant="default" startIndex={7} />
            <ButtonContainer>
               <Button text='Load More' variant='primary' width='155px'/>
            </ButtonContainer>
         </PostsContainer>
         <MostViewPosts />
      </BlogContainer>
   );
}

export default Blog;
