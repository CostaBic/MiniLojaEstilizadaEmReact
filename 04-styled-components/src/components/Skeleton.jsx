import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

const SkeletonBox = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.06) 8%,
    rgba(0, 0, 0, 0.02) 18%,
    rgba(0, 0, 0, 0.06) 33%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.2s linear infinite;
`;

export default function Skeleton() {
  return <SkeletonBox />;
}
