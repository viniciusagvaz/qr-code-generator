import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles/themes/themes'
import { Main } from './layout/Main'
import { GlobalStyles } from './styles/themes/GlobalStyles'
import { Footer } from './layout/Footer'
import { Header } from './layout/Header'

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  )
}
