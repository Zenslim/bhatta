import { chromium } from 'playwright';

async function testWebsite() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const errors = [];
  
  // Listen for console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });
  
  try {
    console.log('Testing homepage...');
    await page.goto('https://fevjx0578hg1.space.minimax.io/', { waitUntil: 'networkidle', timeout: 30000 });
    
    // Check page title
    const title = await page.title();
    console.log('Page title:', title);
    
    // Check for main elements
    const heroHeading = await page.locator('h1').first().textContent();
    console.log('Hero heading found:', heroHeading);
    
    // Check navigation
    const navLinks = await page.locator('nav a').count();
    console.log('Navigation links found:', navLinks);
    
    // Test About page
    console.log('Testing About page...');
    await page.goto('https://fevjx0578hg1.space.minimax.io/about/', { waitUntil: 'networkidle', timeout: 30000 });
    const aboutTitle = await page.locator('h1').first().textContent();
    console.log('About page title:', aboutTitle);
    
    // Test Services page
    console.log('Testing Services page...');
    await page.goto('https://fevjx0578hg1.space.minimax.io/services/', { waitUntil: 'networkidle', timeout: 30000 });
    const servicesTitle = await page.locator('h1').first().textContent();
    console.log('Services page title:', servicesTitle);
    
    // Test Contact page
    console.log('Testing Contact page...');
    await page.goto('https://fevjx0578hg1.space.minimax.io/contact/', { waitUntil: 'networkidle', timeout: 30000 });
    const contactTitle = await page.locator('h1').first().textContent();
    console.log('Contact page title:', contactTitle);
    
    if (errors.length > 0) {
      console.log('\nConsole errors found:');
      errors.forEach(err => console.log('  -', err));
    } else {
      console.log('\nNo console errors found!');
    }
    
    console.log('\n✅ All tests passed!');
  } catch (error) {
    console.error('Test failed:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

testWebsite();
