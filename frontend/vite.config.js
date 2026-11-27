import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

const envDir = resolve(process.cwd(), '..')

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, envDir, '')
  const apiUrl = env.BASE_URL || process.env.BASE_URL
  let proxyTarget

  if (!apiUrl) {
    throw new Error('Set BASE_URL in the repository environment.')
  }
  if (/^https?:\/\//i.test(apiUrl)) {
    proxyTarget = new URL(apiUrl).origin
  }
  if (mode === 'development' && !proxyTarget) {
    throw new Error('Set BASE_URL to a reachable backend origin for local development.')
  }

  return {
    envDir,
    define: {
      'import.meta.env.VITE_API_URL': JSON.stringify(mode === 'development' ? '/api' : apiUrl),
    },
    plugins: [react()],
    server: {
      ...(proxyTarget
        ? {
            proxy: {
              '/api': {
                target: proxyTarget,
                changeOrigin: true,
              },
            },
          }
        : {}),
    },
  }
})
