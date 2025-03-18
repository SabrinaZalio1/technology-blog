import { CategoryContainer, Detail, HeaderPostContainer, InfoContainer, Link, Section, Title } from './styled'
import FilterPill from '../../atoms/FilterPill/FilterPill'
import { IPost } from '../../../interfaces/Post';

function HeaderPost({ attributes, variant = 'dark'  }: IPost & { variant?: 'dark' | 'light' }) {

    const { readTime, title, topic } = attributes;
    
    return (
        <HeaderPostContainer>
            <CategoryContainer $variant={variant}>
                <FilterPill text={topic} variant='informative'/>
            </CategoryContainer>
            <InfoContainer $variant={variant}>
                <Title $variant={variant}>{title}</Title>
                <Section>
                    <Link $variant={variant}>Read</Link>
                    <Detail>{readTime} mins</Detail>
                </Section>
            </InfoContainer>
        </HeaderPostContainer>
    )
}

export default HeaderPost