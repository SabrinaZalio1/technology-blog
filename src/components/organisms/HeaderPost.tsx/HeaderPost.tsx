import {
   CategoryContainer,
   Detail,
   DetailContainer,
   HeaderPostContainer,
   InfoContainer,
   Section,
   Title,
} from './styled';
import FilterPill from '../../atoms/FilterPill/FilterPill';
import { IPost } from '../../../interfaces/Post';
import BtnLink from '../../atoms/BtnLink/BtnLink';
import AuthorPost from '../../atoms/AuthorPost/AuthorPost';
import File from '../../../assets/icons/File';

interface HeaderPostProps {
   variant?: 'dark' | 'light';
   headerVariant?: 'pill' | 'author';
   post: IPost;
}

const DEFAULT_VARIANT: 'dark' | 'light' = 'dark';

const HeaderPost: React.FC<HeaderPostProps> = ({
   variant = DEFAULT_VARIANT,
   headerVariant = 'pill',
   post,
}) => {
   const { id, attributes } = post;
   const { readTime, title, topic, author } = attributes;

   const categoryContent = headerVariant === 'pill' 
   ? <FilterPill text={topic} variant="informative" />
   : <AuthorPost author={author} />;

   return (
      <HeaderPostContainer>
         <CategoryContainer $variant={variant}>
           {categoryContent}
         </CategoryContainer>
         <InfoContainer $variant={variant}>
            <Title $variant={variant}>{title}</Title>
            <Section>
               <BtnLink
                  to={`/news/${id}`}
                  text="Read"
                  arrowColor="#9C73F7"
                  variant={variant}
               />
               <DetailContainer>
                  <File/>
               <Detail>{readTime} mins</Detail>
               </DetailContainer>
            </Section>
         </InfoContainer>
      </HeaderPostContainer>
   );
};

export default HeaderPost;
