import App from 'next/app'
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron } from '../styletron'
import Providers from './providers'

export default class Bouncer extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Providers>
        <StyletronProvider value={styletron}>
          <Component {...pageProps} />
        </StyletronProvider>
      </Providers>
    )
  }
}
