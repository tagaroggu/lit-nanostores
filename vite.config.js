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
            entry: {
                'lit-stores': resolve(__dirname, 'lib/lit-stores.ts'),
                'nanostores': resolve(__dirname, 'lib/nanostores.ts'),
                'preact-signals': resolve(__dirname, 'lib/preact-signals.ts'),
                'vue-reactivity': resolve(__dirname, 'lib/vue-reactivity.ts')
            },
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
        },
        outDir: 'dist'
    },
    plugins: [dts()]
})