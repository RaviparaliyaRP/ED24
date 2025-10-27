# Deploy ED24 website to GitHub Pages
# Run this script after making changes

Write-Host "Building static site..." -ForegroundColor Green
npm run build

Write-Host "Switching to gh-pages branch..." -ForegroundColor Green
git checkout gh-pages

Write-Host "Copying build files..." -ForegroundColor Green
Copy-Item -Path "out\*" -Destination "." -Recurse -Force

Write-Host "Adding changes..." -ForegroundColor Green
git add .

Write-Host "Committing changes..." -ForegroundColor Green
$date = Get-Date -Format "yyyy-MM-dd"
git commit -m "Deploy ED24 website $date"

Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push origin gh-pages

Write-Host "Returning to main branch..." -ForegroundColor Green
git checkout main

Write-Host "Deployment complete!" -ForegroundColor Green
Write-Host "Your site will be live at: https://raviparaliyarp.github.io/ED24/" -ForegroundColor Cyan

