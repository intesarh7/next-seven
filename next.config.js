const path = require('path')

module.exports = {
    trailingSlash: true,
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
      ) {
        return {
          '/': { page: '/' },
        }
      },

      images: {
        loader: 'imgix',
        path: 'http://localhost:3000/public/',
      },
      sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
      plugins: [
        [
            '@fullhuman/postcss-purgecss',
            {
                content: [
                    './pages/**/*.{js,jsx,ts,tsx}',
                    './components/**/*.{js,jsx,ts,tsx}'
                ],
                defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
            }
        ],
        'postcss-preset-env'
    ]
      
}
