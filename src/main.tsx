import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Global } from '@emotion/react'
import { resetCss } from './styles/globalStyle.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global styles={resetCss} />
    <App />
  </StrictMode>
)
