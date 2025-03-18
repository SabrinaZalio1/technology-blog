import { CategoryContainer, Detail, HeaderPostContainer, InfoContainer, Title } from './styled'
import FilterPill from '../../atoms/FilterPill/FilterPill'
import { IPost } from '../../../interfaces/Post';
import { Link, Section } from '../../sections/Footer/styled';

function HeaderPost({ attributes }: IPost) {

    const { readTime, title, topic } = attributes;
    
    return (
        <HeaderPostContainer>
            <CategoryContainer>
                <FilterPill text={topic} />
            </CategoryContainer>
            <InfoContainer>
                <Title>{title}</Title>
                <Section>
                    <Link>Read</Link>
                    <Detail>{readTime} mins</Detail>
                </Section>
            </InfoContainer>
        </HeaderPostContainer>
    )
}

export default HeaderPost