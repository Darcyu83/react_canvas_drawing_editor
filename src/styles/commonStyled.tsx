import styled from '@emotion/styled'
import { CSSProperties } from 'react'
import { getStylePxStrValue } from './utils'
import { palette } from './palette'
import { css } from '@emotion/react'

export const CommText = styled.p<{
  color?: CSSProperties['color']
  fontSize?: number
}>`
  color: ${(props) => props.color};
  font-size: ${(props) => getStylePxStrValue(props.fontSize)};
`
export const CommFlexRowContainer = styled.div<{
  checkArea?: boolean // 개발자 영역체크용

  flexWrap?: CSSProperties['flexWrap']
  justifyContent?: CSSProperties['justifyContent']
  alignItems?: CSSProperties['alignItems']
  gap?: CSSProperties['gap']
  padding?: CSSProperties['padding']
  width?: CSSProperties['width']
  height?: CSSProperties['height']
}>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems ?? 'center'};
  flex-wrap: ${(props) => props.flexWrap};

  gap: ${(props) => getStylePxStrValue(props.gap)};
  padding: ${(props) => getStylePxStrValue(props.padding)};

  width: ${(props) => getStylePxStrValue(props.width)};
  height: ${(props) => getStylePxStrValue(props.height)};

  ${({ checkArea }) =>
    checkArea &&
    css`
      border: 1px solid red;
    `}
`

export const CommFlexColContainer = styled.div<{
  checkArea?: boolean // 개발자 영역체크용

  flexWrap?: CSSProperties['flexWrap']
  justifyContent?: CSSProperties['justifyContent']
  alignItems?: CSSProperties['alignItems']
  gap?: CSSProperties['gap']
  padding?: CSSProperties['padding']
  width?: CSSProperties['width']
  height?: CSSProperties['height']
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent ?? 'center'};
  align-items: ${(props) => props.alignItems};

  flex-wrap: ${(props) => props.flexWrap};

  gap: ${(props) => getStylePxStrValue(props.gap)};
  padding: ${(props) => getStylePxStrValue(props.padding)};

  width: ${(props) => getStylePxStrValue(props.width)};
  height: ${(props) => getStylePxStrValue(props.height)};

  ${({ checkArea }) =>
    checkArea &&
    css`
      border: 1px solid red;
    `}
`

export const CommBtn = styled.button<{
  justifyContent?: CSSProperties['justifyContent']
  iconColor?: CSSProperties['color']
  isSelected?: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  border-radius: 4px;
  transition:
    background 0.2s ease-in,
    color 0.2s ease-in;

  background: ${(props) => (props.isSelected ? palette.bgActive : undefined)};
  color: ${(props) =>
    props.isSelected
      ? palette.textActiveWhite
      : props.iconColor
        ? props.iconColor
        : palette.textInactive};

  &:hover {
    background: ${palette.hoverGrey};
    color: ${palette.textActiveWhite};
  }
`
