#!/bin/bash

# Exit on any error
set -e

# Build the project
echo "Building the project..."
npm run build

# Navigate into the build output directory
cd dist

# Add a .nojekyll file to prevent Jekyll from running on GitHub Pages
touch .nojekyll

# Initialize a new git repository and add the build files
git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# Force push to the gh-pages branch
echo "Deploying to GitHub Pages..."
git push -f git@github.com:drkrndr/portfolio-site.git main:gh-pages

# Clean up
cd -

echo "Deployment successful!"
echo "Your site is live at: https://drkrndr.github.io/portfolio-site/"
