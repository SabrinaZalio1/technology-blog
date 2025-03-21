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

interface HeaderPostProps {
    attributes: IPost['post']['attributes'];
    variant?: 'dark' | 'light';
}

const DEFAULT_VARIANT: 'dark' | 'light' = 'dark';

const HeaderPost: React.FC<HeaderPostProps> = ({ attributes, variant = DEFAULT_VARIANT }) => {
    const { readTime, title, topic } = attributes;
    
    return (
        <HeaderPostContainer>
            <CategoryContainer $variant={variant}>
                <FilterPill text={topic} variant='informative'/>
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