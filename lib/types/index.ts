export type NavItem = {
  label: string;
  href: string;
  phase?: number;
};

export type PlaceholderAsset = {
  id: string;
  description: string;
  usedOn: string[];
  priority: 'launch-blocker' | 'nice-to-have';
};
