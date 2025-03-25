import { IPost } from '../../../interfaces/Post';
import {
   PostBodyContainer,
   PostDetailContainer,
   SocialMediaContainer,
   StyledBody,
   Title,
} from './styled';
import MostViewPosts from '../MostViewPosts/MostViewPosts';
import { theme } from '../../../styles/themes';
import SocialLinks from '../../molecules/SocialLinks/SocialLinks';

interface IPostDetail {
   post: IPost;
}

export default function PostDetail({ post }: IPostDetail) {
   const { attributes } = post || {};
   return (
      <PostDetailContainer>
         <SocialMediaContainer>
            <Title>Share on</Title>
            <SocialLinks color={theme.colors.background} />
         </SocialMediaContainer>
         <PostBodyContainer>
            <Title>{attributes?.subtitle}</Title>
            <StyledBody
               dangerouslySetInnerHTML={{ __html: attributes?.body }}
            ></StyledBody>
         </PostBodyContainer>
         <MostViewPosts />
      </PostDetailContainer>
   );
}
