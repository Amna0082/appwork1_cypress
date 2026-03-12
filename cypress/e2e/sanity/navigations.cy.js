// const modules = [
//   { selector: '[href="/applications"]', path: '/applications' },
//   { selector: '[href="/incident_reports"]', path: '/incident_reports' },
//   { selector: '[href="/approvals"]', path: '/approvals' },
//   { selector: '[href="/payments"]', path: '/payments' },
//   { selector: '[href="/payments_analytics"]', path: '/payments_analytics' },
//   { selector: '[href="/letters"]', path: '/letters' },
//   { selector: '[href="/tenants"]', path: '/tenants' },
//   { selector: '[href="/mailings"]', path: '/mailings' },
//   { selector: '[href="/units"]', path: '/units' },
//   { selector: '.dSmZyv', path: '/redemptions' },
//   { selector: '[href="/orders"]', path: '/orders' },
//   { selector: '[href="/inspections"]', path: '/inspections' },
//   { selector: '[href="/make_ready"]', path: '/make_ready' },
//   { selector: '[href="/maintenance_insight_reports"]', path: '/maintenance_insight_reports' },
//   { selector: '[href="/techs"]', path: '/techs' },
//   { selector: '[href="/maintenance_analytics"]', path: '/maintenance_analytics' },
//   { selector: '[href="/maintenance_reports"]', path: '/maintenance_reports' },
//   { selector: '[href="/vendors"]', path: '/vendors' },
//   { selector: '[href="/refrigerant_logs"]', path: '/refrigerant_logs' },
//   { selector: '[href="https://appworkco.com/maintenance-academy"]', path: '/maintenance-academy' },
// ]

// describe('Sanity - Main Module Navigation', () => {
//   beforeEach(() => {
//     cy.login()
//     cy.visit('/')   // important after cy.session
//   })

//   modules.forEach(({ selector, path }) => {
//     it(`redirects to ${path}`, () => {
//       cy.get(selector).click()
//       cy.url().should('include', path)
//     })
//   })
// })
// One list: selector, path, and for in-app modules body (appId) + header (text or headerSelector). external = link only.
const modules = [
  { selector: '[href="/applications"]', path: '/applications', appId: '#application-forms', header: 'Applications' },
  { selector: '[href="/incident_reports"]', path: '/incident_reports', appId: '#incident-reports-app', header: 'Incident' },
  { selector: '[href="/approvals"]', path: '/approvals', appId: '#approvals-app', header: 'Purchase Orders' },
  { selector: '[href="/payments"]', path: '/payments', appId: '#payments-app', header: 'Payments' },
  { selector: '[href="/payments_analytics"]', path: '/payments_analytics', appId: '#payment-analytics-app', header: 'Payment Analytics' },
  { selector: '[href="/letters"]', path: '/letters', appId: '#letter-app', header: 'Letters' },
  { selector: '[href="/tenants"]', path: '/tenants', appId: '#tenants-app', header: 'Residents' },
  { selector: '[href="/mailings"]', path: '/mailings', appId: '#mailing-tool-app', header: 'Bulk Emails' },
  { selector: '[href="/units"]', path: '/units', appId: '#units-app', header: 'Units' },
  { selector: '[href="/redemptions"]', path: '/redemptions', appId: '#redemptions-app', header: 'Rewards' },
  { selector: '[href="/orders"]', path: '/orders', appId: '#work-orders-app', headerSelector: '[data-component-name="TabsFilter.AllTabButton.Text"]' },
  { selector: '[href="/inspections"]', path: '/inspections', appId: '#inspections-app', header: 'Inspections' },
  { selector: '[href="/make_ready"]', path: '/make_ready', appId: '#cards-app', header: 'Make Ready' },
  { selector: '[href="/maintenance_insight_reports"]', path: '/maintenance_insight_reports', appId: '#maintenance-insight-app', header: 'Insight Reports' },
  { selector: '[href="/techs"]', path: '/techs', appId: '#techs-app', header: 'Technicians' },
  { selector: '[href="/maintenance_analytics"]', path: '/maintenance_analytics', appId: '#analytics-app', header: 'Analytics' },
  { selector: '[href="/maintenance_reports"]', path: '/maintenance_reports', appId: '#reports-app', header: 'Reports' },
  { selector: '[href="/vendors"]', path: '/vendors', appId: '#vendors-app', header: 'Vendors' },
  { selector: '[href="/refrigerant_logs"]', path: '/refrigerant_logs', appId: '#refrigerant_logs_app', header: 'Refrigerant' },
  { selector: '[href="https://appworkco.com/maintenance-academy"]', path: '/maintenance-academy', external: true },
]

describe('Main Module Navigation & Content', { testIsolation: false }, () => {
  before(() => {
    cy.login()
    cy.visit('/')
  })

  modules.forEach(({ selector, path, appId, header, headerSelector, external }) => {
    it(`${path}: navigates, URL correct, page loads (no blank)`, () => {
      if (external) {
        cy.get(selector).should('have.attr', 'href').and('include', 'maintenance-academy')
        cy.get(selector).should('have.attr', 'target', '_blank')
        return
      }
      cy.get(selector).click()
      cy.url().should('include', path)
      cy.get(appId, { timeout: 20000 }).should('be.visible')
      cy.get(appId).children().should('have.length.greaterThan', 0)
      if (headerSelector) {
        cy.get(headerSelector, { timeout: 15000 }).should('be.visible')
      } else {
        cy.contains(header, { timeout: 15000, matchCase: false }).should('be.visible')
      }
    })
  })
})  
