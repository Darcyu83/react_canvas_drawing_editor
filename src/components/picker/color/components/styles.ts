import styled from '@emotion/styled'
import { CSSProperties } from 'react'
import { palette } from '../../../../styles/palette'

export const PreviewContainer = styled.div<{
  bgColor?: CSSProperties['background']
}>`
  border: 3px solid ${palette.textInactive};
  width: 100%;
  height: 100%;

  background: ${({ bgColor }) => bgColor ?? 'black'};

  &:hover {
    border: 3px solid ${palette.textActiveWhite};
  }
`
