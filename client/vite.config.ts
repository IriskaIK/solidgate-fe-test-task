import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
    base : "/solidgate-fe-test-task",
    plugins: [react(), tsconfigPaths()],
    css: {
        modules: {
            localsConvention: "camelCaseOnly",
        },
    },
})
