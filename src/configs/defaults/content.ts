import { type Metadata } from 'next'

import { type ToolbarConfig } from '@templates/Header/components/ToolbarMenu'

const content = {
  siteLogo: { url: '/logo.svg', width: 36, height: 36 },
  siteMobileLogo: { url: '/logo.svg', width: 36, height: 36 },
  siteFooterLogo: { url: '/logo-footer.svg', width: 80, height: 100 },
  siteSplashscreen: '/splashscreen.webp',
  loginSplashscreen: '/splashscreen.webp',
  siteName: 'Bruno Fine Properties',
  siteDefaultBrokerageName: 'Bruno Fine Properties',
  siteKeywords: [
    'Spring TX homes',
    'Houston real estate',
    'Bruno Fine Properties',
    'Spring Texas homes for sale',
    'Houston luxury real estate',
    'The Woodlands homes',
    'foreclosure specialist Houston'
  ],
  siteDescription:
    'Bruno Fine Properties helps families find the right home in Spring, The Woodlands, and Greater Houston. Search every HAR listing with expert guidance from a distressed-property specialist.',
  siteFooterDescription:
    'Bruno Fine Properties is a boutique Houston-area brokerage specializing in Spring, The Woodlands, and the north Houston MSA. We pair every client with a licensed agent who knows the neighborhoods, the schools, and the deal.',
  siteFullscreenFooter: '',
  homepageHeroBlock: {
    title: 'Find Your Perfect Home in Spring, Texas',
    subTitle:
      'Every HAR listing. Real-time data. An agent who knows the north Houston market inside and out. Start your search with Bruno Fine Properties.'
  },

  siteMetadata: {
    title: {
      template: 'Bruno Fine Properties | %s',
      default: 'Bruno Fine Properties — Spring, TX & Greater Houston Homes for Sale'
    },
    metadataBase: new URL('https://search.brunofineproperties.com/'),
    alternates: {
      canonical: '/'
    },
    generator: 'Next.js',
    applicationName: 'Bruno Fine Properties',
    referrer: 'origin-when-cross-origin',
    keywords: [
      'Spring TX homes',
      'Houston real estate',
      'Bruno Fine Properties',
      'Spring Texas homes for sale',
      'Houston luxury real estate',
      'The Woodlands homes'
    ],
    creator: 'Marcus Bruno',
    publisher: 'Bruno Fine Properties',
    description:
      'Search every HAR-listed home in Spring, TX, The Woodlands, and Greater Houston. Real-time data, expert local guidance, and a distressed-property specialist on your side.',
    icons: {
      icon: '/favicon.ico'
    }
  } as Metadata,
  estimateMetadata: {
    title: 'Free Home Valuation | Bruno Fine Properties',
    description:
      'Get an AI-powered valuation of your Spring, TX or Greater Houston home — with neighborhood trends, comps, and market data from Bruno Fine Properties.'
  } as Metadata,
  estimateResultMetadata: {
    title: '$ Home Valuation Report | Bruno Fine Properties',
    description:
      'Your comprehensive $ home valuation from Bruno Fine Properties. AI-powered insights, neighborhood trends, and Houston market data to help you make informed decisions.'
  } as Metadata,
  missingPropertyMetadata: {
    title: "This listing isn't available right now.",
    description:
      'The listing you are looking for is no longer active or has been removed from HAR. Browse active listings at Bruno Fine Properties.'
  } as Metadata,
  restrictedPropertyTitle:
    'This listing is only visible to registered users due to HAR/MLS compliance. Sign up in seconds to view full details.',
  estimateBoardRegulations:
    'Data courtesy of the Houston Association of REALTORS® (HAR). Information is deemed reliable but not guaranteed.',
  toolbarMenuItems: [
    { label: 'Listings', url: '/properties' },
    { label: 'Neighborhoods', url: '/neighborhoods' },
    { label: 'Blog', url: 'https://brunofineproperties.com/blog' },
    { label: 'About', url: 'https://brunofineproperties.com/about' },
    { label: '(281) 771-1670', url: 'tel:+12817711670' },
    { label: 'Free Consultation', url: 'https://brunofineproperties.com/contact' }
  ] as ToolbarConfig[]
}

export default content
