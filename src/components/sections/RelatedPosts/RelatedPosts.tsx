import RelatedPostList from '../../organisms/RelatedPostList/RelatedPostList';
import {
   RelatedPostListContainer,
   RelatedPostsContainer,
   RelatedPostsHeader,
   Title,
} from './styled';
import BtnLink from '../../atoms/BtnLink/BtnLink';
import UploadPostModal from '../../organisms/UploadPostModal/UploadPostModal';
import { IPost } from '../../../interfaces/Post';

interface IRelatedPostsProps{
   posts: IPost[];
}
export default function RelatedPosts({posts}:IRelatedPostsProps) {
   return (
      <RelatedPostsContainer>
         <RelatedPostsHeader>
            <Title>Related posts</Title>
            <UploadPostModal>
               <BtnLink
                  arrowColor="#9C73F7"
                  to=""
                  text="New Post"
                  variant="light"
               />
            </UploadPostModal>
         </RelatedPostsHeader>
         <RelatedPostListContainer>
            <RelatedPostList posts={posts}/>
         </RelatedPostListContainer>
      </RelatedPostsContainer>
   );
}
