import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blogPost',
  title: 'Entrada de blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cover',
      title: 'Imagen de portada',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'excerpt',
      title: 'Extracto',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Contenido',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'author',
      title: 'Autor/a',
      type: 'string',
    }),
    defineField({
      name: 'publishDate',
      title: 'Fecha de publicación',
      type: 'datetime',
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Noticias', value: 'Noticias' },
          { title: 'Entrevistas', value: 'Entrevistas' },
          { title: 'Reseñas', value: 'Reseñas' },
          { title: 'Eventos', value: 'Eventos' },
        ],
      },
    }),
  ],
  orderings: [
    {
      title: 'Fecha de publicación (reciente)',
      name: 'publishDateDesc',
      by: [{ field: 'publishDate', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'cover' },
  },
});
