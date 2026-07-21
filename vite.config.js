import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE FOR DEPLOYMENT:
// If you deploy to GitHub Pages at https://<username>.github.io/<repo-name>/
// set `base` below to '/<repo-name>/'
// If you deploy to a custom domain or to https://<username>.github.io/ (user/org page),
// set `base` to '/'
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // <-- CHANGE THIS to match your GitHub repo name
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
