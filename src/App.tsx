import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./routes/Router";

import { GlobalStyle } from "./styles/global-styles";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
