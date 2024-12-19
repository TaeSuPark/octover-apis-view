import mainTheme from "@styles/mainTheme"
import GlobalStyles from "@styles/global-styles"
import { AppProps } from "next/app"
import { RecoilRoot } from "recoil"
import { ThemeProvider } from "styled-components"
import ReactQueryProvider from "@src/providers/ReactQueryProvider"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <ReactQueryProvider>
        <ThemeProvider theme={mainTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ReactQueryProvider>
    </RecoilRoot>
  )
}
