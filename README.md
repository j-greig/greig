# greig.cc

Personal blog of James Greig - "Refreshingly honest advice for graphic designers & creative types". Jekyll-powered site with Tachyons CSS, automatically deployed via Netlify.

**🌐 Live site**: [greig.cc](https://greig.cc)  
**📝 Latest**: [How to Birth a Symbient](https://greig.cc/how-to-birth-a-symbient/) (Aug 2025)

## Quick Start

### Prerequisites
- Ruby 2.7.2+ (managed via rbenv recommended)
- Node.js (for CSS processing)
- Bundler gem

### Local Development
```bash
# Install dependencies
bundle install
npm install

# Start development server
bundle exec jekyll serve --livereload

# View site
open http://localhost:4000
```

### Content Creation
```bash
# Add new blog post
touch _posts/$(date +%Y-%m-%d)-your-post-title.md

# Add images
cp your-image.jpg media/
```

## Architecture

**Framework**: Jekyll 4.x + Tachyons CSS  
**Hosting**: Netlify (auto-deploy from `main`)  
**Ruby**: 2.7.2 (production) | Local can use 3.x  
**Content**: Markdown posts in `_posts/`, pages as `.md` files  

## Build Tools

```bash
# CSS purification (removes unused Tachyons)
npm run purify-css
# OR legacy gulp task
gulp purify-css
```

## Deployment

**Automatic**: Push to `main` → Netlify builds & deploys  
**Manual**: Retry deploy in [Netlify dashboard](https://app.netlify.com)  

---

*For detailed development guidance, see [CLAUDE.md](./CLAUDE.md)*