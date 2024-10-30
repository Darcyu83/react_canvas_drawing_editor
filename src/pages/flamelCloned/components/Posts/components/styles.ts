import styled from '@emotion/styled'
import { palette } from '../../../../../styles/palette'

export const CardContainer = styled.div<{
  aspectRatio?: string
  imgUrl?: string
  isSelected?: boolean
}>`
  flex: 1;
  aspect-ratio: 1/1;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid transparent;
  /* ${({ isSelected }) =>
    isSelected ? palette.textPrimary : 'transparent'}; */
  box-shadow: ${({ isSelected }) =>
    isSelected
      ? `2px 0px ${palette.textPrimary},
      0px 2px ${palette.textPrimary},
      -2px 0px ${palette.textPrimary},
       0px -2px ${palette.textPrimary}`
      : undefined};

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
    transition:
      transform 0.4s ease-in-out,
      border 0.7s ease-in-out;

    transform: scale(1);
  }

  &:hover {
    border: 1px solid ${palette.darkGrey};
  }

  &:hover::before {
    transform: scale(1.1);
  }
`
