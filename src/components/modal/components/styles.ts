import styled from '@emotion/styled'

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
    opacity 0.4s ease-in-out;
`
