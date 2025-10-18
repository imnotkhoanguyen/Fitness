#!/bin/bash

# Helper script to push code to GitHub
# Run this script from the terminal using: bash git-push.sh

echo "🚀 Pushing to GitHub..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📝 Initializing git repository..."
    git init
fi

# Add all files
echo "➕ Adding files..."
git add .

# Commit
echo "💾 Committing changes..."
git commit -m "Initial commit: Bilingual Astro website for The Energy Factory - Long Khanh coaching business"

# Add remote if not exists
if ! git remote | grep -q "origin"; then
    echo "🔗 Adding remote origin..."
    git remote add origin https://github.com/imnotkhoanguyen/energy-factory-longkhanh.git
fi

# Push to GitHub
echo "⬆️ Pushing to GitHub..."
git push -u origin main || git push -u origin master

echo "✅ Done! Your code is now on GitHub at:"
echo "   https://github.com/imnotkhoanguyen/energy-factory-longkhanh"
