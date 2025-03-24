import { 
    CategoryContainer, 
    Detail, 
    HeaderPostContainer, 
    InfoContainer, 
    Section, 
    Title 
} from './styled';
import FilterPill from '../../atoms/FilterPill/FilterPill'
import { IPost } from '../../../interfaces/Post';
import BtnLink from '../../atoms/BtnLink/BtnLink';
import AuthorPost from '../../atoms/AuthorPost/AuthorPost';

interface HeaderPostProps {
    attributes: IPost['post']['attributes'];
    variant?: 'dark' | 'light';
   headerVariant?: 'pill' | 'author'
}

const DEFAULT_VARIANT: 'dark' | 'light' = 'dark';

const HeaderPost: React.FC<HeaderPostProps> = ({ attributes, variant = DEFAULT_VARIANT,  headerVariant = 'pill'  }) => {
    const { readTime, title, topic, author } = attributes;
    
    return (
        <HeaderPostContainer>
            <CategoryContainer $variant={variant}>
            {headerVariant === 'pill' ? (
                    <FilterPill text={topic} variant='informative'/>
            ) : (
                <AuthorPost author={author}/>
            )}
            </CategoryContainer>
            <InfoContainer $variant={variant}>
                <Title $variant={variant}>{title}</Title>
                <Section>
                    <BtnLink text='Read' textColor='white' arrowColor='#9C73F7'/>
                    <Detail>{readTime} mins</Detail>
                </Section>
            </InfoContainer>
        </HeaderPostContainer>
    )
}

export default HeaderPost