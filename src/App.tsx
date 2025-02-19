import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/themes/themes";

import { DefaultLayout } from "./layout/DefaultLayout";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DefaultLayout />
    </ThemeProvider>
  );
}
