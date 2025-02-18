import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles/themes/themes'
import { Main } from './layout/Main'
import { GlobalStyles } from './styles/themes/GlobalStyles'

export function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  )
}

