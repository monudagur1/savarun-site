export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.savarun.com';

export const COMPANY = {
  legalName: 'SAWARUN TECH PRIVATE LIMITED',
  productName: 'SAVARUN',
  corporateUrl: 'https://www.savarun.in',
  contactEmail: 'admin@savarun.com',
} as const;

export const COMPANY_DETAILS_LINE = 'Company registration details available on request.';

export const PRODUCT = {
  name: 'SAVARUN',
  status: 'Coming Soon',
  tagline: 'Fashion Intelligence',
  description:
    'An AI fashion product designed to help you understand, score, and elevate your personal style.',
} as const;

export const FOOTER_LINE =
  'SAVARUN is a product of SAWARUN TECH PRIVATE LIMITED. Registered in India.';

export const ROUTES = {
  home: '/',
  vision: '/vision/',
  technology: '/technology/',
  howItWorks: '/how-it-works/',
  features: '/features/',
  demo: '/demo/',
  trends: '/trends/',
  aiFashionIntelligence: '/ai-fashion-intelligence/',
  blog: '/blog/',
  careers: '/careers/',
  contact: '/contact/',
  privacy: '/privacy/',
  terms: '/terms/',
} as const;

export type RouteKey = keyof typeof ROUTES;
