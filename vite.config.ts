import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import transformerDirectives  from '@unocss/transformer-directives'
import {resolve} from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [UnoCSS({
    presets: [presetUno(), presetAttributify(), presetIcons({
      scale: 3,
      cdn: 'https://esm.sh/'
    })],
    transformers:[transformerDirectives()],
    rules:[
      [/^transition-(\w+)$/,match=>({'transition-property':match[1]})],
      ['transition-width-transform',{'transition-property':'transform width'}],
      [/^w-(\d+)p$/,match=>({width:match[1]+'px'})],
      [/^text-(\d+)$/,match=>({'font-size':match[1]+'px'})]
    ],
    theme:{
      colors:{
        light:'#d1d5db',
        dark:'#111827',
        antBlue:'#1677ff',
        bodyBg:'#f4f5f5',
        bodyDarkBg:'#1F2937'
      },
      extend:{
        transitionProperty:{
          'width':'width',
          'left':'left'
        }
      }
    },
    shortcuts:{
      'normal-transition':'transition duration-500 ease-linear',
      'normal-flex':'flex justify-center items-center',
      'normal-indicator-action':'transition duration-400 ease-linear',
      'normal-indicator-bb':'border-b-solid border-blue-9',
      'normal-bb':'border-b-2 border-gray-200 py-2',
      'normal-br':'border-r border-gray-400 pr-1'
    }
  }),react()],
  resolve:{
    alias:[
      {
        find:'@',
        replacement:resolve(__dirname,'./src/')
      }
    ]
  }
})
