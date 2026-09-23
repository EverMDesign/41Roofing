# 41 Roofing — Re-enable Forms After A2P Approval

All forms were commented out on 2026-09-23 pending A2P application approval.
The GHL chat widget remains active. Search for `TODO: Re-enable after A2P approval` across the codebase to find every commented-out block.

## Files to Uncomment

### 1. Hero Section — `src/components/sections/Hero.tsx`
- [ ] Uncomment `import QuoteForm` and `import ModalCTA`
- [ ] Uncomment the `<ModalCTA>` "Get A Free Roof Inspection" button
- [ ] Uncomment the `<QuoteForm variant="hero">` sidebar block
- [ ] Change hero left column back from `lg:col-span-12` to `lg:col-span-7`

### 2. Homepage — `src/app/page.tsx`
- [ ] Uncomment `import Contact`
- [ ] Uncomment `<Contact />`
- [ ] Uncomment `import InspectionModal`
- [ ] Uncomment `<InspectionModal />`

### 3. Header — `src/components/Header.tsx`
- [ ] Uncomment desktop "Free Roof Inspection" button (`onClick={openModal}`)
- [ ] Uncomment mobile menu "Free Roof Inspection" button

### 4. Mobile Bottom Bar — `src/components/MobileBottomBar.tsx`
- [ ] Uncomment "FREE INSPECTION" button

### 5. Service Page Template — `src/components/ServicePageTemplate.tsx`
- [ ] Uncomment `import InspectionModal` and `import QuoteForm`
- [ ] Uncomment `<InspectionModal />`
- [ ] Uncomment sidebar `<QuoteForm variant="sidebar">`
- [ ] Change content column back from `lg:col-span-12` to `lg:col-span-7`

### 6. Service Area Template — `src/components/ServiceAreaTemplate.tsx`
- [ ] Uncomment `import InspectionModal` and `import QuoteForm`
- [ ] Uncomment `<InspectionModal />`
- [ ] Uncomment sidebar `<QuoteForm variant="sidebar">`
- [ ] Change content width back from `w-full` to `lg:w-2/3`

### 7. Privacy Policy — `src/app/privacy-policy/page.tsx`
- [ ] Uncomment `import InspectionModal`
- [ ] Uncomment `<InspectionModal />`

### 8. Terms & Conditions — `src/app/terms-and-conditions/page.tsx`
- [ ] Uncomment `import InspectionModal`
- [ ] Uncomment `<InspectionModal />`

### 9. Confirmation — `src/app/confirmation/page.tsx`
- [ ] Uncomment `import InspectionModal`
- [ ] Uncomment `<InspectionModal />`

## Quick Search
```bash
grep -rn "TODO: Re-enable after A2P approval" src/
```
