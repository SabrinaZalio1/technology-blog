// import styled from "styled-components";

// export const NewsGrid = styled.div`
//   width: 75%;
//   display: grid;
//   gap: 20px;
//   grid-template-columns: 1fr 1fr;  
//   grid-template-rows: 1fr 1fr;
//   grid-template-areas: 
//     "post1 post2"
//     "post1 post3";
//   height: 90vh;

//   & > :nth-child(1) {
//     grid-area: post1;
//     height: 100%;  
//   }

//   & > :nth-child(2) {
//     grid-area: post2;
//     height: 100%;
//   }

//   & > :nth-child(3) {
//     grid-area: post3;
//     height: 100%;
//   }

//   @media (max-width: 768px) {
//     width: 100%;  
//     grid-template-columns: 1fr;
//     height: unset;  
//     grid-template-rows: auto;  
//     grid-template-areas: 
//       "post1"
//       "post2"
//       "post3";  
  

//   & > :nth-child(1) {
//     grid-area: post1;
//     height: 300px;  
//   }

//   & > :nth-child(2) {
//     grid-area: post2;
//     height: 300px;  
//   }

//   & > :nth-child(3) {
//     grid-area: post3;
//     height: 300px;
//   }
//   }
// `;

// export const NewsImage = styled.img`
//   width: 100%;
//   height: 100%;  
//   object-fit: cover; 
//   border-radius: 10px;
// `;
import styled from "styled-components";

export const StyledNewsGrid = styled.div<{ variant: "default" | "reversed" }>`
  /* width: 75%; */
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;  
  grid-template-rows: 1fr 1fr;
  height: 90vh;

  /* Grid normal */
  ${({ variant }) =>
    variant === "default" &&
    `
    grid-template-areas: 
      "post1 post2"
      "post1 post3";
  `}

  /* Grid invertida */
  ${({ variant }) =>
    variant === "reversed" &&
    `
    grid-template-areas: 
      "post2 post1"
      "post3 post1";
  `}

  & > :nth-child(1) {
    grid-area: post1;
    height: 100%;  
  }

  & > :nth-child(2) {
    grid-area: post2;
    height: 100%;
  }

  & > :nth-child(3) {
    grid-area: post3;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;  
    grid-template-columns: 1fr;
    height: unset;  
    grid-template-rows: auto;  
    grid-template-areas: 
      "post1"
      "post2"
      "post3";  

    & > :nth-child(1) {
      height: 300px;  
    }

    & > :nth-child(2) {
      height: 300px;  
    }

    & > :nth-child(3) {
      height: 300px;
    }
  }
`;
