"use client"

import { FC } from "react"
import { MetaMaskProvider as MetaMaskContextProvider } from "@metamask/sdk-react"

interface MetaMaskProviderProps {
  children: React.ReactNode
}

const MetaMaskProvider: FC<MetaMaskProviderProps> = ({ children }) => {
  const host =
    typeof window !== "undefined" ? window.location.host : "localhost"

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "MedBlock",
      url: host,
    },
  }

  return (
    <MetaMaskContextProvider debug={false} sdkOptions={sdkOptions}>
      {children}
    </MetaMaskContextProvider>
  )
}

export default MetaMaskProvider
