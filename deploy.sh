#!/bin/bash
# Deploy script for GitHub Pages

echo "Building static site..."
npm run build

echo "Moving to gh-pages branch..."
git checkout gh-pages

echo "Copying build files..."
cp -r out/* .

echo "Adding changes..."
git add .

echo "Committing changes..."
git commit -m "Deploy ED24 website $(date +%Y-%m-%d)"

echo "Pushing to GitHub..."
git push origin gh-pages

echo "Returning to main branch..."
git checkout main

echo "Deployment complete!"
echo "Your site will be live at: https://raviparaliyarp.github.io/ED24/"

