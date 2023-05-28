import "../styles/globals.css"
import "@rainbow-me/rainbowkit/styles.css"
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit"
import type { AppProps } from "next/app"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import { sepolia, polygonMumbai } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    sepolia,
    polygonMumbai,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: "Eth Donation",
  projectId: "YOUR_PROJECT_ID",
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        theme={darkTheme({
          accentColor: "black",
          accentColorForeground: "white",
          borderRadius: "none",
          fontStack: "system",
          overlayBlur: "small",
        })}
        chains={chains}
      >
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
