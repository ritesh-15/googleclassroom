import styled from "styled-components";

interface props {
  width?: string;
  height?: string;
}

const Avatar = styled.div<props>`
  width: ${({ width }) => (width ? width : "50px")};
  height: ${({ height }) => (height ? height : "50px")};
  border-radius: 50%;
  overflow: hidden;
  z-index: 20;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Avatar;
