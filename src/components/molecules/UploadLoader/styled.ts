import styled from 'styled-components';

export const Container = styled.div``;

export const ProgressBar = styled.div<{ progress: number; color: string }>`
   height: 6px;
   background: ${({ color }) => color};
   width: ${({ progress }) => progress}%;
   transition: width 0.3s ease-in-out;
`;

export const BarWrapper = styled.div`
   height: 6px;
   background: grey;
   width: 100%;
   margin-top: 4px;
   position: relative;
   border: 1px solid black;
`;

export const Text = styled.p`
   margin: 0;
   font-size: 14px;
   color: black;
`;

export const Button = styled.button`
   background: none;
   border: none;
   color: black;
   font-size: 14px;
   cursor: pointer;
   margin-left: 8px;
`;
