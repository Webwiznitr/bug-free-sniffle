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

export const bungee = localFont({
  src: './Bungee-Regular.ttf',
  variable: '--font-bungee',
  weight: '400',
  style: 'normal',
  display: 'swap',
  fallback: ['sans-serif'],
});

export const pressStart2P = localFont({
  src: './PressStart2P-Regular.ttf',
  variable: '--font-press-start',
  weight: '400',
  style: 'normal',
  display: 'swap',
  fallback: ['monospace'],
});
