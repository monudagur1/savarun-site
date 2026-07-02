import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.savarun.com';

export const COMPANY = {
  name: 'SAVARUN',
  tagline: 'Fashion Intelligence',
  email: 'monusherpurdagur@gmail.com',
  phone: '+91 84010 24176',
  proprietor: 'Lekhraj Dagur',
  entity: 'SAVARUN',
  address: {
    line1: 'Lekhraj SO Nihal',
    line2: 'Sherpur, Hindaun City',
    line3: 'Karauli, Rajasthan 322236',
    country: 'India',
  },
  launch: '2026',
  region: 'India',
} as const;
