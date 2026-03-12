// Global exception handler for expected errors
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('500') || err.message.includes('Request failed')) {
    return false
  }
})

// ==================== SELECTORS ====================
const SELECTORS = {
  // Navigation
  newWorkOrderBtn: '[data-testid="new-work-order-button"]',

  // Property Filter
  propertyFilterHeader: '[data-component-name="MultiPropertySelector.Wrapper.Header"]',
  propertyFilterDropdown: '[data-component-name="MultiPropertySelector.Wrapper.DropdownWrapper.BorderWrapper"]',
  propertySearchInput: '[data-component-name="MultiPropertySelector.Wrapper.Header.SearchWrapper"]',
  propertySearchInputField: '[data-component-name="MultiPropertySelector.Wrapper.Header.SearchWrapper"] input',
  propertyListItem: '[data-component-name="MultiPropertySelector.Wrapper.DropdownWrapper.BorderWrapper.ListWrapper.ListWrapper.Property"]',
  propertyCheckbox: '[data-component-name="MultiPropertySelector.Wrapper.DropdownWrapper.BorderWrapper.ListWrapper.ListWrapper.Property.Checkbox"]',
  propertyButtonsList: '[data-component-name="MultiPropertySelector.Wrapper.DropdownWrapper.BorderWrapper.ButtonsWrapper.ListWrapper.ButtonsWrapper"]',
  propertyButton: '[data-component-name="MultiPropertySelector.Wrapper.DropdownWrapper.BorderWrapper.ButtonsWrapper.ListWrapper.ButtonsWrapper.PropertyButton"]',
  clearAllBtn: '[data-component-name="MultiPropertySelector.Wrapper.DropdownWrapper.BorderWrapper.ClearAllHeader.ClearAll.Button"]',

// Date Filter
  dateFilterHeader: '[data-component-name="DateRangePicker.Wrapper.Header"]',
  datePickerLastWeek: '[data-component-name="DatePickerButtons.LastWeek"]',
  datePickerLastMonth: '[data-component-name="DatePickerButtons.LastMonth"]',
  datePickerLastQuarter: '[data-component-name="DatePickerButtons.LastQuarter"]',
  
  // Tabs Filter
  allTabButton: '[data-component-name="TabsFilter.AllTabButton.Text"]',
  tabItem: '[data-component-name="TabsFilter.Tabs.Text"]',

  // Search
  pageSearchInput: '[data-component-name="PageSearchInput.InputWrapper.LeftSideWrapper.Input"]',
  searchDropdown: '[data-component-name="PageSearchInput.DropdownWrapper.BorderWrapper"]',
  searchResultRow: '[data-component-name="PageSearchInput.DropdownWrapper.BorderWrapper.BodyWrapper.Body.Row"]',
  workOrderRow: '[data-component-name="WorkOrderTableRow.Wrapper"]',

  // Modal - Work Order Form
  modalTitle: '[data-component-name="ModalHeader.Title.Title"]',
  descriptionInput: '[data-component-name="DescriptionInput.InputWrapper"]',
  categorySelector: '[data-component-name="CategoryInput.Selector"]',
  propertySearchField: '[data-component-name="Dropdown.Selector.LeftSide.Wrapper.SearchInput"]',
  dropdownBody: '[data-component-name="Dropdown.Body"]',
  unitDropdown: '[data-component-name="UnitDropdown"]',
  unitWorkOrderOption: '[data-component-name="MultipleOptionsButton.Option.Text"]',
  unitList: '[data-component-name="MultiResidentSelector.Body"]',
  unitItem: '[data-component-name="MultiResidentSelector.Body.Unit"]',
  prioritySelector: '[data-component-name="PriorityInput.Selector"]',
  priorityBody: '[data-component-name="PriorityInput.Body"]',
  priorityOption: '[data-component-name="PriorityInput.Body.Option"]',

  // Modal - Assign & Schedule
  assignBtn: '[data-component-name="AssignTechButton.Button"]',
  assignSidebar: '[data-component-name="AssignSidebar.Wrapper"]',
  assignTechTab: '[data-component-name="AssignSidebar.Wrapper.Tabs.Tech"]',
  assignVendorTab: '[data-component-name="AssignSidebar.Wrapper.Tabs.Vendor"]',
  searchInput: '[data-component-name="AssignSidebar.Wrapper.Search.SearchInput"]',
  workerRow: '[data-component-name="AssignWorkerRow.Wrapper"]',
  assignWorkerBtn: '[data-component-name="AssignWorkerRow.Wrapper.AssignButton.Button"]',
  fileUploadInput: '[data-component-name="AttachmentsInput.UploadButton.UploadButton-input"]',
  scheduleBtn: '[data-component-name="ScheduleOrderButton.Button.Button"]',
  calendar: '[data-component-name="Calendar.Calendar"]',
  calendarDay: '[data-component-name="Calendar.Calendar.Dates.Day"]',
  createBtn: '[data-component-name="CreateOrder.Button.Button"]',

  // Modal - Success
  successTitle: '[data-component-name="ModalHeader.TitleWrapper.Title"]',
  viewBtn: '[data-component-name="ModalBody.Buttons.View"]',

  // Notes
  senderName: '[data-component-name="Note.NoteBody.TopWrapper.SenderName"]',
  noteInput: '[data-component-name="NoteInput.Wrapper.Wrapper.Input"]',
  sendIcon: '[data-component-name="NoteInput.Wrapper.Wrapper.RightSide.SendIcon"]',

  // Export & Subscribe
  exportTrigger: '[data-component-name="ExportMakeReadyCards.RelativeWrapper.DropdownWrapper.Wrapper"]',
  exportPdfOption: '[data-component-name="ExportMakeReadyCards.RelativeWrapper.DropdownWrapper.Wrapper.Pdf"]',
  exportCsvOption: '[data-component-name="ExportMakeReadyCards.RelativeWrapper.DropdownWrapper.Wrapper.Csv"]',
  exportSubscribeOption: '[data-component-name="ExportMakeReadyCards.RelativeWrapper.DropdownWrapper.Wrapper.Subscribe"]',
  subscriptionFormatDropdown: '[data-component-name="SubscriptionHeaderFilter.Wrapper"]',
  subscriptionFormatHeader: '[data-component-name="SubscriptionHeaderFilter.Wrapper.Header"]',
  subscriptionFormatBorder: '[data-component-name="SubscriptionHeaderFilter.Wrapper.DropdownWrapper.BorderWrapper"]',
  subscriptionTimeHour: '[data-component-name="Settings.TimeSelector.HourInput"]',
  subscriptionTimeMinute: '[data-component-name="Settings.TimeSelector.MinuteInput"]',
  subscriptionAmPmLeft: '[data-component-name="TextSwitchButton.LeftButton"]',
  subscriptionSubmit: '[data-component-name="Settings.Submit.Button"]',

  // Common
  loader: '#loader-app'
}

// Export & Subscribe — shared by Export and Subscription tests
const EXPORT = {
  trigger: '[data-component-name="ExportMakeReadyCards.RelativeWrapper.TooltipWrapper.SelectorWrapper.Selector"]',
  pdf: '[data-component-name="ExportMakeReadyCards.RelativeWrapper.DropdownWrapper.Wrapper.Pdf.Text"]',
  csv: '[data-component-name="ExportMakeReadyCards.RelativeWrapper.DropdownWrapper.Wrapper.Csv.Text"]',
  subscribe: '[data-component-name="ExportMakeReadyCards.RelativeWrapper.DropdownWrapper.Wrapper.Subscribe.Text"]',
  timeout: 10000
}

const ensureWorkOrdersExist = () => {
  cy.get(SELECTORS.workOrderRow, { timeout: 15000 }).should('have.length.greaterThan', 0)
  cy.log('Work orders exist on page; export option should be enabled')
}

const openExportMenu = () => {
  cy.get(EXPORT.trigger, { timeout: 15000 }).first().scrollIntoView().should('be.visible').click({ force: true })
}

// ==================== UTILITY FUNCTIONS ====================

/**
 * Extract count from tab text (e.g., "Open (5)" -> 5)
 * @param {string} text - Tab text containing count
 * @returns {number} - Extracted count or 0
 */
const extractTabCount = (text) => {
  if (!text) return 0
  const match = text.match(/\((\d+)\)/)
  return match ? parseInt(match[1]) : 0
}

/**
 * Select a random item from a list with retries
 * @param {string} selector - CSS selector for items
 * @param {string} actionContext - Context for logging
 */
const selectRandomItem = (selector, actionContext = 'item') => {
  cy.get(selector, { timeout: 15000 })
    .should('have.length.greaterThan', 0)
    .then(($items) => {
      const count = $items.length;
      if (count === 0) throw new Error(`No ${actionContext} available!`);
      
      const randomIndex = Math.floor(Math.random() * count);
      const selectedText = $items[randomIndex].innerText.trim();
      cy.log(`Selected ${actionContext}: ${selectedText}`)
      cy.wrap($items[randomIndex]).click({ force: true })
    })
}

/**
 * Fill work order description
 * @param {string} description - Description text
 */
const fillDescription = (description) => {
  cy.get(SELECTORS.descriptionInput)
    .should('be.visible')
    .type(description)
}

/**
 * Verify category is auto-selected
 */
const verifyCategorySelected = () => {
  cy.get(SELECTORS.categorySelector, { timeout: 10000 })
    .invoke('text')
    .should('not.be.empty')
}

/**
 * Select a property from dropdown
 * @param {string} searchTerm - Search term for property
 */
const selectProperty = (searchTerm = 'a') => {
  cy.get(SELECTORS.propertySearchField)
    .click()
    .type(searchTerm);
  
  cy.get(SELECTORS.dropdownBody, { timeout: 10000 })
    .then(($options) => {
      const randomIndex = Math.floor(Math.random() * $options.length)
      cy.wrap($options[randomIndex]).click()
    })
}

/**
 * Select unit from dropdown
 */
const selectUnit = () => {
  cy.get(SELECTORS.unitDropdown).click()
  cy.contains(SELECTORS.unitWorkOrderOption, 'Unit work order')
    .click({ force: true })
  
  cy.get(SELECTORS.unitList, { timeout: 10000 }).should('exist')
  selectRandomItem(SELECTORS.unitItem, 'unit')
  cy.get(SELECTORS.unitDropdown).click() // Close dropdown
}

/**
 * Select priority from dropdown
 */
const selectPriority = () => {
  cy.get(SELECTORS.prioritySelector)
    .should('be.visible')
    .invoke('text')
    .then((autoPriority) => {
      expect(autoPriority.trim()).to.not.be.empty
      cy.log('Auto-selected priority:', autoPriority.trim())
    })
  
  cy.get(SELECTORS.prioritySelector)
    .should('be.visible')
    .click()
  
  cy.get(SELECTORS.priorityBody, { timeout: 10000 }).should('exist')
  
  cy.get(SELECTORS.priorityOption)
    .should('have.length.greaterThan', 0)
    .then(($options) => {
      const randomIndex = Math.floor(Math.random() * $options.length)
      const selectedPriority = $options[randomIndex].innerText.trim()
      cy.log('Manually selected priority:', selectedPriority)
      cy.wrap($options[randomIndex]).click({ force: true })
      
      cy.get(SELECTORS.prioritySelector)
        .invoke('text')
        .should('contain', selectedPriority)
    })
}

/**
 * Assign work order to technician or vendor
 * @param {string} assignType - 'technician' or 'vendor'
 */
const assignWorkOrder = (assignType = 'technician') => {
  cy.get(SELECTORS.assignBtn).click()
  cy.get(SELECTORS.assignSidebar)
    .should('be.visible')
    .and('contain.text', 'Assign Work Order')
  
  const tabSelector = assignType === 'technician' 
    ? SELECTORS.assignTechTab 
    : SELECTORS.assignVendorTab
  
  cy.get(tabSelector).click()
  cy.get(SELECTORS.searchInput).clear()
  
  const context = assignType === 'technician' ? 'technician' : 'vendor'
  selectRandomItem(SELECTORS.workerRow, context)
  
  cy.get(SELECTORS.workerRow)
    .should('have.length.greaterThan', 0)
    .then(($workers) => {
      const randomIndex = Math.floor(Math.random() * $workers.length)
      cy.wrap($workers[randomIndex])
        .trigger('mouseover')
        .find(SELECTORS.assignWorkerBtn)
        .click({ force: true })
    })
}

/**
 * Upload attachments
 * @param {array} files - Array of file paths
 */
const uploadAttachments = (files = ['iimage6.png', 'image7.png', 'pdffile.pdf']) => {
  cy.get(SELECTORS.fileUploadInput).attachFile(files)
  cy.get(SELECTORS.loader, { timeout: 15000 }).should('not.be.visible')
  cy.wait(2000)
}

/**
 * Schedule work order with random date
 */
const scheduleWorkOrder = () => {
  cy.get(SELECTORS.scheduleBtn)
    .scrollIntoView()
    .should('be.visible')
    .click({ force: true })

  cy.get(SELECTORS.loader, { timeout: 5000 }).should('not.be.visible')
  cy.wait(500)

  cy.get(SELECTORS.calendar, { timeout: 15000 })
    .scrollIntoView()
    .should('be.visible')

  cy.get(SELECTORS.calendarDay, { timeout: 10000 })
    .should('have.length.greaterThan', 0)
    .then(($days) => {
      const randomIndex = Math.floor(Math.random() * $days.length)
      cy.wrap($days[randomIndex]).click({ force: true })
    })
}

/**
 * Create work order and verify success
 */
const createAndVerifyWorkOrder = () => {
  cy.get(SELECTORS.createBtn).scrollIntoView().click({ force: true })
  
  cy.get(SELECTORS.successTitle, { timeout: 15000 })
    .should('be.visible')
    .and('contain.text', 'Work Order Created')
}

/**
 * View created work order and add comment
 */
const viewAndAddComment = () => {
  cy.get(SELECTORS.viewBtn)
    .should('be.visible')
    .click()
  
  cy.wait(3000)
  
  // Wait for AI/Weather comments (optional)
  cy.get(SELECTORS.senderName, { timeout: 30000 })
    .should('exist')
    .then(($names) => {
      const combinedText = $names.text()
      if (combinedText.includes('AppWork AI - BETA') || combinedText.includes('AppWork Weather - BETA')) {
        cy.log('System comment found:', combinedText)
      }
    })
  
  // Add new comment
  const commentText = `QA Comment - ${Date.now()}`
  cy.get(SELECTORS.noteInput)
    .should('be.visible')
    .type(`${commentText}{enter}`)
  
  cy.get(SELECTORS.sendIcon).click({ force: true })
  cy.contains(commentText, { timeout: 15000 }).should('be.visible')
}

/**
 * Print work order from the open work order modal
 */
const printWorkOrder = () => {
  cy.get('[data-component-name="TopButtons.PrintButton"]', { timeout: 10000 })
    .should('be.visible')
    .click()
  cy.wait(1500)
}

/**
 * Cancel work order: open cancel modal, submit reason, confirm.
 * Then close the work order modal and wait for list to load.
 */
const cancelWorkOrderAndCloseModals = () => {
  // Wait for any loading (e.g. from print) to finish before opening cancel modal
  cy.get(SELECTORS.loader, { timeout: 15000 }).should('not.be.visible')

  // Open cancel modal and submit
  cy.get('[data-component-name="TopButtons.CancelButton"]').should('be.visible').click()
  cy.get('[data-component-name="ReasonInput.Input"]', { timeout: 10000 })
    .filter(':visible')
    .first()
    .should('be.visible')
    .clear({ force: true })
    .type('Test cancel reason', { force: true })
  cy.get('[data-component-name="ModalFooter.DoneButton.Button"]').first().click({ force: true })
  cy.wait(500)

  // Close work order modal (cancel modal already closed)
  cy.get('[data-component-name="TopButtons.CloseButton"]').filter(':visible').click()
  cy.get(SELECTORS.loader, { timeout: 15000 }).should('not.be.visible')
}

/***
 * Switch to Canceled tab and verify the work order appears and tab count is updated
 */
const verifyWorkOrderOnCanceledTab = () => {
  // Wait for any post-close loading to finish before interacting with tabs
  cy.get(SELECTORS.loader, { timeout: 15000 }).should('not.be.visible')

  cy.contains(SELECTORS.tabItem, 'Canceled').click()
  cy.get(SELECTORS.loader, { timeout: 15000 }).should('not.be.visible')
  cy.get(SELECTORS.workOrderRow, { timeout: 10000 }).should('have.length.greaterThan', 0)

  cy.contains(SELECTORS.tabItem, 'Canceled').invoke('text').then((text) => {
    const match = text.match(/Canceled\s*(\d+)/)
    const count = match ? parseInt(match[1], 10) : 0
    expect(count).to.be.greaterThan(0)
  })
}

/**
 * Mark vendor work order as complete: open complete sidebar, add completion notes, submit.
 * Then verify work order status changed from assigned to completed.
 */
const markWorkOrderCompleteAndVerifyStatus = () => {
  cy.get(SELECTORS.loader, { timeout: 15000 }).should('not.be.visible')

  // Open "Mark as complete" side panel
  cy.get('[data-component-name="TitleContainer.MarkCompleteVendor"]', { timeout: 10000 })
    .should('be.visible')
    .click()

  // Wait for complete sidebar and add completion notes
  cy.get('[data-component-name="CompleteSidebar.Wrapper.InputWrapper"]', { timeout: 10000 })
    .should('be.visible')
    .clear()
    .type('Work completed as requested.')

  // Submit completion
  cy.get('[data-component-name="CompleteSidebar.Wrapper.CompleteOrder.Button"]').click()

  // Wait for sidebar to close and data to refresh
  cy.get('[data-component-name="CompleteSidebar.Wrapper"]', { timeout: 10000 }).should('not.exist')
  cy.get(SELECTORS.loader, { timeout: 15000 }).should('not.be.visible')

  // Verify status changed to Completed (Mark as complete button only shows for assigned+vendor, so it should be gone; status should show Completed)
  cy.get('[data-component-name="TitleContainer.MarkCompleteVendor"]').should('not.exist')
  cy.contains('Completed').should('be.visible')
}

/**
 * Close work order modal, switch to Completed tab, verify work order appears and completed count increased.
 * Requires alias 'completedCountBefore' to be set before completion.
 */
const closeWorkOrderModalAndVerifyOnCompletedTab = () => {
  cy.get('[data-component-name="TopButtons.CloseButton"]').filter(':visible').click()
  cy.get(SELECTORS.loader, { timeout: 15000 }).should('not.be.visible')

  cy.contains(SELECTORS.tabItem, 'Completed').click()
  cy.get(SELECTORS.loader, { timeout: 15000 }).should('not.be.visible')
  cy.get(SELECTORS.workOrderRow, { timeout: 10000 }).should('have.length.greaterThan', 0)

  cy.get('@completedCountBefore').then((completedCountBefore) => {
    cy.contains(SELECTORS.tabItem, 'Completed').invoke('text').then((text) => {
      const match = text.match(/Completed\s*(\d+)/)
      const afterCount = match ? parseInt(match[1], 10) : 0
      expect(afterCount).to.be.greaterThan(completedCountBefore)
    })
  })
}


describe('Work Orders Sanity Tests',{ testIsolation: false }, () => {
  before(() => {
    cy.login()
    cy.visit('/orders')
    cy.document().should('exist')
    cy.get('body').should('be.visible')
    cy.viewport(1440, 900)
  })

  beforeEach(() => {
    cy.viewport(1440, 900)
    cy.get('body').click(0, 0)
    cy.wait(500)
  })

//   describe('Property Filter', () => {
//     it('Should filter properties - select, verify, clear, and select all', () => {
//       // Open property filter dropdown
//       cy.get(SELECTORS.propertyFilterHeader).click()
//       cy.get(SELECTORS.propertyFilterDropdown).should('be.visible')

//       // Check if tooltip exists (properties already selected)
//       cy.get('body').then(($body) => {
//         if ($body.find('[data-component-name="MultiPropertySelector.Wrapper.Header.SelectedPropertiesTooltip"]').length > 0) {
//           cy.get('[data-component-name="MultiPropertySelector.Wrapper.Header.SelectedPropertiesTooltip"]')
//             .should('be.visible')
//         }
//       })

//       // Clear all properties
//       cy.get(SELECTORS.clearAllBtn).click()

//       // Search for property
//       cy.get(SELECTORS.propertySearchInput).type('a')

//       // Select first property
//       cy.get(SELECTORS.propertyListItem).first().click()
//       cy.get(SELECTORS.propertyCheckbox).first().should('be.visible')

//       // Verify selected property appears in header
//       cy.get(SELECTORS.propertyButtonsList).should('be.visible')
//       cy.get(SELECTORS.propertyButton)
//         .should('exist')
//         .and('have.length.at.least', 1)

//       // Close dropdown
//       cy.get('body').click(0, 0)

//       // Re-open and clear all
//       cy.get(SELECTORS.propertyFilterHeader).click()
//       cy.get(SELECTORS.propertySearchInputField).clear()
//       cy.get(SELECTORS.clearAllBtn).click()

//       // Verify button changed to "Select all"
//       cy.get(SELECTORS.clearAllBtn)
//         .should('contain.text', 'Select all')
//         .click()

//       cy.get('body').click(0, 0)
//     })
//   })


//   describe('Date Filter', () => {
//     it('Applies last week date filter and validates tab counts update', () => {
//       const beforeData = {}
//       const afterData = {}

//       // Step 1: Capture ALL tab counts BEFORE filter
//       cy.get(SELECTORS.allTabButton)
//         .invoke('text')
//         .then((text) => {
//           beforeData.allCount = extractTabCount(text)
//           cy.log(Before Filter - All Tab Count: ${beforeData.allCount})
//         })

//       cy.get(SELECTORS.tabItem)
//         .each(($tab) => {
//           const tabText = $tab.text()
//           const tabName = tabText.split(' ')[0] // Extract tab name
//           const count = extractTabCount(tabText)
//           beforeData[tabName] = count
//           cy.log(Before Filter - ${tabName} Count: ${count})
//         })

//       // Step 2: Apply date filter (Last Week)
//       cy.get(SELECTORS.dateFilterHeader)
//         .should('be.visible')
//         .click()
      
//       cy.get(SELECTORS.datePickerLastWeek)
//         .should('be.visible')
//         .click()
      
//       cy.get('body').click(0, 0) // Close calendar/dropdown
//       cy.wait(2000) // Wait for data to reload

//       // Step 3: Capture tab counts AFTER filter
//       cy.get(SELECTORS.allTabButton)
//         .invoke('text')
//         .then((text) => {
//           afterData.allCount = extractTabCount(text)
//           cy.log(After Filter - All Tab Count: ${afterData.allCount})
          
//           // Validate change
//           if (beforeData.allCount !== afterData.allCount) {
//             cy.log(✓ All Tab Count Changed: ${beforeData.allCount} → ${afterData.allCount})
//           } else {
//             cy.log(⚠ All Tab Count Did NOT Change: ${beforeData.allCount})
//           }
//         })

//       cy.get(SELECTORS.tabItem)
//         .each(($tab) => {
//           const tabText = $tab.text()
//           const tabName = tabText.split(' ')[0] // Extract tab name
//           const count = extractTabCount(tabText)
//           afterData[tabName] = count
          
//           const beforeCount = beforeData[tabName] || 0
//           cy.log(After Filter - ${tabName} Count: ${count} (Before: ${beforeCount}))
          
//           // Log if count changed
//           if (beforeCount !== count) {
//             cy.log(✓ ${tabName} Tab Count Changed: ${beforeCount} → ${count})
//           } else {
//             cy.log(⚠ ${tabName} Tab Count Did NOT Change: ${count})
//           }
//         })
//     })

//     it('Searches for work orders and verifies results appear', () => {
//       // Step 1: Click on search input
//       cy.get(SELECTORS.pageSearchInput)
//         .should('be.visible')
//         .click()
      
//       // Step 2: Type search term "ac"
//       cy.get(SELECTORS.pageSearchInput)
//         .type('ac issues')
      
//       // Step 3: Wait for suggestion dropdown to appear
//       cy.get(SELECTORS.searchDropdown)
//         .should('be.visible', { timeout: 10000 })
      
//       cy.log('Search dropdown appeared with suggestions')
      
//       // Step 4: Click on the first search result
//       cy.get(SELECTORS.searchResultRow)
//         .should('have.length.greaterThan', 0)
//         .first()
//         .click()
      
//       cy.log('Selected first search result')
      
//       // Step 5: Click outside to close any open dropdowns
//       cy.get('body').click(0, 0)
      
//       cy.wait(2000) // Wait for page to update with search results
      
//       // Step 6: Verify work order data appears on the page
//       cy.get(SELECTORS.workOrderRow)
//         .should('exist')
//         .and('be.visible', { timeout: 10000 })
      
//       cy.log('✓ Work order results displayed on the page after search')
      
//       // Additional verification - check that at least one work order row is visible
//       cy.get(SELECTORS.workOrderRow)
//         .should('have.length.greaterThan', 0)
//         .then(($rows) => {
//           cy.log(Found ${$rows.length} work order row(s) matching search)
//         })
//     })
//   })

// it('Filters Assigned tab by Assigned To → Technicians and verifies results', () => {

//     const assignedTabSelector = '[data-component-name="TabsFilter.Tabs.Text"]'
//     const filterHeader = '[data-component-name="WorkOrdersFilters.Wrapper.HeaderWrapper"]'
//     const filterDropdown = '[data-component-name="WorkOrdersFilters.Wrapper.DropdownWrapper.BorderWrapper"]'

//     //  Click Assigned Tab
//     cy.log('Step 1: Click on Assigned tab')
//     cy.contains(assignedTabSelector, 'Assigned')
//       .should('be.visible')
//       .click()

//     // Wait for Assigned data load
//     cy.get('#loader-app').should('not.be.visible', { timeout: 15000 })
//     cy.wait(2000) // Wait for data to load

//     // Open Filters
//     cy.log('Step 2: Open filter dropdown')
//     cy.get(filterHeader)
//       .should('be.visible')
//       .click({ force: true })

//     cy.get(filterDropdown).should('be.visible')

//     //  Click "Assigned to" filter
//     cy.log('Step 3: Click on Assigned to filter')
//     cy.contains(
//       '[data-component-name="BoxDropdown.Wrapper.HeaderWrapper.LeftSide.Label"]',
//       'Assigned to'
//     ).click({ force: true })

//     // Search for "tech"
//     cy.log('Step 4: Search for "tech"')
//     cy.get('[data-component-name="BoxDropdown.Wrapper.HeaderWrapper.Search.Input"]')
//       .should('be.visible')
//       .clear({ force: true })
//       .type('tech', { delay: 100, force: true })

//     cy.wait(1500) // Wait for search results to appear

//     // Click searched item (Assigned to Technicians)
//     cy.log('Step 5: Click on search result')
//     cy.get('[data-component-name="BoxDropdown.Wrapper.BodyWrapper.Body.Row"]')
//       .should('have.length.greaterThan', 0)
//       .then(($rows) => {
//         cy.log(Found ${$rows.length} result(s) for "tech")
//         cy.wrap($rows[0]).click({ force: true })
//       })

//     // Close filter
//     cy.log('Step 6: Close filter dropdown')
//     cy.get('body').click(0, 0)

//     // Wait for filtered results and data to update
//     cy.get('#loader-app').should('not.be.visible', { timeout: 15000 })
//     cy.wait(2000) // Extra wait for data to fully populate

//     //  Verify Assigned tab has data displayed
//     cy.log('Step 7: Verify work orders are displayed on Assigned tab')
//     cy.get('[data-component-name="WorkOrderTableRow.Wrapper"]')
//       .should('exist')
//       .and('have.length.greaterThan', 0)
//       .then(($rows) => {
//         cy.log(✓ SUCCESS: Found ${$rows.length} work order(s) on Assigned tab with Technicians filter applied)
//       })

//     //  Verify filter was applied (optional visual check)
//     cy.log('Step 8: Verify Assigned tab is active')
//     cy.contains(assignedTabSelector, 'Assigned')
//       .should('be.visible')
//       .invoke('text')
//       .then((text) => {
//         cy.log(Assigned tab text: ${text})
//       })

//     // Reopen Filter
//     cy.log('Step 9: Re-open filter dropdown')
//     cy.get(filterHeader)
//       .should('be.visible')
//       .click({ force: true })

//     cy.get(filterDropdown).should('be.visible')

//     // Click Assigned To capsule
//     cy.log('Step 10: Click Assigned To capsule')
//     cy.contains(
//       '[data-component-name="BoxDropdown.Wrapper.HeaderWrapper.LeftSide.Label"]',
//       'Assigned to'
//     ).click({ force: true })

//     // Click Clear button
//     cy.log('Step 11: Click Clear button')
//     cy.get('[data-component-name="BoxDropdown.Wrapper.ButtonsWrapper.ButtonsWrapper.ButtonsWrapper.Button"]')
//       .click({ force: true })

//     // Click Cross icon
//     cy.log('Step 12: Click Cross icon')
//     cy.get('[data-component-name="BoxDropdown.Wrapper.ButtonsWrapper.ButtonsWrapper.ButtonsWrapper.Button.Button"]')
//       .click({ force: true })

//     // Click outside
//     cy.log('Step 13: Click outside to close filter')
//     cy.get('body').click(0, 0)

//     cy.get('#loader-app').should('not.be.visible', { timeout: 15000 })
//     cy.wait(2000)

//     // Verify data still exists after clearing
//     cy.log('Step 14: Verify data loads after clearing filter')
//     cy.get('[data-component-name="WorkOrderTableRow.Wrapper"]')
//       .should('exist')
//   })




it('Exports Work Orders as PDF and CSV successfully', function () {
  ensureWorkOrdersExist()

  cy.log('Step 1: Click export icon')
  openExportMenu()

  cy.get(EXPORT.pdf, { timeout: EXPORT.timeout }).should('be.visible')
  cy.log('Step 2: Click PDF export')
  cy.get(EXPORT.pdf).click({ force: true })
  cy.wait(3000)
  cy.log('✓ PDF export triggered successfully')

  cy.log('Step 3: Click export icon again')
  openExportMenu()

  cy.get(EXPORT.csv, { timeout: EXPORT.timeout }).should('be.visible')
  cy.log('Step 4: Click CSV export')
  cy.get(EXPORT.csv).click({ force: true })
  cy.wait(3000)
  cy.log('✓ CSV export triggered successfully')
})

it('Subscribes to Work Order report: PDF, daily, set time, and closes success modal', function () {
  ensureWorkOrdersExist()

  cy.log('Step 1: Click export icon')
  openExportMenu()

  cy.log('Step 2: Click Subscribe')
  cy.get(EXPORT.subscribe, { timeout: EXPORT.timeout }).should('be.visible').click({ force: true })

  cy.get('[data-component-name="Settings"]', { timeout: 15000 }).first().should('be.visible')

  cy.get('[data-component-name="Settings"]').first().within(() => {
    cy.log('Step 3: Select Format PDF')
    cy.get('[data-component-name="SubscriptionHeaderFilter.Wrapper.Header"]').first().click()
    cy.get('[data-component-name="SubscriptionHeaderFilter.Wrapper.DropdownWrapper.BorderWrapper.ListWrapper.ListWrapper.Option"]').filter(':visible').contains('PDF').click({ force: true })

    cy.log('Step 4: Select Frequency Daily')
    cy.get('[data-component-name="SubscriptionHeaderFilter.Wrapper.Header"]').eq(1).click()
    cy.get('[data-component-name="SubscriptionHeaderFilter.Wrapper.DropdownWrapper.BorderWrapper.ListWrapper.ListWrapper.Option"]').filter(':visible').contains('Daily').click({ force: true })

    cy.log('Step 5: Set time')
    cy.get(SELECTORS.subscriptionTimeHour).clear().type('9')
    cy.get(SELECTORS.subscriptionTimeMinute).clear().type('00')
    cy.get(SELECTORS.subscriptionAmPmLeft).click({ force: true })

    cy.log('Step 6: Click Subscribe')
    cy.get(SELECTORS.subscriptionSubmit).click({ force: true })
  })

  cy.log('Step 7: Success modal appears')
  cy.contains("You're all set!", { timeout: 15000 }).should('be.visible')

  cy.log('Step 8: Close success modal')
  cy.get('[data-component-name="ModalHeader.Button"]').filter(':visible').click()

  cy.contains("You're all set!").should('not.exist')
  cy.log('✓ Work order subscription completed')
})

  describe('Work Order Creation', () => {
    it('Should create work order and assign to technician', () => {
      // Open new work order modal
      cy.contains(SELECTORS.newWorkOrderBtn, '+ New Work Order')
        .should('be.visible')
        .click()

      cy.get(SELECTORS.modalTitle).should('be.visible')

      // Fill form
      fillDescription('Leaking faucet in the kitchen')
      verifyCategorySelected()
      selectProperty('a')
      selectUnit()
      selectPriority()

      // Assign to technician
      assignWorkOrder('technician')

      // Upload attachments
      uploadAttachments()

      // Schedule work order
      scheduleWorkOrder()

      // Create and verify
      createAndVerifyWorkOrder()
      viewAndAddComment()

      // Print, cancel, close modals, and verify on Canceled tab
      printWorkOrder()
      cancelWorkOrderAndCloseModals()
      verifyWorkOrderOnCanceledTab()
    })

    it('Should create work order and assign to vendor', () => {
      // Open new work order modal
      cy.contains(SELECTORS.newWorkOrderBtn, '+ New Work Order')
        .should('be.visible')
        .click()

      cy.get(SELECTORS.modalTitle).should('be.visible')

      // Fill form
      fillDescription('Leaking faucet in the kitchen')
      verifyCategorySelected()
      selectProperty('a')
      selectUnit()
      selectPriority()

      // Assign to vendor
      assignWorkOrder('vendor')

      // Upload attachments
      uploadAttachments()

      // Schedule work order
      scheduleWorkOrder()

      // Create and verify
      createAndVerifyWorkOrder()
      viewAndAddComment()

      // Capture Completed tab count before completing
      cy.contains(SELECTORS.tabItem, 'Completed').invoke('text').then((text) => {
        const match = text.match(/Completed\s*(\d+)/)
        const count = match ? parseInt(match[1], 10) : 0
        cy.wrap(count).as('completedCountBefore')
      })

      // Admin marks work order as complete and verify status changes to Completed
      markWorkOrderCompleteAndVerifyStatus()

      // Close modal and verify completed work order appears in Completed tab; count increased
      closeWorkOrderModalAndVerifyOnCompletedTab()
    })


  
 })
})
