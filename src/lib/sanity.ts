import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

export interface Book {
  _id: string;
  title: string;
  slug: string;
  author: string;
  coverUrl: string;
  synopsis: string;
  isbn?: string;
  buyLinks?: { label: string; url: string }[];
  publishDate: string;
  featured: boolean;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  coverUrl?: string;
  excerpt: string;
  body: unknown[];
  author: string;
  publishDate: string;
  category?: string;
}

export const PLACEHOLDER_BOOKS: Book[] = [
  {
    _id: '1',
    title: 'El jardín de las voces',
    slug: 'el-jardin-de-las-voces',
    author: 'María del Carmen López',
    coverUrl: '/hijasunicas/covers/el-jardin-de-las-voces.svg',
    synopsis: 'Una historia íntima sobre tres generaciones de mujeres que descubren el poder de contar sus propias historias.',
    isbn: '978-84-XXXXX-01-0',
    publishDate: '2024-03-15',
    featured: true,
  },
  {
    _id: '2',
    title: 'Raíces de agua',
    slug: 'raices-de-agua',
    author: 'Laura Fernández Gil',
    coverUrl: '/hijasunicas/covers/raices-de-agua.svg',
    synopsis: 'En un pueblo donde el río lo es todo, una joven bióloga lucha por preservar el ecosistema que da vida a su comunidad.',
    isbn: '978-84-XXXXX-02-7',
    publishDate: '2024-06-01',
    featured: true,
  },
  {
    _id: '3',
    title: 'Cartas desde el silencio',
    slug: 'cartas-desde-el-silencio',
    author: 'Ana Belén Ruiz',
    coverUrl: '/hijasunicas/covers/cartas-desde-el-silencio.svg',
    synopsis: 'Un epistolario ficticio que recorre cincuenta años de historia a través de la correspondencia entre dos amigas.',
    isbn: '978-84-XXXXX-03-4',
    publishDate: '2024-09-20',
    featured: true,
  },
  {
    _id: '4',
    title: 'La memoria del olivo',
    slug: 'la-memoria-del-olivo',
    author: 'Elena Martínez Sáez',
    coverUrl: '/hijasunicas/covers/la-memoria-del-olivo.svg',
    synopsis: 'Una saga familiar ambientada en los campos de olivos de Jaén, donde el pasado y el presente se entrelazan.',
    publishDate: '2025-01-10',
    featured: false,
  },
];

export const PLACEHOLDER_POSTS: BlogPost[] = [];
