import styled from '@emotion/styled'
import {
  MAIN_CONTENT_MARGIN_LEFT_RIGHT_1000PX_OVER,
  MAIN_CONTENT_MARGIN_LEFT_RIGHT_1000PX_UNDER,
} from '../styles/constants'

export const MainLayoutContainer = styled.div`
  padding: 0 8px;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  gap: 24px;

  & > main {
    margin: 0 ${MAIN_CONTENT_MARGIN_LEFT_RIGHT_1000PX_OVER};
    height: 100%;

    @media screen and (max-width: 1000px) {
      margin: 0 ${MAIN_CONTENT_MARGIN_LEFT_RIGHT_1000PX_UNDER};
    }
  }
`
