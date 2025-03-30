import Slider from 'react-slick';
import { IPost } from '../../../interfaces/Post';
import Post from '../Post/Post';
import { SliderContainer } from './styled';

interface ISliderCarouselProps{
   posts: IPost[];
}
export default function SliderCarousel({posts}:ISliderCarouselProps) {

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
   };
   return (
      <SliderContainer>
         <Slider {...settings}>
            {
               posts.length > 0 &&
               posts.slice(2, 5).map((post: IPost) => (
                  <div>
                     <Post key={post.id} post={post} variant="light" />
                  </div>
               ))}
         </Slider>
      </SliderContainer>
   );
}
