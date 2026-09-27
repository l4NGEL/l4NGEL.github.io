import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    group: z.enum(['goru', 'ses-dil', 'sistem', 'web']),
    order: z.number(),
    date: z.string(),
    stack: z.array(z.string()),
    repo: z.string().url().optional(),
    thumb: z.string().optional(),
    wip: z.boolean().default(false),
  }),
});

export const collections = { projects };
