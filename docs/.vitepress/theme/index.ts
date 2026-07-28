import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Changelog from './components/Changelog.vue'
import HomePage from './components/HomePage.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Changelog', Changelog)
    app.component('HomePage', HomePage)
  }
} satisfies Theme
