import localFont from 'next/font/local';

export const canopee = localFont({
  src: './Canopee.otf',
  variable: '--font-canopee',
  weight: '400',
  style: 'normal',
  display: 'swap',
  fallback: ['sans-serif'],
});

export const editorialNew = localFont({
  src: './PPEditorialNew.otf',
  variable: '--font-editorial-new',
  weight: '400',
  style: 'normal',
  display: 'swap',
  fallback: ['serif'],
});
