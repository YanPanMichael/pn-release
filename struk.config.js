/**
 * struk
 */
module.exports = ({ pkg } = {}) => {
  return {
    // 输入
    input: 'lib/pnpm-release.ts',
    // 输出
    output: {
      // 目录
      directory: 'dist',
      name: 'pn-release',
      // 格式
      format: ['cjs'],
    },
    formatConfig: {
      cjs: {
        external: ['qk-release'],
        isolateDep: true,
      },
    },
    templateBase: 'examples/'
  }
}
