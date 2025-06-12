const SitemapGenerator = require('sitemap-generator');

// ✅ Replace with your deployed website URL (must be publicly accessible)
const generator = SitemapGenerator('https://tinttekplus.com', {
  stripQuerystring: false,
  filepath: './public/sitemap.xml', // Or just './sitemap.xml' if not using a public folder
});

// Optional: log when done
generator.on('done', () => {
  console.log('✅ Sitemap generated at ./public/sitemap.xml');
});

// Start the crawler
generator.start();
