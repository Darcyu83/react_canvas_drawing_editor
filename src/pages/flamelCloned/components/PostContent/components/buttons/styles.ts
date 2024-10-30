import styled from '@emotion/styled'
import { CommFlexRowContainer } from '../../../../../../styles/commonStyled'
import { palette } from '../../../../../../styles/palette'
import { CSSProperties } from 'react'

const convertedButton = CommFlexRowContainer.withComponent('button')
export const RoundBadgeContainer = styled(convertedButton)<{
  bgColor?: CSSProperties['background']
}>`
  background: ${(props) => (props.bgColor ? props.bgColor : palette.lightGrey)};
  padding: 2px 4px;
  border-radius: 10px;
  vertical-align: middle;
  min-width: 50px;
`
