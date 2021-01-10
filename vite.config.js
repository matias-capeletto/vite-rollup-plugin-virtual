import virtual from '@rollup/plugin-virtual'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    {
      enforce: 'pre', ...virtual({
        batman: `export default 'na na na na na'`,
        'src/robin.js': `export default 'batmannnnn'`
      })
    },
  ]
}
