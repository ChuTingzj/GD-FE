/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_TARGET_URL: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}