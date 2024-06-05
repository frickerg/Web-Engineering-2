// Default Theme enthält aktuell einfach die globalen style Definitionen

import { createGlobalStyle } from 'styled-components';

const DefaultTheme = createGlobalStyle`
* {
  font-size: 20px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
:root {
  font-family: sans-serif;
}
`

export default DefaultTheme