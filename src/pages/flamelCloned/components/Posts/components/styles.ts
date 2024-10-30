import styled from '@emotion/styled'

export const CardContainer = styled.div<{
  aspectRatio?: string
  imgUrl?: string
}>`
  flex: 1;
  aspect-ratio: 1/1;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-image: ${(props) => `url(${props.imgUrl})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: transform 0.3s ease-in-out;
    transform: scale(1);
  }

  &:hover::before {
    transform: scale(1.1);
  }
`
