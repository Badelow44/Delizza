/** Core domain types */

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
  badge?: string;
}

export interface Category {
  id: string;
  label: string;
  icon?: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  price: number;
  ctaLabel: string;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  image: string;
  code: string;
  discount: string;
  validUntil: string;
}
