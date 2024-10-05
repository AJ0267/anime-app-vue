import './assets/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import ThemeControl from './components/UI/ThemeControl.vue'

const app = createApp(App)

app.component('theme-control', ThemeControl)

app.mount('#app')
