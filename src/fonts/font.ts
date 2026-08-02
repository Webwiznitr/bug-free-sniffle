import localFont from 'next/font/local';
import { Archivo, Bricolage_Grotesque, Oxanium } from 'next/font/google';

export const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bricolage-grotesque',
});
export const oxanium = Oxanium({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-oxanium',
});

export const archivoFont = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: '400',
  style: 'normal',
  display: 'swap',
});

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
