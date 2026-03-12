describe('Settings Page Navigation', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')   // important after cy.session
    cy.document().should('exist')
    cy.url().should('not.include', 'about:blank')
  })

  // Step 1: Navigate to Settings via User Info Modal
  describe('User Info Modal Navigation', () => {
    it('navigates to Settings page from modal', () => {
      cy.get('[data-component-name="UserInfoDropdown.Wrapper.ToggleWrapper"]').click()
      cy.get('[data-component-name="UserInfoDropdown.Wrapper.DropdownWrapper"]').should('be.visible')
      cy.get('[data-component-name="UserInfoDropdown.Wrapper.DropdownWrapper.BorderWrapper.TopButtonsWrapper.Settings.Settings"]').click()
      cy.url().should('include', '/application_settings')
    })
  })

// const settingsTabs = [
//       {
//         name: 'My Settings',
//         selector: '[data-component-name="Sections.MySettings.Title"]',
//         widgets: [
//           { 
//             name: 'Subscriptions', 
//             selector: '[data-component-name="Namespaces.Namespace"]:has([data-component-name="Namespaces.Namespace.Title"]:contains("Subscriptions"))',
//             contentPanel: '[data-component-name="Subscriptions"]'
//           },
//           { 
//             name: 'Landing Page', 
//             selector: '[data-component-name="Namespaces.Namespace"]:has([data-component-name="Namespaces.Namespace.Title"]:contains("Landing Page"))',
//             contentPanel: '[data-component-name="LandingPage"]'
//           },
//         ]
//       },
//     ]

//     settingsPages.forEach(Page => {
//       describe(`${Page.name} - Widgets`, () => {
//         Page.widgets.forEach(widget => {
//           it(`displays and navigates to "${widget.name}" widget`, () => {
//             cy.get(widget.selector).should('be.visible').click()
//             //cy.get(widget.contentPanel).should('be.visible')
//           })
//         })
//       })
//     })
   })