# How to Extract Locators from HTML

## What You Did Well
You provided the modal HTML. Now let's extract locators from it.

---

## 1. Description Input
**From HTML:**
```html
<textarea placeholder="Describe the work order..." 
  data-component-name="DescriptionInput.InputWrapper" 
  class="sc-dAlyuH kZXWUO"></textarea>
```

**Locators:**
```javascript
// Option 1: Using data-component-name (BEST - most stable)
SELECTORS.descriptionInput = '[data-component-name="DescriptionInput.InputWrapper"]'

// Option 2: Using placeholder
SELECTORS.descriptionInput = 'textarea[placeholder*="Describe"]'

// Option 3: Using class (NOT RECOMMENDED - changes often)
SELECTORS.descriptionInput = 'textarea.sc-dAlyuH'
```

---

## 2. Category Input
**From HTML:**
```html
<div data-component-name="CategoryInput" class="sc-cPyLVi fsOWzt"></div>
```

**Locator:**
```javascript
SELECTORS.categoryInput = '[data-component-name="CategoryInput"]'
```

---

## 3. Property Dropdown Selector
**From HTML:**
```html
<div data-component-name="PropertySelector" class="sc-cPyLVi fsOWzt">
  <div data-component-name="Dropdown" class="sc-bklklh imbLLT">
    <div data-component-name="Dropdown.Selector" class="sc-dOtRHS cUmJPR">
      <input placeholder="Property" 
        data-component-name="Dropdown.Selector.LeftSide.Wrapper.SearchInput" 
        class="sc-bXCLTC hpKfwB" value=""/>
    </div>
  </div>
</div>
```

**Locators:**
```javascript
// Main selector
SELECTORS.propertySelector = '[data-component-name="PropertySelector"]'

// Dropdown wrapper
SELECTORS.propertyDropdown = '[data-component-name="Dropdown.Selector"]'

// Search input inside dropdown
SELECTORS.propertySearchInput = '[data-component-name="Dropdown.Selector.LeftSide.Wrapper.SearchInput"]'

// For selecting options (you need to find the actual option elements)
// Look for elements like:
// [data-component-name="Dropdown.Option.*"] or
// [data-testid="property-option"] or
// li[role="option"]
```

---

## 4. Priority Selector
**From HTML:**
```html
<div data-component-name="PriorityInput.Selector" class="sc-gAjuZT gcAGxY">
  <div data-component-name="PriorityInput.Selector.Priority" class="sc-eiQriw bHkdUh">
    <div data-component-name="PriorityInput.Selector.Priority.Selector" class="sc-hhKSXs kVvhPN">
      <div class="sc-hsUFQk gwWtuI">
        <span data-component-name="PriorityInput.Selector.Priority.Selector.Name" class="sc-iGgWBj kBDUJM">regular</span>
      </div>
    </div>
  </div>
</div>
```

**Locators:**
```javascript
SELECTORS.prioritySelector = '[data-component-name="PriorityInput.Selector"]'
SELECTORS.priorityDropdown = '[data-component-name="PriorityInput.Selector.Priority.Selector"]'

// For priority options, click on the selector and check what appears
// Likely: [data-component-name="PriorityOption.*"] or divs containing priority values
```

---

## 5. File Upload
**From HTML:**
```html
<label data-component-name="AttachmentsInput.UploadButton.UploadButton" class="sc-hqUaMi ccFZeb">
  <input type="file" 
    accept="" 
    multiple="" 
    data-component-name="AttachmentsInput.UploadButton.UploadButton-input" 
    style="display: none;">
  Add Image, Gif or Video
</label>
```

**Locators:**
```javascript
// File input (hidden)
SELECTORS.fileUploadInput = '[data-component-name="AttachmentsInput.UploadButton.UploadButton-input"]'

// Label to click
SELECTORS.fileUploadLabel = '[data-component-name="AttachmentsInput.UploadButton.UploadButton"]'
```

---

## 6. Create Button
**From HTML:**
```html
<div data-component-name="CreateOrder.Button" class="sc-ivuPCo cxonWj">
  <div data-component-name="CreateOrder.Button.HoverEffect" class="sc-nukQN gNmvE">
    <!-- SVG -->
  </div>
  <div data-component-name="CreateOrder.Button.Button" class="sc-gyfiXm ljRHJi">
    Create New Work Order
  </div>
</div>
```

**Locators:**
```javascript
// Option 1: Click the exact button element
SELECTORS.createBtn = '[data-component-name="CreateOrder.Button.Button"]'

// Option 2: Parent container
SELECTORS.createBtn = '[data-component-name="CreateOrder.Button"]'

// Option 3: By text (if data-component-name is missing)
SELECTORS.createBtn = 'button:contains("Create New Work Order")'
```

---

## 7. Missing Selectors (Not in HTML - You need to find these)

### Unit Selector
Browse to the modal and look for:
```html
<!-- Likely structure -->
<div data-component-name="UnitSelector">...</div>
<!-- OR -->
<select name="unit">...</select>
<!-- OR -->
<div data-testid="unit-selector">...</div>
```

### Assign Button
Look for assign/technician button:
```html
<button data-component-name="AssignButton">Assign</button>
<!-- OR -->
<button data-testid="assign-btn">Assign to Tech/Vendor</button>
```

### Schedule Input
Look for date/schedule field:
```html
<input data-component-name="ScheduleInput" type="date" />
<!-- OR -->
<input data-testid="schedule-date" />
```

---

## How to Find Missing Locators

### Step 1: Open Browser DevTools
```
F12 or Right-click → Inspect
```

### Step 2: Search for Elements
Press `Ctrl+F` in DevTools and search for:
- `data-component-name="Unit"`
- `data-testid="unit"`
- `placeholder="Unit"`
- `name="unit"`

### Step 3: Best Priority Order
1. ✅ **`data-testid`** - Most stable, written for testing
2. ✅ **`data-component-name`** - Stable, component naming
3. ✅ **`name` or `id`** - HTML standard attributes
4. ⚠️ **`placeholder`** - Works but can change
5. ❌ **`class`** - Avoid! Changes with styling

### Step 4: Build Selector
```javascript
// If you find: data-testid="unit-dropdown"
SELECTORS.unitSelector = '[data-testid="unit-dropdown"]'

// If you find: data-component-name="UnitInput"
SELECTORS.unitSelector = '[data-component-name="UnitInput"]'

// If you find: name="unit"
SELECTORS.unitSelector = 'select[name="unit"]'
```

---

## Example: Finding All Locators

### Your JavaScript should look like:
```javascript
const SELECTORS = {
  // Navigation
  newWorkOrderBtn: '[data-testid="new-work-order-button"]', // You provided this
  
  // Modal Inputs (From HTML you provided)
  descriptionInput: '[data-component-name="DescriptionInput.InputWrapper"]',
  categoryInput: '[data-component-name="CategoryInput"]',
  propertySelector: '[data-component-name="PropertySelector"]',
  propertySearchInput: '[data-component-name="Dropdown.Selector.LeftSide.Wrapper.SearchInput"]',
  prioritySelector: '[data-component-name="PriorityInput.Selector"]',
  fileUploadInput: '[data-component-name="AttachmentsInput.UploadButton.UploadButton-input"]',
  createBtn: '[data-component-name="CreateOrder.Button.Button"]',
  
  // Missing - YOU NEED TO FIND THESE
  unitSelector: '??? - INSPECT AND FIND',
  assignBtn: '??? - INSPECT AND FIND',
  scheduleInput: '??? - INSPECT AND FIND',
}
```

---

## Updates Needed in work_orders.cy.js

Replace these lines with actual locators:
```javascript
// OLD (placeholders)
unitDropdown: '[data-component-name="UnitDropdown"]',
assignBtn: '[data-component-name="AssignButton"]',
scheduleInput: '[data-component-name="ScheduleInput"]',

// NEW (with your research)
unitDropdown: '[data-testid="unit-select"]', // Example
assignBtn: 'button:contains("Assign")' or '[data-testid="assign-btn"]',
scheduleInput: 'input[name="scheduleDate"]' or '[data-testid="schedule-date"]',
```

---

## Summary
1. ✅ You provided Description, Category, Property, Priority, File Upload, Create Button HTML
2. ❌ Missing: Unit Selector, Assign Button, Schedule Input HTML
3. 📋 Use the guide above to find missing selectors
4. 📝 Update `SELECTORS` object
5. ✅ Tests will run!

