import { SliderContainer, Title, TopicFilterContainer, TopicFilterSection } from './styled';
import FilterPill from '../../atoms/FilterPill/FilterPill';
import { usePosts } from '../../../hooks/usePosts';
import Slider from 'react-slick';

function TopicFilter() {
   const { posts, isLoading } = usePosts();

   if (isLoading) return <div>Cargando...</div>;

   const uniqueTopics = posts
      ? [...new Set(posts.map((post) => post?.attributes.topic))]
      : [];

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
   } as const;

   const filterPillList =
      uniqueTopics.length > 0 ? (
         uniqueTopics.map((topic) => (
            <FilterPill key={topic} text={topic} />
         ))
      ) : (
         <p>No hay temas disponibles.</p>
      )

   return (
      <>
         <TopicFilterSection>
            <Title>Topics</Title>
            <TopicFilterContainer>
               {filterPillList}
            </TopicFilterContainer>
         </TopicFilterSection>
         <SliderContainer>
            <Slider {...settings}>
              {filterPillList}
            </Slider>
         </SliderContainer>
      </>
   );
}

export default TopicFilter;
