const settingsPage = [
  {
    name: 'My Settings',
    selector: '[data-component-name="Sections.MySettings.Title"]',
    widgets: [
      {
        name: 'Subscriptions',
        panel: '[data-component-name="Namespaces.Namespace.Title"]:contains("Subscriptions")'
      },
      {
        name: 'Landing Page',
        panel: '[data-component-name="Namespaces.Namespace.Title"]:contains("Landing Page")'
      },
    ]
  },
  {
    name: 'Property Settings',
    selector: '[data-component-name="Sections.Property.Title"]',
    tabs: [
      {
        name: 'General',
        selector: '[data-component-name="ModuleSelect.Module"]:contains("General")',
        widgets: [
          {
            name: 'Location',
            panel: '[data-component-name="Namespaces.Namespace.Title"]:contains("Location")'
          },
          {
            name: 'Document',
            panel: '[data-component-name="Namespaces.Namespace.Title"]:contains("Document")'
          },
          {
            name: 'Floor Plans',
            panel: '[data-component-name="Namespaces.Namespace.Title"]:contains("Floor Plans")'
          },
          {
            name: 'API Keys',
            panel: '[data-component-name="Namespaces.Namespace.Title"]:contains("API Keys")'
          },
          {
            name: 'Billing',
            panel: '[data-component-name="Namespaces.Namespace.Title"]:contains("Billing")'
          },
        ]
      },
      {
        name: 'Applications',
        selector: '[data-component-name="ModuleSelect.Module"]:contains("Applications")',
        widgets: [
          {
            name: 'Applications',
            panel: '[data-component-name="Namespaces.Namespace"]:has([data-component-name="Namespaces.Namespace.Title"]:contains("Applications"))'
          },
          {
            name: 'Rental Verifications',
            panel: '[data-component-name="Namespaces.Namespace.Title"]:contains("Rental Verifications")'
          },
          {
            name: 'Saved Applications',
            panel: '[data-component-name="Namespaces.Namespace.Title"]:contains("Saved Applications")'
          },
        ]
      },
      {
        name: 'Payments',
        selector: '[data-component-name="ModuleSelect.Module"]:contains("Payments")',
        widgets: [
          {
            name: 'Payments',
            panel: '[data-component-name="Namespaces.Namespace"]:has([data-component-name="Namespaces.Namespace.Title"]:contains("Payments"))'
          },
        ]
      },
      {
        name: 'Rewards',
        selector: '[data-component-name="ModuleSelect.Module"]:contains("Rewards")',
        widgets: [
          {
            name: 'Rewards',
            panel: '[data-component-name="Namespaces.Namespace"]:has([data-component-name="Namespaces.Namespace.Title"]:contains("Rewards"))'
          },
        ]
      },
      {
        name: 'Maintenance',
        selector: '[data-component-name="ModuleSelect.Module"]:contains("Maintenance")',
        widgets: [
          {
            name: 'Work Orders',
            panel: '[data-component-name="Namespaces.Namespace"]:has([data-component-name="Namespaces.Namespace.Title"]:contains("Work Orders"))'
          },
          {
            name: 'Make Ready',
            panel: '[data-component-name="Namespaces.Namespace"]:has([data-component-name="Namespaces.Namespace.Title"]:contains("Make Ready"))'
          },
        ]
      },
      {
        name: 'Purchase Orders',
        selector: '[data-component-name="ModuleSelect.Module"]:contains("Purchase Orders")',
        widgets: [
          {
            name: 'Approvals',
            panel: '[data-component-name="Namespaces.Namespace"]:has([data-component-name="Namespaces.Namespace.Title"]:contains("Approvals"))'
          },
          {
            name: 'Budget',
            panel: '[data-component-name="Namespaces.Namespace"]:has([data-component-name="Namespaces.Namespace.Title"]:contains("Budget"))'
          },
        ]
      },
    ]
  },
  {
    name: 'System Settings',
    selector: '[data-component-name="Sections.System.Title"]',
    tabs: [
      {
        name: 'Core',
        selector: '[data-component-name="ModuleSelect.Module"]:contains("Core")',
        widgets: [
          {
            name: 'Theme',
            panel: '[data-component-name="Namespaces.Namespace.Title"]:contains("Theme")'
          },
          {
            name: 'OAuth',
            panel: '[data-component-name="Namespaces.Namespace.Title"]:contains("OAuth")'
          },
          {
            name: 'Landing Page',
            panel: '[data-component-name="Namespaces.Namespace.Title"]:contains("Landing Page")'
          },
          {
            name: 'Billing',
            panel: '[data-component-name="Namespaces.Namespace.Title"]:contains("Billing")'
          },
          {
            name: 'Property Groups',
            panel: '[data-component-name="Namespaces.Namespace.Title"]:contains("Property Groups")'
          },
          {
            name: 'Staff',
            panel: '[data-component-name="Namespaces.Namespace.Title"]:contains("Staff")'
          },
          {
            name: 'Jobs',
            panel: '[data-component-name="Namespaces.Namespace.Title"]:contains("Jobs")'
          },
          {
            name: 'Data Uploads',
            panel: '[data-component-name="Namespaces.Namespace.Title"]:contains("Data Uploads")'
          },
        ]
      },
      {
        name: 'Payments',
        selector: '[data-component-name="ModuleSelect.Module"]:contains("Payments")',
        widgets: [
          {
            name: 'Payments',
            panel: '[data-component-name="Namespaces.Namespace"]:has([data-component-name="Namespaces.Namespace.Title"]:contains("Payments"))'
          },
        ]
      },
      {
        name: 'Maintenance',
        selector: '[data-component-name="ModuleSelect.Module"]:contains("Maintenance")',
        widgets: [
          {
            name: 'Work Orders',
            panel: '[data-component-name="Namespaces.Namespace"]:has([data-component-name="Namespaces.Namespace.Title"]:contains("Work Orders"))'
          },
          {
            name: 'Inspections',
            panel: '[data-component-name="Namespaces.Namespace"]:has([data-component-name="Namespaces.Namespace.Title"]:contains("Inspections"))'
          },
          {
            name: 'Techs',
            panel: '[data-component-name="Namespaces.Namespace"]:has([data-component-name="Namespaces.Namespace.Title"]:contains("Techs"))'
          },
          {
            name: 'Make Ready',
            panel: '[data-component-name="Namespaces.Namespace"]:has([data-component-name="Namespaces.Namespace.Title"]:contains("Make Ready"))'
          },
          {
            name: 'Badges',
            panel: '[data-component-name="Namespaces.Namespace"]:has([data-component-name="Namespaces.Namespace.Title"]:contains("Badges"))'
          },
          {
            name: 'Insight Reports',
            panel: '[data-component-name="Namespaces.Namespace"]:has([data-component-name="Namespaces.Namespace.Title"]:contains("Insight Reports"))'
          },
          {
            name: 'Maintenance Categories',
            panel: '[data-component-name="Namespaces.Namespace"]:has([data-component-name="Namespaces.Namespace.Title"]:contains("Maintenance Categories"))'
          },
          {
            name: 'PMS Mappings',
            panel: '[data-component-name="Namespaces.Namespace"]:has([data-component-name="Namespaces.Namespace.Title"]:contains("PMS Mappings"))'
          },
          {
            name: 'Parts',
            panel: '[data-component-name="Namespaces.Namespace"]:has([data-component-name="Namespaces.Namespace.Title"]:contains("Parts"))'
          }
        ]
      },
      {
        name: 'Incident Reports',
        selector: '[data-component-name="ModuleSelect.Module"]:contains("Incident Reports")',
        widgets: [
          {
            name: 'Incident Report Types',
            panel: '[data-component-name="Namespaces.Namespace"]:has([data-component-name="Namespaces.Namespace.Title"]:contains("Incident Report Types"))'
          },
        ]
      },
    ]

  }
]

describe('Settings Page', { testIsolation: false }, () => {

  before(() => {
    cy.login()
    cy.visit('/application_settings')
    cy.document().should('exist')
    cy.get('body').should('be.visible')
    cy.get('#loader-app', { timeout: 15000 }).should('not.be.visible')
  })


  settingsPage.forEach(section => {

    describe(section.name, () => {

      before(() => {
        // Click main section (My Settings / Property Settings)
        cy.get(section.selector)
          .scrollIntoView()
          .should('be.visible')
          .click()
        cy.get('#loader-app', { timeout: 15000 }).should('not.be.visible')
      })


      // CASE 1: Section has direct widgets (My Settings)
      if (section.widgets) {

        section.widgets.forEach(widget => {

          it(`Verify "${widget.name}" widget`, () => {

            cy.contains(
              '[data-component-name="Namespaces.Namespace.Title"]',
              widget.name
            )
              .scrollIntoView()
              .should('exist')
              .should('be.visible')
              .closest('[data-component-name="Namespaces.Namespace"]')
              .click({ force: true })

            // Detect infinite loader
            cy.get('#loader-app', { timeout: 15000 }).should('not.be.visible')

            // Detect blank page
            cy.get('body').should('not.be.empty')

            // Verify widget panel loaded
            cy.get(widget.panel)
              .should('exist')
              .should('be.visible')

            cy.log(`Widget verified: ${widget.name}`)

          })

        })

      }


      // CASE 2: Section has tabs → widgets (Property Settings)
      if (section.tabs) {

        section.tabs.forEach(tab => {

          describe(`${tab.name} Tab`, () => {

            before(() => {
              cy.get(tab.selector)
                .scrollIntoView()
                .should('be.visible')
                .click()
                .then(() => cy.log(`Opened tab: ${tab.name}`))
              cy.get('#loader-app', { timeout: 15000 }).should('not.be.visible')
            })


            tab.widgets.forEach(widget => {

              it(`Verify "${widget.name}" widget`, () => {

                // If testing PMS Mappings, refresh page to avoid unmount/mount crash
                if (widget.name === 'PMS Mappings') {
                  cy.reload()
                  cy.get('#loader-app', { timeout: 15000 }).should('not.be.visible')
                  // Re-enter section and tab contexts
                  cy.get(section.selector).scrollIntoView().should('be.visible').click()
                  cy.get('#loader-app', { timeout: 15000 }).should('not.be.visible')
                  cy.get(tab.selector).scrollIntoView().should('be.visible').click()
                  cy.get('#loader-app', { timeout: 15000 }).should('not.be.visible')
                }

                cy.contains(
                  '[data-component-name="Namespaces.Namespace.Title"]',
                  widget.name
                )
                  .scrollIntoView()
                  .should('exist')
                  .should('be.visible')
                  .closest('[data-component-name="Namespaces.Namespace"]')
                  .wait(2000)
                  .click({ force: true })

                // Detect infinite loader
                cy.get('#loader-app', { timeout: 15000 })
                  .should('have.class', 'd-none')

                // Detect blank page
                cy.get('body').should('not.be.empty')

                // Verify widget panel loaded
                cy.get(widget.panel)
                  .should('exist')
                  .should('be.visible')

                cy.log(`Widget verified: ${widget.name}`)

              })

            })

          })

        })

      }

    })

  })


  //   // Screenshot on failure
  //   afterEach(function () {
  //     if (this.currentTest.state === 'failed') {
  //       const testName = this.currentTest.title.replace(/ /g, '_')
  //       const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
  //       cy.screenshot(`failure-${testName}-${timestamp}`)
  //     }
  //   })

})
