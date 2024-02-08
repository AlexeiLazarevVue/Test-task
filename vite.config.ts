import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path";
import {resolve} from "path";
import alias from "@rollup/plugin-alias";

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), alias({
    entries: [
      {
        find: '@',
        replacement: resolve(projectRootDir, './src')
      }
    ]
  })],

  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
})
