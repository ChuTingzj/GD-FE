import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import transformerDirectives from '@unocss/transformer-directives'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default ({ mode }) => defineConfig({
  server: {
    proxy: {
      '/api': {
        target: loadEnv(mode, process.cwd()).VITE_TARGET_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/\/api/, ''),
      }
    }
  },
  build: {
    sourcemap: true
  },
  plugins: [UnoCSS({
    presets: [presetUno(), presetAttributify(), presetIcons({
      scale: 3,
      cdn: 'https://esm.sh/'
    })],
    transformers: [transformerDirectives()],
    rules: [
      [/^transition-(\w+)$/, match => ({ 'transition-property': match[1] })],
      ['transition-width-transform', { 'transition-property': 'transform width' }],
      [/^w-(\d+)p$/, match => ({ width: match[1] + 'px' })],
      [/^h-(\d+)p$/, match => ({ height: match[1] + 'px' })],
      [/^text-(\d+)$/, match => ({ 'font-size': match[1] + 'px' })],
      [/^contain-intrinsic-size-(\d+)$/, match => ({ ' contain-intrinsic-size': match[1] + 'px' })],
      [/^animate-vibe$/, () => ({ animation: 'vibe 0.8s' })],
      [/^min-width-(\d+)$/, (match) => ({ 'min-width': match[1] + 'px' })],
      [/^max-height-(\d+)$/, (match) => ({ 'max-height': match[1] + 'px' })]
    ],
    theme: {
      colors: {
        light: '#d1d5db',
        dark: '#111827',
        antBlue: '#1677ff',
        bodyBg: '#f4f5f5',
        bodyDarkBg: '#1F2937'
      },
      extend: {
        transitionProperty: {
          'width': 'width',
          'left': 'left'
        },
      }
    },
    shortcuts: {
      'normal-transition': 'transition duration-500 ease-linear',
      'normal-theme': 'normal-transition bg-white dark:bg-dark dark:text-light',
      'normal-flex': 'flex justify-center items-center',
      'normal-indicator-action': 'transition duration-400 ease-linear',
      'indicator-width-transform-action': 'transition-width-transform duration-400 ease-linear',
      'normal-indicator-bb': 'border-b-solid border-blue-9',
      'normal-bb': 'border-b-2 border-gray-200 py-2',
      'normal-br': 'border-r border-gray-400 pr-1',
      'detail-util-bar': 'normal-theme w-48p h-48p rounded-full normal-flex text-lg cursor-pointer hover:text-antBlue',
      'detail-index-bar-articleInfo': 'w-25p h-25p rounded-full bg-blue-200 text-blue-400 normal-flex'
    }
  }), react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src/')
      }
    ]
  }
})
