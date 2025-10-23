import { combinePresetAndAppleSplashScreens, defineConfig, minimal2023Preset } from '@vite-pwa/assets-generator/config'

export default defineConfig({
  headLinkOptions: { preset: '2023' },
  images: ['./public/images/chat-bot.png'],
  preset: combinePresetAndAppleSplashScreens(minimal2023Preset),
})
