import mainTheme from "@styles/mainTheme"
import GlobalStyles from "@styles/global-styles"
import { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import ReactQueryProvider from "@src/providers/ReactQueryProvider"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ReactQueryProvider>
        <ThemeProvider theme={mainTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ReactQueryProvider>
    </>
  )
}
