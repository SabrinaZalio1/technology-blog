import { SliderContainer, Title, TopicFilterContainer, TopicFilterSection } from './styled';
import FilterPill from '../../atoms/FilterPill/FilterPill';
import Slider from 'react-slick';
import { IPost } from '../../../interfaces/Post';

interface ITopicFilterProps{
   posts: IPost[];
}

function TopicFilter({posts}:ITopicFilterProps) {

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
         <p>There is no available topics</p>
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
