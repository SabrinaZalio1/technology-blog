import styled from 'styled-components';

export const PostContainer = styled.div<{
   backgroundimg: string;
   imgLoaded: boolean;
}>`
   background-image: ${({ backgroundimg, imgLoaded }) =>
      imgLoaded ? `url(${backgroundimg})` : 'none'};
   width: 100%;
   height: 500px;
   background-size: cover;
   background-position: center;
   position: relative;
   transition: background-image 0.5s ease-in-out;

   .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(49, 49, 49, 0.75);
      transition: opacity 0.5s ease-in-out;
      opacity: ${({ imgLoaded }) => (imgLoaded ? 0 : 1)};
   }

   @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      height: 100%;
   }
`;
