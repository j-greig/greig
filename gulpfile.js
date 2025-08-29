
const { PurgeCSS } = require('purgecss')
const fs = require('fs')

// Modern PurgeCSS task to replace deprecated gulp-purifycss
async function purifyCSS() {
  const purgeCSSResults = await new PurgeCSS().purge({
    content: ['_site/**/*.html', 'assets/*.js'],
    css: ['assets/style.css'],
    output: 'assets/',
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  })
  
  // Write purified CSS to file
  purgeCSSResults.forEach(result => {
    fs.writeFileSync('assets/style.purified.css', result.css)
  })
  
  console.log('CSS purified and saved to assets/style.purified.css')
}

exports['purify-css'] = purifyCSS
