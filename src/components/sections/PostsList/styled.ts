import styled from "styled-components";


export const NewsGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 
    "post1 post2"
    "post1 post3";
  height: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
      "post1"
      "post2"
      "post3";
  }

  & > :nth-child(1) {
    grid-area: post1;
    height: 100%; /* Se expande completamente */
  }

  & > :nth-child(2) {
    grid-area: post2;
  }

  & > :nth-child(3) {
    grid-area: post3;
  }
`;


// export const NewsCard = styled.div`
//   background: white;
//   padding: 15px;
//   border-radius: 10px;
// `;