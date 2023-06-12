import {
  defineConfig,
  presetUno,
  transformerDirectives
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno()
  ],
  transformers: [
    transformerDirectives()
  ],
  rules: [
    [
      'navbar-shadow', { 'box-shadow': '0 1px 4px rgb(0 21 41 / 8%)' }
    ],
    [
      'dark-navbar-shadow', { 'box-shadow': '0 1px 4px rgb(255 255 255 / 16%)' }
    ]
  ]
})
