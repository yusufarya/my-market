import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../../theme"; // Import your custom theme
import AppShell from "../components/layouts/AppShell";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppShell>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppShell>
  );
}
