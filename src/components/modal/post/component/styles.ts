import styled from '@emotion/styled'
import { palette } from '../../../../styles/palette'

export const CardContainer = styled.div<{ imgUrl?: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${palette.darkGrey};
  aspect-ratio: 1/1;
  background-image: ${({ imgUrl }) => (imgUrl ? `url(${imgUrl})` : undefined)};
  background-position: center;
  background-size: cover;
  border-radius: 8px;
`
