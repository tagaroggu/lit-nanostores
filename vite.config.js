import { defineConfig } from 'vitest/config';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
    test: {
        includeSource: ['lib/**/*.{ts,js}']
    },
    define: {
        'import.meta.vitest': 'undefined'
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/lit-stores.ts'),
            name: 'litStores',
            fileName: 'lit-stores'
        },
        rollupOptions: {
            external: ['@vue/reactivity', '@preact/signals-core', 'nanostores', 'lit'],
            output: {
                globals: {
                    'lit': 'Lit',
                    '@vue/reactivity': 'Vue', // Todo: figure this out
                    '@preact/signals-core': 'PreactSignals' // Todo: figure this out
                }
            }
        }
    },
    plugins: [dts()]
})