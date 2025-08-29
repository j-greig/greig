# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is James Greig's personal blog (greig.cc) - a Jekyll-powered website providing "refreshingly honest advice for graphic designers & creative types". Built with Tachyons CSS toolkit for atomic styling.

## Development Commands

### Local Development
- Start Jekyll dev server: `bundle exec jekyll serve`
- View site: http://localhost:4000/
- Jekyll watches for changes automatically

### CSS Management  
- Purify CSS (remove unused): `gulp purify-css`
- Manual CSS purification: `purifycss assets/style.css _site/**/*.html -m -o "style-purified.css"`

### Build Process
- Jekyll builds static site to `_site/` directory
- No separate build command needed - Jekyll handles compilation

## Architecture

### Content Structure
- **Posts**: Blog articles in `_posts/` using YYYY-MM-DD-title.md format
- **Pages**: Static pages (about, contact, etc.) as `.md` files in root
- **Media**: Images stored in `/media/` directory
- **Categories**: Posts categorized (life, cycling, design, freelance, etc.)

### Jekyll Structure
- **Layouts**: `_layouts/` (default, post, home, page, etc.)
- **Includes**: `_includes/` (reusable components like nav, footer, newsletter signup)
- **Config**: `_config.yml` with pagination, plugins, site settings
- **Styling**: Tachyons CSS framework via `assets/style.css`

### Key Features
- Pagination via jekyll-paginate-v2 plugin (10 posts per page)
- Newsletter signup integration throughout site
- Category-based post organization
- Social sharing images via frontmatter `sharingimage:`
- Typography mixing serif content with sans-serif headings
- Responsive design using Tachyons utility classes

### Post Frontmatter Structure
```yaml
title: "Post Title"
date: YYYY-MM-DDTHH:MM:SS+00:00
layout: post
permalink: /custom-url/
categories:
  - category1
  - category2
sharingimage: https://greig.cc/media/image.jpg
```

### Styling Approach
- Tachyons atomic CSS framework
- Utility-first approach with classes like `f1`, `mw7`, `pa3`, `mb4`
- Custom post content styling via includes/style_snippets.html
- Uses CSS variables for theming (serif/sans-serif font stacks)

## Dependencies

### Ruby/Jekyll
- Ruby 2.4.2
- Jekyll 3.3.0  
- Key plugins: jekyll-paginate-v2, jekyll-sitemap, jekyll-feed, jekyll-livereload

### Node.js/Gulp
- Gulp for CSS purification
- gulp-purifycss for removing unused CSS

## Common Tasks

### Adding New Posts
1. Create file in `_posts/` with format `YYYY-MM-DD-title.md`
2. Add required frontmatter (title, date, layout: post, categories)
3. Write content in Markdown
4. Add images to `/media/` if needed

### Styling Changes
- Avoid editing `assets/style.css` directly (large file, mix of Tachyons + custom)
- Use Tachyons utility classes in templates
- Custom styles go in `_includes/style_snippets.html`

### Newsletter Integration
- Uses `_includes/newsletter-signup.html` and `_includes/newsletter-signup-barebones.html`
- Integrated into post layout and various pages

## File Locations

- Main CSS: `assets/style.css` (33k+ lines, includes full Tachyons)
- Site config: `_config.yml`
- Dependencies: `Gemfile`, `package.json`
- Build tool: `gulpfile.js`