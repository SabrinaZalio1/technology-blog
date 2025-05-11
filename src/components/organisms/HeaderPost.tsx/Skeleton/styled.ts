import styled, { keyframes } from "styled-components";
import { theme } from "../../../../styles/themes";

export const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

export const SkeletonBox = styled.div`
  background: linear-gradient(
    90deg,
    ${theme.colors.base} 25%,
    ${theme.colors.gray} 50%,
    ${theme.colors.base} 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 4px;
`;

export const HeaderPostContainer = styled.div`
  width: 90%;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
`;

export const CategoryContainer = styled.div`
  width: 60%;
  max-width: 282px;
  display: flex;
  justify-content: center;
  padding: 20px 10px;
  margin-bottom: -1px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  max-width: 550px;
`;

export const SkeletonPill = styled(SkeletonBox)`
  width: 100px;
  height: 24px;
`;

export const SkeletonTitle = styled(SkeletonBox)`
  width: 80%;
  height: 32px;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SkeletonBtn = styled(SkeletonBox)`
  width: 70px;
  height: 24px;
`;

export const SkeletonDetail = styled(SkeletonBox)`
  width: 40px;
  height: 16px;
`;
