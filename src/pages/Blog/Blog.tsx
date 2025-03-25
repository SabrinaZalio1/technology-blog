import InfoBanner from '../../components/molecules/InfoBanner/InfoBanner';
import MostViewPosts from '../../components/sections/MostViewPosts/MostViewPosts';
import PostList from '../../components/sections/PostsList/PostsList';
import { BlogContainer, PostsContainer } from './styled';

function Blog() {
   return (
      <BlogContainer>
         <PostsContainer>
            <PostList variant="default" />
            <InfoBanner />
            <PostList variant="reversed" />
         </PostsContainer>
         <MostViewPosts />
      </BlogContainer>
   );
}

export default Blog;
