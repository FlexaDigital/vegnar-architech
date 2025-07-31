const fs = require('fs');
const https = require('https');

const SITE_URL = 'https://vegnararch.com';
const WORDPRESS_API = 'https://cms-arch.flexadigital.com/wp-json/wp/v2';

// Helper function to make HTTPS requests
function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (resp) => {
      let data = '';
      resp.on('data', (chunk) => { data += chunk; });
      resp.on('end', () => {
        try {
          if (resp.statusCode !== 200) {
            console.warn(`API returned status ${resp.statusCode} for ${url}`);
            resolve([]);
            return;
          }
          resolve(JSON.parse(data));
        } catch (error) {
          console.warn(`Failed to parse JSON from ${url}:`, error.message);
          resolve([]);
        }
      });
    }).on('error', (error) => {
      console.warn(`Request failed for ${url}:`, error.message);
      resolve([]);
    });
  });
}

// Generate sitemap XML
async function generateSitemap() {
  try {
    console.log('Fetching data from WordPress API...');
    
    // Fetch all blog posts
    const posts = await httpsGet(`${WORDPRESS_API}/posts?per_page=100&_embed`);
    console.log(`Fetched ${posts.length} posts`);

    // Start XML content
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Static Pages -->
  <url>
    <loc>${SITE_URL}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/products</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${SITE_URL}/insights</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${SITE_URL}/exports</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/partner</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${SITE_URL}/our-mission-vision</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${SITE_URL}/catalogs</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Blog Posts -->
`;

    // Add blog posts if available
    if (posts.length > 0) {
      posts.forEach(post => {
        xml += `  <url>
    <loc>${SITE_URL}/insights/${post.slug}</loc>
    <lastmod>${post.modified ? post.modified.split('T')[0] : new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
`;
      });
    }

    // Close XML
    xml += '</urlset>';

    // Write to file
    fs.writeFileSync('public/sitemap.xml', xml);
    console.log('Sitemap generated successfully!');

  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the generator
generateSitemap();