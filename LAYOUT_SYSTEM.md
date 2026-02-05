# Enterprise Layout System - Vextria AI

## 🎯 Problem Solved
Prevents layout inconsistencies across laptop screens (1366px, 1440px, 1920px) by using max-width constraints and responsive patterns.

---

## 📐 Core Principles

### 1. **Max-Width Constraints** (No Full-Width Stretching)
```tsx
// ❌ BAD - Stretches on large screens
<div className="w-full px-4">

// ✅ GOOD - Constrained max-width
<div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
```

### 2. **Consistent Container Pattern**
```tsx
<section className="py-16 md:py-24 bg-gradient-to-b from-black to-black">
  <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
    {/* Content */}
  </div>
</section>
```

### 3. **Typography with clamp()**
```tsx
// Fluid typography that scales smoothly
style={{ fontSize: 'clamp(2rem, 4vw + 1rem, 4rem)' }}
```

---

## 🏗️ Layout Components

### **SectionWrapper** - Universal Section Container
```tsx
import { SectionWrapper } from '@/components/layout/SectionWrapper';

<SectionWrapper
  maxWidth="default"  // 1200px (default) | narrow (900px) | wide (1400px)
  padding="default"   // Responsive padding
  background="gradient" // gradient | solid | none
>
  <YourContent />
</SectionWrapper>
```

### **ContentContainer** - Nested Content Blocks
```tsx
<ContentContainer maxWidth="narrow">
  <h2>Narrower text content</h2>
</ContentContainer>
```

---

## 📏 Max-Width Standards

| Name      | Max-Width | Use Case                          |
|-----------|-----------|-----------------------------------|
| Narrow    | 900px     | Text-heavy content, blog posts    |
| Default   | 1200px    | Standard sections, hero content   |
| Wide      | 1400px    | Dashboards, wide visuals          |

---

## 🎨 Typography System

### Heading Scales (Responsive with clamp)
```css
.heading-hero        → clamp(2rem, 4vw + 1rem, 4rem)        /* Hero headlines */
.heading-section     → clamp(1.75rem, 3.5vw + 0.75rem, 3.5rem) /* Section titles */
.heading-subsection  → clamp(1.5rem, 2.5vw + 0.5rem, 2.5rem)   /* Subsections */
.text-body           → clamp(1rem, 1.5vw + 0.5rem, 1.125rem)   /* Body text */
```

### Usage in Components
```tsx
// Use inline style for maximum control
<h1 style={{ fontSize: 'clamp(2rem, 4vw + 1rem, 4rem)' }}>
  Your Headline
</h1>

// Or use CSS class
<h1 className="heading-hero">Your Headline</h1>
```

---

## 📱 Responsive Breakpoints

```typescript
// tailwind.config.ts
screens: {
  'xs': '475px',
  'sm': '640px',
  'md': '768px',      // Tablets
  'lg': '1024px',
  'xl': '1280px',
  'laptop-sm': '1366px',  // Small laptops ⭐
  'laptop-md': '1440px',  // Medium laptops ⭐
  'laptop-lg': '1920px',  // Large laptops ⭐
  '2xl': '1536px',
}
```

---

## 🔧 Padding System

```tsx
// Responsive padding pattern
className="px-6 md:px-8 lg:px-12"

// Vertical spacing
className="py-16 md:py-24"
```

### Standard Spacing Scale
- Mobile: `px-6` (1.5rem / 24px)
- Tablet: `px-8` (2rem / 32px)
- Desktop: `px-12` (3rem / 48px)

---

## ✅ Hero Section Pattern

```tsx
<section className="relative h-screen max-h-[900px] min-h-[600px]">
  {/* Background */}
  <div className="absolute inset-0">
    {/* 3D Background */}
  </div>

  {/* Content - Constrained to 1200px */}
  <div className="relative z-20 max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-20">
    <h1 style={{ fontSize: 'clamp(2rem, 4vw + 1rem, 4rem)' }}>
      Hero Headline
    </h1>
    <p style={{ fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.25rem)' }}>
      Subtitle text
    </p>
  </div>
</section>
```

### Key Changes:
1. **Height constraints:** `h-screen max-h-[900px] min-h-[600px]`
2. **Max-width:** `max-w-[1200px]` prevents stretching
3. **Fluid typography:** `clamp()` for smooth scaling
4. **Fixed padding:** `px-6 md:px-8 lg:px-12`

---

## 🚫 Common Mistakes to Avoid

### ❌ DON'T:
```tsx
// Full width without constraints
<div className="w-full px-4">

// Fixed pixel sizes
<h1 className="text-7xl">

// vh without max-height
<section className="min-h-screen">

// Excessive breakpoints
<p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
```

### ✅ DO:
```tsx
// Constrained max-width
<div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">

// Fluid typography
<h1 style={{ fontSize: 'clamp(2rem, 4vw + 1rem, 4rem)' }}>

// Constrained height
<section className="h-screen max-h-[900px] min-h-[600px]">

// Minimal breakpoints with clamp
<p style={{ fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.125rem)' }}>
```

---

## 🎯 Testing Checklist

Test your layouts on these viewport widths:
- ✅ 1366px (Small laptops)
- ✅ 1440px (Medium laptops)
- ✅ 1920px (Large desktops)
- ✅ 768px (Tablets)
- ✅ 375px (Mobile)

### Visual Consistency Checks:
1. Content never touches screen edges (proper padding)
2. Content doesn't stretch too wide (max-width enforced)
3. Typography scales smoothly (no sudden jumps)
4. No horizontal scroll
5. Vertical centering maintains across sizes

---

## 📦 Quick Migration Guide

### Before (Inconsistent):
```tsx
<section className="py-12 sm:py-16 md:py-20 lg:py-24">
  <div className="container mx-auto px-4 sm:px-6">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
```

### After (Consistent):
```tsx
<section className="py-16 md:py-24">
  <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
    <h2 style={{ fontSize: 'clamp(2rem, 3.5vw + 1rem, 3.5rem)' }}>
```

---

## 🚀 Performance Optimizations

```css
/* Prevent horizontal overflow */
html, body {
  overflow-x: hidden;
  max-width: 100vw;
}

/* Optimize rendering */
section {
  contain: layout style paint;
  transform: translateZ(0);
}
```

---

## 📚 Resources

- [CSS clamp() calculator](https://clamp.font-size.app/)
- [Tailwind max-width utilities](https://tailwindcss.com/docs/max-width)
- [Responsive design best practices](https://web.dev/responsive-web-design-basics/)

---

## 💡 Key Takeaway

**Max-width + Fluid Typography + Consistent Padding = Perfect Layout**

Your content is now constrained, responsive, and visually consistent across all laptop sizes without layout shift.
