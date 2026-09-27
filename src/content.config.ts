import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const image = z.object({ src: z.string(), alt: z.string() });

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    categories: z.array(z.enum(['cv', 'ai', 'sys', 'web', 'sec'])),
    featured: z.boolean().default(false),
    order: z.number(),
    period: z.string(),
    status: z.string().optional(),
    stack: z.array(z.string()),
    highlights: z.array(z.string()),
    repo: z.string().url().optional(),
    cover: image.optional(),
    gallery: z.array(image).default([]),
  }),
});

export const collections = { projects };
