#!/bin/bash

# Exit on error
set -e

# Build the project
echo "Building the project..."
npm run build

# Create a temporary directory for the deployment
echo "Preparing deployment..."
rm -rf deploy
git clone -b gh-pages --single-branch git@github.com:drkrndr/portfolio-site.git deploy

# Copy the built files
cp -r dist/* deploy/

# Commit and push the changes
cd deploy
# Add a .nojekyll file to disable Jekyll processing on GitHub Pages
touch .nojekyll
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# Clean up
cd ..
rm -rf deploy

echo "Deployment successful!"
echo "Your site should be live at: https://drkrndr.github.io/portfolio-site/"
