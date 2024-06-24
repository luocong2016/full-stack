import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/unplugin/unplugin-vue-components
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://www.npmjs.com/package/@vitejs/plugin-vue-jsx
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,

  },

  resolve: {
    // 别名配置
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src')
    },

    // 引入文件的时候，可以忽略掉以下文件后缀
    // extensions: []
  },

  plugins: [
    vue(),
    vueJsx({/* options */ }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
})
