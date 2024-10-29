import { css } from '@emotion/react'

/**
 * 글로벌 리셋 CSS + 글로벌 클래스
 */
export const resetCss = css`
  :root {
    --text-primary: dodgerblue;
    --border-grey-light: lightgrey;
    --border-grey: grey;
    --hover-grey: rgb(240, 240, 240);
  }

  /* 
  @media (prefer-color-scheme: dark) {
    :root {
      --background: #202b38;
      --text: #dbdbdb;
      --heading-text: #fff;
    }
  } */

  /* prettier-ignore */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  /* HTML5 display-role reset for older browsers */
  /* prettier-ignore */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
	  display: block;
  }

  html {
    font-family: 'Dongle', sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  body {
    line-height: 1;
    font-size: 1rem;

    /* background: var(--background);
    color: var(--text); */
  }

  a {
    text-decoration: none;
  }

  button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
  }

  h1,
  h2,
  h3 {
    /* color: var(--heading-text); */
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  /* prettier-ignore */
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  textarea {
    display: block;
    box-sizing: border-box;
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none;
  }

  .border_outlined {
    border-radius: 4px;
    border: 1px solid var(--border-grey-light);
  }
`
