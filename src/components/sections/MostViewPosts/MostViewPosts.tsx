import { MostViewPostsContainer, MostViewPostsSection, Title } from './styled';
import Card from '../../molecules/Card/Card';
import { IPost } from '../../../interfaces/Post';

interface IMostViewPostsProps{
   posts: IPost[];
}

function MostViewPosts({posts}:IMostViewPostsProps) {
   
   return (
      <MostViewPostsSection>
         <Title>Most viewed</Title>
         <MostViewPostsContainer>
            { posts?.length > 0 ? (
               posts
                  .slice(2, 6)
                  .map((post: IPost) => <Card key={post.id} post={post} />)
            ) : (
               <p>No hay most views</p>
            )}
         </MostViewPostsContainer>
      </MostViewPostsSection>
   );
}

export default MostViewPosts;
