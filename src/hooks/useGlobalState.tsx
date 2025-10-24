import {useState} from "react"

export interface UserConfig {
  technology: string
  architecture: string
}

export interface BackendResponse {
  structure: any

  [key: string]: any
}

export interface UseGlobalState {
  userConfig: UserConfig | null
  setUserConfig: (config: UserConfig) => void
  generationStatus: "idle" | "generating" | "success" | "error"
  setGenerationStatus: (status: "idle" | "generating" | "success" | "error") => void
  backendResponse: BackendResponse | null
  setBackendResponse: (response: BackendResponse) => void
  isDownloading: boolean
  setIsDownloading: (downloading: boolean) => void
}

export function useGlobalState(): UseGlobalState {
  const [userConfig, setUserConfig] = useState<UserConfig | null>(null)
  const [generationStatus, setGenerationStatus] = useState<"idle" | "generating" | "success" | "error">("idle")
  const [backendResponse, setBackendResponse] = useState<BackendResponse | null>(null)
  const [isDownloading, setIsDownloading] = useState<boolean>(false)

  return {
    userConfig,
    setUserConfig,
    generationStatus,
    setGenerationStatus,
    backendResponse,
    setBackendResponse,
    isDownloading,
    setIsDownloading,
  }
}