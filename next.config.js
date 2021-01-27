const path = require('path')

module.exports = {
  target: 'serverless',
  devIndicators: {
    autoPrerender: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}
