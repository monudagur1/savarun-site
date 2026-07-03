export const navItems = [
  { label: 'Vision', href: '/vision/' },
  { label: 'Technology', href: '/technology/' },
  { label: 'How It Works', href: '/how-it-works/' },
  { label: 'Features', href: '/features/' },
  { label: 'Demo', href: '/demo/' },
  { label: 'Trends', href: '/trends/' },
  { label: 'AI', href: '/ai-fashion-intelligence/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const features = [
  {
    index: '01',
    title: 'Intelligent Outfit Grid',
    description:
      'SAVARUN will organize every piece you own into a visual wardrobe matrix — searchable, combinable, and designed to surface pairings your closet may be hiding.',
  },
  {
    index: '02',
    title: 'Gallery Sync',
    description:
      'The app will import looks from your camera roll, extract garments from context, and build your digital closet with minimal manual entry.',
  },
  {
    index: '03',
    title: 'AI Fit Scoring',
    description:
      'A scoring engine will evaluate proportion, colour harmony, and occasion fit — returning actionable notes so every outfit can be more deliberate.',
  },
] as const;

export const steps = [
  {
    step: '01',
    title: 'Import your wardrobe',
    description: 'Connect your gallery. SAVARUN will read looks and extract garments automatically.',
  },
  {
    step: '02',
    title: 'Build your grid',
    description: 'Every piece will land in a visual matrix — organized and always current.',
  },
  {
    step: '03',
    title: 'Score every outfit',
    description: 'AI will evaluate fit and harmony, then suggest what to wear next.',
  },
] as const;

export const technologyPillars = [
  {
    title: 'Visual understanding',
    description: 'Computer vision designed to recognize garments, silhouettes, and context from your photos.',
  },
  {
    title: 'Style scoring',
    description: 'Algorithms planned to evaluate proportion, palette, and occasion — not to replace taste, but to amplify it.',
  },
  {
    title: 'Privacy by design',
    description: 'Your wardrobe data will remain yours. On-device processing is a core architectural principle.',
  },
] as const;

export const faqItems = [
  {
    question: 'When will SAVARUN launch?',
    answer:
      'SAVARUN is coming soon. Join the waitlist to be notified when we open early access on iOS and Android.',
  },
  {
    question: 'Is the demo on this site real AI?',
    answer:
      'The fit-scoring demo is simulated. The Fashion Trends page uses Google Gemini Flash for illustrative AI-generated summaries — not verified live fashion feeds or retail data.',
  },
  {
    question: 'Will my photos be private?',
    answer:
      'Privacy is foundational to how we are building SAVARUN. Full security practices will be published before launch.',
  },
  {
    question: 'How much will it cost?',
    answer:
      'Pricing will be announced at launch. Waitlist members will receive early access information first.',
  },
] as const;
