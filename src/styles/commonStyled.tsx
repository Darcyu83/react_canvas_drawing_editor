import styled from '@emotion/styled'
import { CSSProperties } from 'react'
import { getStylePxStrValue } from './utils'
import { palette } from './palette'

export const CommText = styled.p<{ fontSize?: number }>`
  font-size: ${(props) => getStylePxStrValue(props.fontSize)};
`
export const CommFlexRowContainer = styled.div<{
  flexWrap?: CSSProperties['flexWrap']
  justifyContent?: CSSProperties['justifyContent']
  gap?: CSSProperties['gap']
  padding?: CSSProperties['padding']
  width?: CSSProperties['width']
  height?: CSSProperties['height']
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  flex-wrap: ${(props) => props.flexWrap};

  gap: ${(props) => getStylePxStrValue(props.gap)};
  padding: ${(props) => getStylePxStrValue(props.padding)};

  width: ${(props) => getStylePxStrValue(props.width)};
  height: ${(props) => getStylePxStrValue(props.height)};
`

export const CommFlexColContainer = styled.div<{
  flexWrap?: CSSProperties['flexWrap']
  alignItems?: CSSProperties['alignItems']
  gap?: CSSProperties['gap']
  padding?: CSSProperties['padding']
  width?: CSSProperties['width']
  height?: CSSProperties['height']
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => props.alignItems};
  flex-wrap: ${(props) => props.flexWrap};

  gap: ${(props) => getStylePxStrValue(props.gap)};
  padding: ${(props) => getStylePxStrValue(props.padding)};

  width: ${(props) => getStylePxStrValue(props.width)};
  height: ${(props) => getStylePxStrValue(props.height)};
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
  color: ${(props) => props.iconColor};
  border-radius: 4px;
  transition:
    background 0.2s ease-in,
    color 0.2s ease-in;

  background: ${(props) => (props.isSelected ? palette.accentGrey : 'white')};
  color: ${(props) => (props.isSelected ? palette.hoverGrey : 'inherit')};

  &:hover {
    background: ${(props) =>
      props.isSelected ? palette.borderGrey : palette.hoverGrey};
  }
`
