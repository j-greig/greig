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

To do this, run the following commands in your Terminal:
`brew install rbenv ruby-build`

## Add rbenv to bash so that it loads every time you open a terminal
`echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile`
`source ~/.bash_profile`

## Install Ruby
`rbenv install 2.5.0`
`rbenv global 2.5.0`
`ruby -v`


## Basic usage
Start Jekyll and watch for changes
`jekyll build --watch`
