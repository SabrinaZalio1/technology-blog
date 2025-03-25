import {
   SliderContainer,
   Title,
   TopicFilterContainer,
   TopicFilterSection,
} from './styled';
import FilterPill from '../../atoms/FilterPill/FilterPill';
import { usePosts } from '../../../hooks/usePosts';
import Slider from 'react-slick';

function TopicFilter() {
   const { posts } = usePosts();

   const topics = posts && posts.map((post) => post?.attributes.topic);
   const uniqueTopics = [...new Set(topics)];

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
   };

   return (
      <>
         <TopicFilterSection>
            <Title>Topics</Title>
            <TopicFilterContainer>
               {uniqueTopics.map((topic, index) => (
                  <FilterPill key={index} text={topic} />
               ))}
            </TopicFilterContainer>
         </TopicFilterSection>
         <SliderContainer>
            <Slider {...settings}>
               {uniqueTopics.map((topic, index) => (
                  <FilterPill key={index} text={topic} />
               ))}
            </Slider>
         </SliderContainer>{' '}
      </>
   );
}

export default TopicFilter;
