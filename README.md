# greig.cc
Refreshingly honest advice for graphic designers &amp; other creative types, from designer James Greig.

A Jekyll-powered website, built with the [Tachyons CSS toolkit](http://tachyons.io/).

## Requirements
OSX or macOS
  Homebrew

## Getting started

Install Jekyll
`sudo gem install jekyll`

Check rubygems is in your paths
`sudo nano /etc/paths`

Install Ruby
We're going to use rbenv to install and manage our Ruby versions.

### Run the following commands in your Terminal, starting with...
`brew install rbenv ruby-build`

### Add rbenv to bash so that it loads every time you open a terminal
`echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile`
`source ~/.bash_profile`

### Install Ruby
`rbenv install 2.5.0`
`rbenv global 2.5.0`
`ruby -v`

### Install bundle (to manage your gems)
`gem install bundler`

### Install gems
`bundle install`

**Help installing Jekyll on Mac**
See https://spinalhdl.github.io/SpinalDoc/mydoc_install_jekyll_on_mac/ for pointers.
Use `bundle env` to check your local environment


----

## Basic usage
Start Jekyll and watch for changes
`jekyll serve --watch`

**BETTER**
`bundle exec jekyll serve`

----

## Purify CSS

**Requirements**
* NPM
* Gulp https://gulpjs.com/
* Purify CSS https://github.com/purifycss/purifycss

Purify the CSS
`gulp purify-css`

If you have permission problems installing Ruby gems, use the --user-install option
`gem install livereload --user-install`

This works in the CLI (?)
`purifycss assets/style.css _site/**/*.html  -m -o "style-purified.css`
