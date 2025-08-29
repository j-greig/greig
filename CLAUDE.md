# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

James Greig's personal blog (greig.cc) - Jekyll 4.x website providing "refreshingly honest advice for graphic designers & creative types". Built with Tachyons CSS, deployed automatically via Netlify.

**Recent**: First post in 5 years - "How to Birth a Symbient" (Aug 2025) about Wib&Wob's world-first AI grant achievement.

## Development Environment

### Local Development
```bash
bundle exec jekyll serve --livereload  # Start dev server
open http://localhost:4000              # View site
```

### Production Environment
- **Hosting**: Netlify (auto-deploy from `main` branch)
- **Ruby**: 2.7.2 (Netlify requirement)
- **Jekyll**: 4.x (Jekyll 4.4.1 locally)
- **Deploy**: Push to `main` → automatic build & deploy

### CSS Management
```bash
npm run purify-css    # Modern PurgeCSS
gulp purify-css      # Legacy gulp task
```

## Architecture

### Content Structure
- **Posts**: `_posts/YYYY-MM-DD-title.md` (165+ articles since 2012)
- **Pages**: Root-level `.md` files (about, contact, newsletter, etc.)
- **Media**: `/media/` directory for images
- **Categories**: life, design, freelancing, cycling, ai

### Jekyll Structure
- **Layouts**: `_layouts/` (default, post, home, page, categories, etc.)
- **Includes**: `_includes/` (nav, footer, newsletter-signup, style_snippets)
- **Config**: `_config.yml` (pagination, plugins, site metadata)
- **Assets**: `assets/style.css` (33k+ lines Tachyons + custom CSS)

### Key Features
- **Pagination**: jekyll-paginate-v2 (10 posts/page)
- **Newsletter**: Mailchimp integration via `_includes/newsletter-signup.html`
- **Responsive**: Tachyons utility classes (`f1`, `mw7`, `pa3`, etc.)
- **Social**: Open Graph images via frontmatter `sharingimage:`

### Post Frontmatter Template
```yaml
---
title: "Your Post Title"
date: YYYY-MM-DDTHH:MM:SS+00:00
layout: post
permalink: /custom-url-slug/
categories:
  - life
  - design
sharingimage: https://greig.cc/media/your-image.jpg
---
```

## Dependencies

### Ruby Stack
- Ruby 2.7.2 (production), 3.2.2+ (local)
- Jekyll ~4.3 (4.4.1 locally)
- Plugins: jekyll-paginate-v2, jekyll-sitemap, jekyll-feed, jekyll-twitter-plugin
- Ruby 3.x compatibility: rexml, webrick gems

### Node.js Stack  
- Modern PurgeCSS (replaces deprecated gulp-purifycss)
- Zero vulnerabilities (fixed Aug 2025)

## Common Workflows

### Adding New Posts
1. Create: `_posts/$(date +%Y-%m-%d)-title.md`
2. Add frontmatter (see template above)
3. Write Markdown content
4. Add images to `/media/` if needed
5. Commit & push → auto-deploys

### Newsletter CTA Management
- Main component: `_includes/newsletter-signup.html`
- Barebones version: `_includes/newsletter-signup-barebones.html`
- Updated Aug 2025: removed "each Sunday" commitment

### Styling Guidelines
- **Prefer**: Tachyons utility classes in templates
- **Avoid**: Direct `assets/style.css` edits (33k lines)
- **Custom CSS**: Add to `_includes/style_snippets.html`
- **Framework**: Tachyons atomic CSS approach

## File Locations
- **Main CSS**: `assets/style.css` (Tachyons + custom)
- **Config**: `_config.yml`, `Gemfile`, `package.json`
- **Build**: `gulpfile.js` (modern PurgeCSS setup)
- **Deploy**: `netlify.tomyl` (redirect rules)
- **Content**: `_posts/`, root `.md` files, `/media/`