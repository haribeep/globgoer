# Flight Booking App - Design Specifications

## 1. OVERALL COLOR SCHEME

### Primary Color Palette
- **Primary Blue**: `#0066cc` - Main brand color for buttons, links, highlights
- **Dark Text**: `#333333` - Primary text color
- **Medium Text**: `#666666` - Secondary text color
- **Light Gray**: `#999999` - Tertiary text, disabled states
- **Border Gray**: `#e0e0e0` - Card borders, dividers
- **Background**: `#f8f9fa` - Page background
- **White**: `#ffffff` - Card backgrounds

### Status Colors
- **Success Green**: `#2E7D32` - Available seats, positive indicators
- **Gold/Premium**: `#d4af37` - Refundable status, premium badges
- **Error Red**: `#ff6b6b` - Non-refundable, warnings
- **Hover Blue**: `#0052a3` - Darker blue for hover states

---

## 2. NAVBAR DESIGN

### Overall Structure
- **Height**: 70px (fixed/sticky position)
- **Background**: White (`#ffffff`)
- **Border**: 1px solid `#e0e0e0` (bottom border)
- **Shadow**: `0px 2px 8px rgba(0, 0, 0, 0.08)`
- **Padding**: 40px horizontal, full height vertical
- **Display**: Flex with space-between alignment

### Logo Section (Left)
- **Layout**: Flex with 12px gap
- **Logo Icon**:
  - Flight icon rotated -45 degrees
  - Size: 32px
  - Color: `#0066cc`
- **Brand Text**:
  - Text: "FlightHub"
  - Font Weight: 700 (bold)
  - Font Size: 24px
  - Color: `#0066cc`
  - Letter Spacing: -0.5px

### Navigation Menu (Center)
- **Gap**: 24px between items
- **Items**: "Flights", "Hotels", "Deals"
- **Typography**:
  - Font Size: 14px
  - Font Weight: 500
  - Color: `#666666` (default)
  - Color on Hover: `#0066cc`
  - Cursor: pointer
  - Transition: color 0.2s ease

### Right Section
- **Gap**: 8px between elements
- **Sign In Button**:
  - Style: Text button (transparent background)
  - Font Size: 13px
  - Font Weight: 500
  - Color: `#666666`
  - Hover Background: `#f0f0f0`
  - Text Transform: none
- **Sign Up Button**:
  - Style: Contained button
  - Background: `#0066cc`
  - Hover Background: `#0052a3`
  - Font Size: 13px
  - Font Weight: 600

---

## 3. FLIGHT CARD DESIGN

### Card Container
- **Width**: 100%
- **Min Height**: 220px
- **Border Radius**: 12px
- **Padding**: 24px
- **Display**: Flex with flex-direction: column
- **Gap**: 20px
- **Background**: White (`#ffffff`)
- **Border**: 1px solid `#e0e0e0`
- **Shadow**: `0px 2px 8px rgba(0, 0, 0, 0.08)` (default)
- **Transition**: all 0.3s ease

### Hover/Interactive States
- **Transform**: translateY(-4px) - Lift effect
- **Shadow**: `0px 8px 20px rgba(0, 0, 0, 0.12)` - Enhanced shadow
- **Border Color**: `#0066cc` - Blue highlight border

---

### Section 1: Header (Airline & Cabin Info)
**Layout**: Flex, space-between, center alignment

#### Left Side - Airline Info
- **Layout**: Flex with 8px gap, center aligned
- **Logo Circle**:
  - Width: 40px
  - Height: 40px
  - Border Radius: 50%
  - Background: `#0066cc`
  - Display: Flex center
  - Icon: Flight icon, white, 20px
- **Airline Name**:
  - Font Weight: 700
  - Font Size: 18px
  - Color: `#333333`

#### Right Side - Flight Code & Class
- **Layout**: Flex column, gap 4px, right aligned
- **Flight Code**:
  - Font Size: 12px
  - Color: `#999999`
  - Font Weight: 500
- **Cabin Class**:
  - Font Size: 13px
  - Color: `#666666`
  - Font Weight: 500

---

### Section 2: Main Journey Content
**Layout**: Flex with space-between, center alignment, 32px gap

#### Departure (Left)
- **Min Width**: 100px
- **Time Display**:
  - Font Weight: 700
  - Font Size: 24px
  - Color: `#000000`
  - Line Height: 1
- **Airport Code**:
  - Font Size: 13px
  - Color: `#666666`
  - Margin Top: 4px

#### Journey Visual (Center)
- **Flex**: 1 (grows to fill)
- **Layout**: Column, center alignment, 8px gap
- **Duration Text**:
  - Font Size: 12px
  - Font Weight: 600
  - Color: `#333333`
- **Visual Line**:
  - Display: Flex, center, full width, 8px gap
  - Left Divider: flex 1, `#d0d7de` color
  - Flight Icon: 18px, `#0066cc`, rotated 90 degrees
  - Right Divider: flex 1, `#d0d7de` color
- **Stops Text** (below line):
  - Font Size: 11px
  - Color: `#999999`
  - Font Weight: 500
  - Text: "Direct" or "X Stop(s)"

#### Arrival (Right)
- **Min Width**: 100px
- **Text Align**: right
- **Time Display**: Same as departure
- **Airport Code**: Same as departure

---

### Section 3: Vertical Divider
- **Orientation**: Vertical
- **Height**: 80px
- **Border Color**: `#e0e0e0`
- **Margin**: 0 left/right auto

---

### Section 4: Pricing & Action
**Layout**: Flex column, justify center, gap 12px
**Min Width**: 140px
**Text Align**: right

#### Price Box
- **Label** ("Starting from"):
  - Font Size: 12px
  - Color: `#999999`
  - Margin Bottom: 4px
- **Price Display**:
  - Font Weight: 700
  - Font Size: 32px
  - Color: `#0066cc`
  - Line Height: 1

#### Book Now Button
- **Width**: 100%
- **Height**: 44px
- **Variant**: Contained
- **Background**: `#0066cc` (default)
- **Text Transform**: none
- **Font Weight**: 600
- **Font Size**: 14px
- **Border Radius**: 8px
- **Transition**: all 0.3s ease
- **Hover**:
  - Background: `#0052a3`
  - Shadow: `0px 4px 12px rgba(0, 102, 204, 0.3)`

---

### Section 5: Footer (Additional Info)
**Layout**: Flex, space-between, center alignment
**Padding Top**: 16px
**Border Top**: 1px solid `#e0e0e0`

#### Seats Remaining
- **Font Size**: 12px
- **Color**: `#2E7D32` (green)
- **Font Weight**: 500
- **Content**: ✓ {seats} Seats Remaining

#### Refundable Status
- **Font Size**: 12px
- **Font Weight**: 500
- **Refundable**:
  - Color: `#d4af37` (gold)
  - Content: ✓ Refundable
- **Non-Refundable**:
  - Color: `#ff6b6b` (red)
  - Content: Non-Refundable

#### View Details Link
- **Font Size**: 12px
- **Color**: `#0066cc` (default)
- **Font Weight**: 600
- **Cursor**: pointer
- **Transition**: all 0.2s
- **Hover**:
  - Text Decoration: underline
  - Color: `#0052a3`

---

## 4. SEARCH BAR / TOP-LEVEL FILTER DESIGN

### Filter Section Container
- **Display**: Flex, column
- **Gap**: 20px (2.5rem)
- **Width**: 100%

---

### Filter Row 1: Trip Type, Flight Type, Cabin Class
**Layout**: Flex row, gap 24px, center aligned, wrappable

#### Custom Dropdown Styling
- **Label**: Above the dropdown
- **Font Size**: 14px
- **Font Weight**: 500
- **Color**: `#666666`

---

### Filter Row 2: Search Inputs (Main Search Box)
**Layout**: Flex (column on mobile, row on desktop)
**Background**: White (`#ffffff`)
**Padding**: 24px
**Border Radius**: 12px
**Box Shadow**: `0px 4px 16px rgba(0, 0, 0, 0.08)`
**Gap**: 16px
**Align Items**: flex-end (on desktop)

#### From/To Autocomplete Box
- **Flex**: 2 (takes up more space)
- **Display**: Two fields side-by-side
- **Background**: `#f8f9fa`
- **Border**: 1px solid `#e0e0e0`
- **Border Radius**: 8px
- **Padding**: 12px

#### Date Picker Box
- **Flex**: 1
- **Similar styling to autocomplete**

#### Traveler Selector
- **Flex**: 1
- **Similar styling to autocomplete**

#### Search Button
- **Variant**: Contained
- **Background**: `#0066cc`
- **Text**: "Search" or with Search Icon
- **Height**: 44px
- **Width**: 120px
- **Hover**: Background `#0052a3`, shadow enhancement

---

## 5. ADVANCE FILTER SECTION (SIDEBAR)

### Filter Card Container
- **Padding**: 24px (p: 3)
- **Border Radius**: 12px
- **Box Shadow**: `0px 2px 8px rgba(0, 0, 0, 0.08)`
- **Border**: 1px solid `#e0e0e0`
- **Background**: White (`#ffffff`)
- **Position**: sticky (top: 100px)
- **Max Height**: calc(100vh - 120px)
- **Overflow Y**: auto

---

### Filter Header
**Display**: Flex, gap 12px, margin bottom 24px

- **Icon** (FilterAlt):
  - Color: `#0066cc`
  - Font Size: 24px
- **Title Text**:
  - Font Weight: 700
  - Font Size: 18px
  - Color: `#333333`
  - Text: "Filters"

---

### Divider
- **Color**: `#e0e0e0`
- **Margin Bottom**: 20px

---

### Price Range Filter
**Section styling**: margin-bottom 24px

- **Label**:
  - Font Weight: 600
  - Font Size: 14px
  - Color: `#333333`
  - Margin Bottom: 16px
- **Slider**:
  - Color: `#0066cc`
  - Min: $0
  - Max: $2000
  - Step: $50
  - Value Label Display: auto
  - Marks: $0 and $2K
  - **Thumb Styling**:
    - Background: `#0066cc`
    - Shadow: `0px 2px 6px rgba(0, 102, 204, 0.3)`
  - **Track Color**: `#0066cc`

---

### Stops Filter
**Section styling**: margin-bottom 24px

- **Checkboxes** for:
  - Direct (0 stops)
  - 1 Stop
  - 2+ Stops
- **Checkbox Color**: `#0066cc`
- **Checked Color**: `#0066cc`
- **Label Font Size**: 14px
- **Label Color**: `#666666`

---

### Airlines Filter
**Section styling**: margin-bottom 24px

- **List of airlines**:
  - Emirates
  - Qatar Airways
  - British Airways
  - Singapore Airlines
  - Lufthansa
- **Checkbox styling**: Same as stops filter
- **Checkbox Color**: `#0066cc`

---

### Action Buttons
**Layout**: Flex gap, margin top 24px

#### Apply Filters Button
- **Variant**: Contained
- **Background**: `#0066cc`
- **Width**: Full
- **Height**: 44px
- **Font Weight**: 600
- **Hover**: Background `#0052a3`

#### Reset Filters Button
- **Variant**: Outlined
- **Border Color**: `#e0e0e0`
- **Width**: Full
- **Height**: 44px
- **Font Weight**: 600
- **Text Color**: `#666666`
- **Hover**: Background `#f0f0f0`

---

## 6. CUSTOM COMPONENTS SPECIFICATIONS

### CustomDropdown
- **Display**: Dropdown selector
- **Label**: Above component
- **Options**: Array of strings
- **Selected Value**: Highlighted/active state
- **Styling**: Material-UI Select component
- **Border Radius**: 8px
- **Height**: 40px

---

### CustomDatePicker
- **Label**: "Departure Date" or "Return Date"
- **Type**: Date picker (Modal)
- **Format**: MM/DD/YYYY
- **Min Date**: Today
- **Icon**: Calendar icon
- **Styling**: Material-UI DatePicker

---

### CustomButton
- **Variants**: contained, outlined, text
- **Default Variant**: contained
- **Default Color**: primary (`#0066cc`)
- **Icon Support**: Optional startIcon
- **Height**: 44px (standard)
- **Border Radius**: 8px
- **Font Weight**: 600
- **Font Size**: 14px

---

### TravellerSelector
- **Display**: Adults, Children, Infants counts
- **Layout**: Three separate spinners/incrementers
- **Font Size**: 14px
- **Color**: `#666666`
- **Default Values**:
  - Adults: 1
  - Children: 0
  - Infants: 0

---

### FromToAutocomplete
- **Layout**: Two fields (From/To)
- **Type**: Autocomplete with airport list
- **Icons**: Flight departure/arrival icons
- **Placeholder**: "From" and "To" city/airport names
- **Styling**: Material-UI Autocomplete
- **Background**: `#f8f9fa`
- **Border**: 1px solid `#e0e0e0`

---

## 7. SPACING & TYPOGRAPHY STANDARDS

### Font Family
- **Font Stack**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`
- **Line Height** (body): 1.5

### Font Sizes Used
- **32px**: Large price display
- **24px**: Departure/arrival times, brand name
- **18px**: Card airline names, section headers
- **16px**: Filter titles
- **14px**: Body text, dropdown options, labels
- **13px**: Secondary text, button text, airport codes
- **12px**: Small text, refundable status, seat count
- **11px**: Tiny text (stops info)

### Font Weights
- **700**: Bold (headers, airline names, prices, main actions)
- **600**: Semibold (buttons, labels, durations)
- **500**: Medium (secondary text, dropdowns)
- **400**: Regular (default body text)

### Spacing Scale (in pixels)
- **4px**: Extra small gap/spacing
- **8px**: Small gap
- **12px**: Small-medium gap
- **16px**: Medium gap
- **20px**: Medium-large gap
- **24px**: Large gap (padding)
- **32px**: Extra large gap

---

## 8. SHADOWS & ELEVATION

### Card Shadow
- **Default**: `0px 2px 8px rgba(0, 0, 0, 0.08)`
- **Hover**: `0px 8px 20px rgba(0, 0, 0, 0.12)`
- **Button Hover**: `0px 4px 12px rgba(0, 102, 204, 0.3)` (blue-tinted)
- **Navbar**: `0px 2px 8px rgba(0, 0, 0, 0.08)`
- **Search Box**: `0px 4px 16px rgba(0, 0, 0, 0.08)`

---

## 9. BORDER RADIUS STANDARDS

- **12px**: Cards, filter panels, main containers
- **8px**: Buttons, input fields, small components
- **50%**: Circular avatars (airline logos)

---

## 10. RESPONSIVE BREAKPOINTS

### Layout Changes by Screen Size
- **xs (0-600px)**: 
  - Single column layout for search inputs
  - Stacked filters
  - Full-width buttons
  
- **sm (600-960px)**:
  - 2-column layout (limited)
  - Adjusted spacing

- **md (960px+)**:
  - Full multi-column layout
  - Row-based filters
  - Sidebar filters visible

---

## 11. INTERACTIVE STATES

### Buttons
- **Default**: Solid color with shadow
- **Hover**: Darker color + enhanced shadow
- **Active**: Darker shade
- **Disabled**: Opacity 0.6, no hover effect

### Links
- **Default**: `#0066cc`, no underline
- **Hover**: `#0052a3`, underline
- **Active**: `#0052a3`
- **Visited**: Same as default

### Checkboxes & Radio Buttons
- **Unchecked**: `#999999` border
- **Checked**: `#0066cc` background
- **Hover**: Slight shadow/highlight

### Input Fields
- **Default**: `#e0e0e0` border, white background
- **Focus**: `#0066cc` border, light blue background glow
- **Disabled**: `#f8f9fa` background, `#cccccc` border
- **Error**: `#ff6b6b` border

---

## 12. MATERIAL-UI THEME OVERRIDE (MUI v7)

```javascript
const themeConfig = {
  palette: {
    primary: {
      main: '#0066cc',
      dark: '#0052a3',
      light: '#e6f0ff',
    },
    secondary: {
      main: '#666666',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    divider: '#e0e0e0',
    text: {
      primary: '#333333',
      secondary: '#666666',
      disabled: '#999999',
    },
    success: {
      main: '#2E7D32',
    },
    error: {
      main: '#ff6b6b',
    },
    warning: {
      main: '#d4af37',
    },
  },
  typography: {
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
    h1: { fontSize: '32px', fontWeight: 700 },
    h2: { fontSize: '24px', fontWeight: 700 },
    h3: { fontSize: '18px', fontWeight: 700 },
    body1: { fontSize: '14px', fontWeight: 500 },
    body2: { fontSize: '13px', fontWeight: 400 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          height: '44px',
          transition: 'all 0.3s ease',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 12px rgba(0, 102, 204, 0.3)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
          border: '1px solid #e0e0e0',
        },
      },
    },
  },
};
```

---

## 13. ACCESSIBILITY STANDARDS

- **Color Contrast**: All text meets WCAG AA standards (4.5:1 for normal text)
- **Font Sizes**: Minimum 12px for body text
- **Touch Targets**: Minimum 44px height for buttons
- **Focus States**: Visible outline on all interactive elements
- **Keyboard Navigate**: All components support keyboard navigation
- **ARIA Labels**: All icons and buttons have descriptive labels

---

## 14. FORM VALIDATION STYLING

### Error State
- **Input Border**: `#ff6b6b` (red)
- **Error Text**:
  - Font Size: 12px
  - Color: `#ff6b6b`
  - Display: Below input field
  - Margin Top: 4px

### Success State
- **Input Border**: `#2E7D32` (green)
- **Success Icon**: Green checkmark

### Warning State
- **Input Border**: `#d4af37` (gold)
- **Warning Icon**: Exclamation mark

---

## 15. ANIMATIONS

### Transition Timing
- **Quick**: 0.2s (hover effects)
- **Standard**: 0.3s (main animations)
- **Slow**: 0.5s (important transitions)

### Common Animations
- **Card Hover**: translateY(-4px) with shadow increase
- **Button Hover**: Background color change + shadow
- **Fade In**: opacity 0 → 1, duration 0.3s
- **Slide Up**: translateY(20px) → 0, duration 0.3s

---

This design specification covers all major components in your Flight Booking application. Use these values as reference when implementing or modifying components to maintain visual consistency across the entire application.
