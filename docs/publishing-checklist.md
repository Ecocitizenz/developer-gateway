# Publishing Checklist

Checklist for publishing updates to the ECZ-ID Developer Gateway.

## Before Publishing

### Content Quality

- [ ] New or updated content follows [Content Governance](content-governance.md) rules
- [ ] Language follows [Trust Language Rules](trust-language-rules.md)
- [ ] Tone is safe, calm, precise, premium, infrastructure-grade
- [ ] No speculative claims, hype, or unverifiable statements
- [ ] All CTAs route correctly (TrustOps for provisioning, Resolver for verification)
- [ ] No hardcoded prices, checkout flows, or fake verification

### Technical Quality

- [ ] Local development server runs without errors (`npm run dev`)
- [ ] Build completes successfully (`npm run build`)
- [ ] All pages generate in static export (check `out/` directory)
- [ ] No TypeScript errors
- [ ] No console warnings or errors
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Accessibility basics verified (keyboard navigation, screen reader basics)

### Data Integrity

- [ ] JSON data files are valid (no syntax errors)
- [ ] Agent data is accurate and complete
- [ ] Starter kit data matches current offerings
- [ ] Domain data reflects current ECZ-ID coverage
- [ ] Passport and package data is current

### Links

- [ ] All internal links work (no 404s)
- [ ] All external links are correct and accessible
- [ ] Navigation dropdowns link to correct pages
- [ ] Footer links are complete and correct

## Publishing Process

1. Create a feature branch from `main`
2. Make changes and test locally
3. Run `npm run build` to verify static export
4. Create a pull request with clear description
5. Request review from content owner
6. After approval, merge to `main`
7. GitHub Actions will automatically build and deploy
8. Verify deployed changes on the live site

## After Publishing

- [ ] Live site reflects changes correctly
- [ ] No visual regressions
- [ ] Page titles and metadata are correct
- [ ] Performance is acceptable
- [ ] Notify relevant teams of content changes

## Rollback Procedure

If issues are discovered after publishing:

1. Revert the merge commit on `main`
2. Push the revert to trigger redeployment
3. Verify the rollback on the live site
4. Create a new branch to fix the issue
5. Follow the normal publishing process for the fix
