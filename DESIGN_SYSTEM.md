# 🎨 Design System & Theme Guide

## 📐 Color Palette

### Primary Colors (Main Brand)
```
Amber-900: #78350f (Dark brown - headers, main elements)
Amber-800: #92400e (Medium brown)
Amber-700: #b45309 (Light brown - buttons, accents)
Amber-600: #d97706 (Bright amber - hover states)
```

### Secondary Colors
```
Stone-900: #1c1917 (Very dark gray - text)
Stone-800: #292524 (Dark gray - secondary text)
Stone-600: #57534e (Medium gray - body text)
```

### Accent Colors
```
White: #ffffff (Backgrounds, cards)
Amber-50: #fffbeb (Light background, subtle sections)
Amber-100: #fef3c7 (Light badge backgrounds)
Amber-200: #fde68a (Borders)
```

### Interactive Colors
```
Blue-700: #1d4ed8 (Filter buttons)
Red-600: #dc2626 (Admin login, delete actions)
Green: #16a34a (Success states)
```

---

## 🔤 Typography

### Font Family
```
Font Stack: ui-sans-serif, system-ui, sans-serif
(Tailwind default)
```

### Heading Sizes
```
h1: text-5xl (48px) - Page titles
h2: text-3xl (30px) - Section headers
h3: text-2xl (24px) - Subsection headers
h4: text-xl (20px) - Card titles
Body: text-base/lg (16px/18px) - Regular text
Small: text-sm (14px) - Labels, captions
```

### Font Weights
```
Regular: font-normal (400)
Medium: font-medium (500)
Semibold: font-semibold (600)
Bold: font-bold (700)
```

---

## 🎯 Page-by-Page Theme Usage

### Home Page
- **Background**: Gradient (white → amber-50 → white)
- **Headers**: Amber-900 with gradient text
- **Buttons**: Amber-700 to amber-900 gradient
- **Cards**: White with amber-200 border
- **Text**: Stone-600 for body, stone-900 for headers

### Products Page
- **Background**: Same gradient as Home
- **Product Cards**: White with amber-200 border
- **Model Badge**: Amber-100 background, amber-800 text
- **Category Badge**: Blue-100 background, blue-800 text
- **Filter Buttons**: Active = amber gradient, Inactive = amber-100
- **Buttons**: Amber gradient

### About Page
- **Background**: Same gradient
- **Headers**: Amber gradient text
- **Check Icons**: Amber gradient background with white icons
- **Text**: Gray-700 for body
- **Image Border**: Amber-200

### Contact Page
- **Background**: Same gradient
- **Headers**: Amber gradient text
- **Location Cards**: White with amber-200 border
- **Maps**: Embedded Google Maps with rounded borders
- **Icons**: Amber-700 color
- **Contact Links**: Amber-700 hover states
- **CTA Section**: Amber-900 to amber-800 gradient, white text
- **Button**: White background, amber-900 text

### Admin Pages
- **Login Background**: Amber-50 gradient
- **Login Card**: White with amber-200 border
- **Lock Icon**: Amber background
- **Input Fields**: Amber-50 background with amber-200 border
- **Login Button**: Amber gradient
- **Dashboard**: Same as other pages
- **Admin Button**: Red gradient (red-600 to red-700)
- **Delete Icon**: Red-600

---

## 🏗️ Component Styling Pattern

### Header Component
```
Background: Linear gradient (amber-50 → stone-50)
Logo: Amber-900 gradient text with hover effect
Nav Items: Stone-800 text, amber underline on hover
Admin Button: Red gradient background, white text
```

### Footer Component
```
Background: Dark (likely stone/amber)
Text: White or light gray
Links: Hover state with color change
```

### Product Card
```
Border: Amber-200
Background: White
Hover: shadow-2xl, border amber-300
Image: Rounded with hover scale
Badges: Amber-100 and blue-100 backgrounds
Button: Amber gradient, hover from-amber-800 to-amber-950
```

### Location Card
```
Border: Amber-200
Background: White
Map Container: Rounded corners
Icons: Amber-700
Phone/Email: Amber-700 hover states
Button: Amber gradient full width
```

### Admin Dashboard
```
Dashboard Header: Amber gradient text
Add Product Form: White background with amber styling
Product List: Gray borders, hover amber-50
Delete Button: Red hover state
Drag Handle: Gray, hover amber-700
```

---

## 📱 Responsive Design

### Breakpoints Used
```
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
```

### Grid Layouts
```
Products Grid:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

Locations Grid:
- Mobile: 1 column
- Desktop: 2 columns

Admin Dashboard:
- Mobile: 1 column
- Desktop: 2 columns (forms)
```

---

## ✨ Visual Effects & Animations

### Transitions
```
Duration: duration-300, duration-500
Timing: transition-all, transition-colors, transition-transform
```

### Hover Effects
```
Scale: hover:scale-110 (icons)
Color: hover:text-amber-800
Background: hover:bg-amber-50
Shadow: hover:shadow-2xl
Transform: hover:scale-105 (images)
```

### Gradients
```
Primary: from-amber-900 via-amber-700 to-amber-900
Secondary: from-amber-700 to-amber-900
CTA: from-amber-900 to-amber-800
Admin: from-red-600 to-red-700
```

---

## 🎨 Consistency Checklist

### Colors Used Across Site ✅
- ✅ Amber-900: All main headers
- ✅ Amber-700: Buttons, primary actions
- ✅ Amber-50: Page backgrounds
- ✅ Amber-100/200: Badges, borders
- ✅ Stone colors: Text hierarchy
- ✅ Blue: Filter elements
- ✅ Red: Admin, delete actions

### Typography Used Across Site ✅
- ✅ text-5xl: All h1 headers
- ✅ text-3xl: All h2 headers
- ✅ text-2xl: All h3 headers
- ✅ text-lg: Body text
- ✅ text-sm: Labels, captions
- ✅ font-bold: Page titles
- ✅ font-semibold: Section headers

### Spacing Used Across Site ✅
- ✅ pt-24: All pages (header offset)
- ✅ pb-12: All pages (footer space)
- ✅ max-w-7xl: All containers
- ✅ px-4 sm:px-6 lg:px-8: All padding
- ✅ gap-4/6/8: Card spacing

### Components Used Consistently ✅
- ✅ Rounded corners: rounded-lg, rounded-2xl, rounded-3xl
- ✅ Shadows: shadow-lg, shadow-2xl
- ✅ Borders: border-amber-200 (1-2px)
- ✅ Icons: lucide-react with consistent sizing

---

## 🔄 Theme Variables Reference

### Tailwind Classes Used

**Background Colors**
```
bg-white
bg-gradient-to-br from-white via-amber-50 to-white
bg-gradient-to-r from-amber-50 to-stone-50
bg-amber-100, bg-amber-50
bg-blue-100, bg-blue-50
bg-red-50
```

**Text Colors**
```
text-stone-900 (headers)
text-gray-700, text-gray-600 (body)
text-amber-700, text-amber-900 (brand)
text-white (on dark backgrounds)
```

**Border Colors**
```
border-amber-200 (primary)
border-gray-300 (secondary)
border-blue-200 (filter elements)
```

**Shadow**
```
shadow-lg (cards)
shadow-2xl (hover states)
shadow-md (small elements)
```

---

## 🎯 Custom Color Usage by Feature

### Badges & Tags
```
Model Badge: bg-amber-100 text-amber-800
Category Badge: bg-blue-100 text-blue-800
Success: bg-green-100 text-green-800
Alert: bg-red-50 text-red-700
Info: bg-blue-50 text-blue-700
```

### Buttons
```
Primary (Action): from-amber-700 to-amber-900
Primary Hover: from-amber-800 to-amber-950
Admin: from-red-600 to-red-700
Admin Hover: from-red-700 to-red-800
Secondary: bg-white text-amber-900
```

### Interactive States
```
Link Hover: text-amber-800
Button Hover: Shadow increase + color darken
Icon Hover: Scale up + color change
Card Hover: Shadow increase + border color change
```

---

## 📸 Consistent Design Patterns

### Card Pattern (Used for Products, Locations, etc.)
```
Outer: White background, rounded-lg, shadow-lg, border-amber-200
Hover: shadow-2xl, border-amber-300
Content: Padding p-6, spacing with gap
Footer: Button full-width
```

### List Item Pattern (Used for Admin Products)
```
Background: White, rounded-lg
Border: border-gray-200
Hover: bg-amber-50
Icons: w-5 h-5 with colors
Buttons: Icon buttons with hover
```

### Header Pattern (Used for all pages)
```
Pill: bg-amber-100, text-amber-900, rounded-full
Title: text-5xl, gradient text, bold
Subtitle: text-lg, gray text
```

---

## 🔐 Admin-Specific Theming

### Admin Colors
```
Primary Admin: Red (not amber)
Logout Button: Red-600 to red-700
Delete Action: Red-600
Form Borders: Amber-200 (consistent)
Form Background: Amber-50 (consistent)
```

### Admin Typography
```
Same as main site
- text-3xl for dashboard title
- text-2xl for section headers
- text-base for form labels
- font-semibold for emphasis
```

---

## ✅ Brand Identity Summary

**DA Furniture World** uses a **warm, earthy, premium furniture brand** aesthetic:

- **Primary Color**: Rich amber-brown (amber-700/900)
- **Feel**: Warm, inviting, premium quality
- **Text**: Clean, professional, easy to read
- **Spacing**: Generous, not cramped
- **Imagery**: High-quality furniture, clean layouts
- **Overall**: Premium furniture brand with trust and reliability

---

## 🎨 How to Maintain Consistency

1. **Always use Tailwind classes** from the defined palette
2. **Use rounded-2xl/3xl** for cards (not rounded-md)
3. **Use shadow-lg/2xl** for depth (not smaller shadows)
4. **Use amber-700/900** for brand colors (not other colors)
5. **Use text-5xl/3xl** for headers (not text-4xl/2xl)
6. **Add border-amber-200** to cards (subtle, consistent)
7. **Use gradient text** for h1 headers (brand identity)
8. **Keep spacing consistent** (pt-24, pb-12, gap-8)

---

This design system ensures **visual consistency** across all pages and builds a **strong, professional brand identity** for DA Furniture World! 🛋️✨
