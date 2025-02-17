/** @type {import('@eventcatalog/core/bin/eventcatalog.config').Config} */
export default {
  title: 'EventCatalog',
  tagline: 'Discover, Explore and Document your Event Driven Architectures',
  organizationName: 'Your Company',
  homepageLink: 'https://ramesh-dharmalingam.github.io/eventcatalog/',
  editUrl: 'https://github.com/ramesh-dharmalingam/eventcatalog/edit/main',
  // By default set to false, add true to get urls ending in /
  trailingSlash: false,
  // Change to make the base url of the site different, by default https://{website}.com/docs,
  // changing to /company would be https://{website}.com/company/docs,
  base: '/eventcatalog',
  // Customize the logo, add your logo to public/ folder
  logo: {
    alt: 'EventCatalog Logo',
    src: '/logo.png',
    text: 'EventCatalog'
  },
  docs: {
    sidebar: {
      // Should the sub heading be rendered in the docs sidebar?
      showPageHeadings: true
    }
  }
}
