import { ThemeProvider } from "theme-ui";
import theme from "../styles/theme";
import { AppProps } from "next/app";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
