import Path from 'path'
import { fileURLToPath } from 'url'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const dirname = Path.dirname(fileURLToPath(import.meta.url))
const node_modules = Path.join(dirname, 'node_modules', '')

export default {
    input: 'src/index.ts',
    output: {
        dir: 'dist/js',
        format: 'es',
        manualChunks: id => {
            if (!id.startsWith(node_modules)) return

            id = id.slice(node_modules.length + 1).split(Path.sep)
            return Path.join('vendor', id[0].startsWith('@') ? id.slice(0, 2).join('/') : id[0])
        },
    },
    plugins: [typescript(), nodeResolve(), commonjs()],
}
