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

export const PostDetailContainer = styled.div`
  display: flex;
  gap: 30px;
  padding: 30px;
  background-color: ${theme.colors.base};
  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
  }
`;

export const SocialMediaContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const PostBodyContainer = styled.div`
  width: 70%;
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const SkeletonTitle = styled(SkeletonBox)`
  width: 60%;
  height: 24px;
  margin-bottom: 20px;
`;

export const SkeletonText = styled(SkeletonBox)`
  width: 100%;
  height: 16px;
  margin-bottom: 12px;
`;
