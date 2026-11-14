import * as z from 'zod';

import { companies } from '@/content/companies';
import * as images from '@/content/images';
import { routing } from '@/i18n/routing';

// ---------- Shared ----------

// the array of the specific strings of an object, typed as a tuple of string literals
const keysOf = <T extends object>(obj: T) =>
  Object.keys(obj) as [keyof T & string, ...(keyof T & string)[]];

const locale = z.enum(routing.locales);

const imageKey = z.enum(keysOf(images));
const image = z.strictObject({
  image: imageKey,
  alt: z.string().min(1, 'Every image needs alt text'),
});

const techList = z.array(z.string().min(1)).default([]);

// ---------- Projects: content/{locale}/projects/*.md ----------

export const projectSchema = z.strictObject({
  title: z
    .string()
    .min(2, 'Title must be at least 2 characters long')
    .max(100, 'Title must be at most 100 characters long'),
  slug: z
    .string()
    .regex(
      /^[a-z0-9]+(-[a-z0-9]+)*$/,
      'Slug must be kebab-case (e.g. menu-diario)'
    ),
  summary: z
    .string()
    .min(10, 'Summary must be at least 10 characters long')
    .max(200, 'Summary must be at most 200 characters long'),
  date: z.coerce.date(),
  role: z.string().min(1),
  tech: techList,
  cover: image.optional(),
  links: z
    .strictObject({
      live: z.url().optional(),
      repo: z.url().optional(),
      repoAndroid: z.url().optional(),
      android: z.url().optional(),
      ios: z.url().optional(),
    })
    .default({}),
  featured: z.boolean().default(false),
  lang: locale,
});

export type Project = z.infer<typeof projectSchema>;

// ---------- Experience: content/{locale}/experience/*.md ----------

export const experienceSchema = z
  .strictObject({
    company: z.enum(keysOf(companies)),
    companyName: z.string().min(1),
    role: z.string().min(1),
    start: z.coerce.date(),
    end: z.coerce.date().nullable(), // null = present
    location: z.string().min(1),
    employment: z.enum(['full-time', 'part-time', 'internship', 'freelance']),
    tech: techList,
    lang: locale,
  })
  .refine((data) => data.end === null || data.end >= data.start, {
    path: ['end'],
    message: 'end must not be before start',
  });

export type Experience = z.infer<typeof experienceSchema>;

// ---------- About me: content/{locale}/me/*.md ----------

const meBase = {
  title: z
    .string()
    .min(2, 'Title must be at least 2 characters long')
    .max(100, 'Title must be at most 100 characters long'),
  order: z.number().int().positive(),
  lang: locale,
};

export const aboutSchema = z.strictObject({
  ...meBase,
  name: z.string().min(1),
  headline: z.string().min(1),
  location: z.string().min(1),
  photo: image,
  links: z.strictObject({
    github: z.url().optional(),
    linkedin: z.url().optional(),
    gitlab: z.url().optional(),
    web: z.url().optional(),
  }),
});

export const skillsSchema = z.strictObject({
  ...meBase,
  groups: z
    .array(
      z.strictObject({
        name: z.string().min(1),
        items: z.array(z.string().min(1)).min(1),
      })
    )
    .min(1),
  spokenLanguages: z.array(
    z.strictObject({
      name: z.string().min(1),
      level: z.enum([
        'native',
        'fluent',
        'professional',
        'intermediate',
        'basic',
      ]),
    })
  ),
});

export const educationSchema = z.strictObject({
  ...meBase,
  entries: z
    .array(
      z.strictObject({
        name: z.string().min(1),
        institution: z.string().min(1),
        location: z.string().min(1),
        start: z.coerce.date(),
        end: z.coerce.date().nullable(),
      })
    )
    .min(1),
});

export const faqSchema = z.strictObject(meBase);

export const meSchemas = {
  about: aboutSchema,
  skills: skillsSchema,
  education: educationSchema,
  faq: faqSchema,
} as const;

export type MeFile = keyof typeof meSchemas;
export type About = z.infer<typeof aboutSchema>;
export type Skills = z.infer<typeof skillsSchema>;
export type Education = z.infer<typeof educationSchema>;
export type Faq = z.infer<typeof faqSchema>;
