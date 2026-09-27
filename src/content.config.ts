import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    summary: z.string(),
    categories: z.array(z.enum(['cv', 'ai', 'sys', 'web', 'sec'])),
    featured: z.boolean().default(false),
    order: z.number(),
    period: z.string(),
    year: z.number(),
    status: z.string().optional(),
    stack: z.array(z.string()),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    repo: z.string().url().optional(),
    cover: z.object({ src: z.string(), alt: z.string() }).optional(),
    diagram: z.string().optional(),
  }),
});

export const collections = { projects };
