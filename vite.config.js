import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            routes: path.resolve(__dirname, './src/routes'),
            views: path.resolve(__dirname, './src/views'),
            styles: path.resolve(__dirname, './src/styles'),
            components: path.resolve(__dirname, './src/components'),
            assets: path.resolve(__dirname, './src/assets'),
        },
    },
});
