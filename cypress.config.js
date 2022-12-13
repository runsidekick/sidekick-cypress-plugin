const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts')(on, config)
    },
    sidekickApiKey: '',
    sidekickApiToken: '',
    sidekickTestModeApiKey: '',
    sidekickTestModeHost: '',
    sidekickTestModePort: 80
  }
})