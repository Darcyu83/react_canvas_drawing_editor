import styled from '@emotion/styled'
import { CommFlexRowContainer } from '../../../styles/commonStyled'
import { keyframes } from '@emotion/react'

const opacity = keyframes`

from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }

`
export const OverlayContainer = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  opacity: ${({ isOpen }) => (!!isOpen ? 1 : 0)};
  transform: ${({ isOpen }) =>
    !!isOpen ? `translateY(0)` : 'translateY(90%)'};

  z-index: 4;
  transition:
    transform 0.2s ease-in-out,
    opacity 0.2s ease-in-out;
`

export const ContentInvisibleContainer = styled(CommFlexRowContainer)<{
  isOpen?: boolean
}>`
  /* background-color: red; */
  width: 100%;
  height: 100%;
  justify-content: center;

  opacity: ${({ isOpen }) => (!!isOpen ? 1 : 0)};
  transition: opacity 0.3s ease;
  transition-delay: 0.1s;
`
