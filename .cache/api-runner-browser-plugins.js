module.exports = [{
      plugin: require('../node_modules/@chakra-ui/gatsby-plugin/gatsby-browser.js'),
      options: {"plugins":[],"resetCSS":true,"isUsingColorMode":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
