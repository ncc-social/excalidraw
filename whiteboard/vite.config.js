import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import proxyOptions from './proxyOptions';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
    define: {
        "process.env.IS_PREACT": JSON.stringify("true"),
    },
	server: {
		port: 8080,
		proxy: proxyOptions
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	build: {
		outDir: '../excalidraw/public/whiteboard',
		emptyOutDir: true,
		target: 'es2015',
	},
});
