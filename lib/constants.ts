export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.savarun.com';

export const COMPANY = {
  legalName: 'SAWARUN TECH PRIVATE LIMITED',
  productName: 'SAVARUN',
  corporateUrl: 'https://www.savarun.in',
  cin: '[CIN_NUMBER]',
  gstin: '[GSTIN_NUMBER]',
  contactEmail: '[CONTACT_EMAIL]',
  registeredAddress: '[REGISTERED_ADDRESS]',
} as const;

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
  aiFashionIntelligence: '/ai-fashion-intelligence/',
  blog: '/blog/',
  careers: '/careers/',
  contact: '/contact/',
  privacy: '/privacy/',
  terms: '/terms/',
} as const;

export type RouteKey = keyof typeof ROUTES;
