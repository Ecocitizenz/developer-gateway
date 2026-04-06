# Content Governance

Rules for maintaining content quality and accuracy on the ECZ-ID Developer Gateway.

## Core Principles

### 1. Gateway, Not Authority

This site is a discovery and onboarding gateway. It does NOT:
- Provision identities (that's TrustOps)
- Verify identities (that's Resolver)
- Handle pricing or sales (that's TrustOps)
- Process payments or checkout (that's TrustOps)
- Issue credentials (that's TrustOps)

Every page must route users to the appropriate authority (TrustOps or Resolver) for actions.

### 2. Accuracy Over Aspiration

Only state what is true and verifiable:
- Do not claim capabilities that don't exist yet
- Do not imply partnerships or endorsements without verification
- Do not quote statistics without sources
- Do not make comparative claims against competitors
- Use "designed to" or "built for" rather than unqualified absolutes

### 3. Tone Consistency

All content must maintain the ECZ-ID tone:
- **Safe:** The reader should feel confident, not anxious
- **Calm:** No urgency tactics, no fear-based messaging
- **Precise:** Specific, technical, accurate
- **Premium:** High-quality language, no casual slang
- **Infrastructure-grade:** Serious, durable, foundational

See [Trust Language Rules](trust-language-rules.md) for detailed language guidance.

## Content Categories

### Page Content

- Each page has a clear purpose and audience
- Headlines are descriptive, not clickbait
- Body text is concise and scannable
- Technical details are accurate and current
- CTAs are clear and route to the correct destination

### Data Files

- JSON data files are the source of truth for structured content
- Changes to data files should be reviewed by the content owner
- New entries must include all required fields
- Descriptions should follow tone guidelines
- Categories and tags should be consistent

### Component Content

- Reusable components contain minimal hardcoded text
- Labels, descriptions, and CTAs should be passed as props where possible
- Shared messaging (footer, CTA sections) should be consistent across the site

## Review Process

### Who Reviews

1. **Content Owner:** Reviews all content changes for accuracy, tone, and business alignment
2. **Technical Reviewer:** Reviews data accuracy, link validity, and technical claims
3. **Design Reviewer:** Reviews visual consistency and responsive behaviour

### What Gets Reviewed

- All new pages
- All changes to existing page content
- All changes to data files
- All changes to shared components that contain text
- All changes to metadata (titles, descriptions, OG tags)

### Review Criteria

- [ ] Follows tone guidelines
- [ ] Follows trust language rules
- [ ] Routes to correct authority (TrustOps/Resolver)
- [ ] No hardcoded prices or fake verification
- [ ] Technically accurate
- [ ] Links work correctly
- [ ] Responsive design maintained
- [ ] Accessibility maintained

## Content Updates

### Adding a New Page

1. Create the page component in the appropriate directory
2. Add metadata (title, description, OG tags)
3. Ensure navigation includes the new page
4. Update the sitemap if needed
5. Follow the publishing checklist

### Updating Domain Data

1. Edit the relevant JSON file in `src/data/`
2. Verify all required fields are present
3. Check that descriptions follow tone guidelines
4. Test that pages using the data render correctly

### Updating Navigation

1. Edit `src/components/Header.tsx`
2. Verify all links are correct
3. Test dropdown behaviour on desktop and mobile
4. Verify footer links match if applicable

## Prohibited Content

- Pricing information (all pricing via TrustOps)
- Checkout or payment flows
- Fake verification or mock proofs
- Competitor comparisons
- Unverified statistics or claims
- Speculative future capabilities
- Internal system details or architecture
- API keys, credentials, or secrets
- Personal data of any kind
