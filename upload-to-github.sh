#!/bin/bash

echo "🚀 Priyanka Portfolio - GitHub Upload Script"
echo "============================================="
echo ""

# Check if repository exists by trying to push
echo "Attempting to push to Priyanka-Portfolio repository..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ SUCCESS! Portfolio uploaded to GitHub successfully!"
    echo ""
    echo "🌐 Your portfolio is now available at:"
    echo "   Repository: https://github.com/priyanka8-sys/Priyanka-Portfolio"
    echo ""
    echo "📝 Next steps:"
    echo "1. Go to repository Settings → Pages"
    echo "2. Enable GitHub Pages with 'main' branch"
    echo "3. Your live site will be: https://priyanka8-sys.github.io/Priyanka-Portfolio"
    echo ""
    echo "🎉 Congratulations! Your professional portfolio is now live!"
else
    echo "❌ Repository not found. Please create the repository first:"
    echo ""
    echo "1. Go to https://github.com/priyanka8-sys"
    echo "2. Click 'New repository'"
    echo "3. Name: Priyanka-Portfolio"
    echo "4. Description: Modern, responsive portfolio website for Priyanka Singh Sengar"
    echo "5. Make it Public"
    echo "6. Do NOT initialize with README"
    echo "7. Click 'Create repository'"
    echo ""
    echo "Then run this script again: ./upload-to-github.sh"
fi
