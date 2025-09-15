#!/bin/bash

# Exit on error
set -e

# Build the project
echo "Building the project..."
npm run build

# Create a temporary directory for the deployment
echo "Preparing deployment..."
rm -rf deploy
git clone -b gh-pages --single-branch https://github.com/drkrndr/portfolio-site.git deploy

# Copy the built files
cp -r dist/* deploy/

# Commit and push the changes
cd deploy
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# Clean up
cd ..
rm -rf deploy

echo "Deployment successful!"
echo "Your site should be live at: https://drkrndr.github.io/portfolio-site/"bin/bash

# Portfolio Deployment Script
# Builds and deploys the portfolio to GitHub Pages

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the project root directory."
    exit 1
fi

# Check if git is clean
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Warning: You have uncommitted changes. Commit or stash them first."
    read -p "Continue anyway? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed! dist directory not found."
    exit 1
fi

# Copy dist contents to root for GitHub Pages
echo "📁 Copying build files to root..."

# Backup current index.html (development version)
if [ -f "index.html" ]; then
    cp index.html index-dev.html
fi

# Copy production files to root
cp dist/index.html .
cp -r dist/assets . 2>/dev/null || echo "No assets directory to copy"

# Copy other static files from dist
find dist -maxdepth 1 -type f ! -name "index.html" -exec cp {} . \;

# Ensure .nojekyll exists
touch .nojekyll

# Add and commit changes
echo "📤 Committing changes..."
git add .
git add .nojekyll

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to deploy."
else
    git commit -m "Deploy: $(date +'%Y-%m-%d %H:%M:%S')"

    # Push to GitHub
    echo "🌐 Pushing to GitHub..."
    git push origin main

    echo "✅ Deployment complete!"
    echo "🌍 Site will be available at: https://drkrndr.github.io/portfolio-site/"
    echo "⏳ It may take a few minutes for changes to appear on GitHub Pages."
fi

# Restore development index.html
if [ -f "index-dev.html" ]; then
    mv index-dev.html index.html
    echo "🔄 Restored development index.html"
fi

echo "🎉 Done! Your portfolio has been deployed."
