# Owner Setup Checklist

Pre-launch checklist for the repository owner before making the ECZ-ID Developer Gateway live.

## Repository Configuration

- [ ] Repository is set to the correct visibility (public for GitHub Pages)
- [ ] Repository description is set: "ECZ-ID Developer Gateway — Trust infrastructure for the machine economy"
- [ ] Repository topics are set: `ecz-id`, `trust-infrastructure`, `machine-economy`, `developer-gateway`
- [ ] Default branch is `main`
- [ ] Branch protection rules are configured for `main`
- [ ] Required reviewers are set for pull requests

## GitHub Pages

- [ ] GitHub Pages is enabled in repository Settings > Pages
- [ ] Source is set to "GitHub Actions"
- [ ] Custom domain is configured (if applicable)
- [ ] HTTPS is enforced
- [ ] `.nojekyll` file is present in `public/`

## DNS & Domain

- [ ] Custom domain DNS records are configured (if using custom domain)
- [ ] CNAME file is added to `public/` (if using custom domain)
- [ ] SSL certificate is provisioned and active
- [ ] Domain verification is complete in GitHub settings

## Content Review

- [ ] All 19 pages render correctly
- [ ] All internal links work (no 404s)
- [ ] All external links point to correct TrustOps and Resolver URLs
- [ ] No placeholder text remains
- [ ] All data files contain accurate information
- [ ] OG image is production-ready (replace placeholder)
- [ ] Favicon renders correctly across browsers

## SEO & Metadata

- [ ] `metadataBase` URL in `layout.tsx` is correct
- [ ] Open Graph tags are correct
- [ ] Twitter Card tags are correct
- [ ] `robots.txt` sitemap URL is correct
- [ ] Page titles and descriptions are accurate

## Security

- [ ] No secrets or API keys in the codebase
- [ ] No internal URLs exposed
- [ ] External links use `rel="noopener noreferrer"`
- [ ] Content Security Policy is appropriate

## Performance

- [ ] Build completes without errors
- [ ] Static export generates all pages
- [ ] Page load times are acceptable
- [ ] Images are optimised
- [ ] No unnecessary JavaScript bundles

## Monitoring

- [ ] Analytics are configured (if applicable)
- [ ] Error monitoring is set up (if applicable)
- [ ] Uptime monitoring is configured (if applicable)

## Final Steps

- [ ] Review complete — all checks pass
- [ ] Team sign-off obtained
- [ ] TrustOps team notified of launch
- [ ] Resolver team notified of launch
- [ ] Push to `main` to trigger deployment
- [ ] Verify deployed site is accessible
- [ ] Verify all pages render correctly in production
