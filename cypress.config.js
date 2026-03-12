const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    
    // Allow Cypress to ignore certificate / network verification
    chromeWebSecurity: false,
    pageLoadTimeout: 120000, // Increase page load timeout to 120 seconds
    setupNodeEvents(on, config) {
      // ENV switch: prod or beta
      if (config.env.ENV === 'prod') {
        config.baseUrl = 'https://admin.appworkco.com'
        config.env.USERNAME = 'ADD_PROD_USERNAME_HERE'
        config.env.PASSWORD = 'ADD_PROD_PASSWORD_HERE'
      } else {
        // Beta
        config.baseUrl = 'https://admin.appworkco-beta.com'
        config.env.USERNAME = 'dasmenadmin@dasmenresidential.com'
        config.env.PASSWORD = 'Amna3418!'
      }

      return config
    },
  },
})
