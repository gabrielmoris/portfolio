import matter from 'gray-matter';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { Locale, projectSchema, experienceSchema, meSchemas } from './schema';
import { z } from 'zod';

export const getProjectsData = async (locale: Locale = 'en') => {
  'use cache';
  const folderPath = path.join(process.cwd(), 'content', locale, 'projects');
  const markdownFiles = await listMarkdownFiles(folderPath);

  const projects = await Promise.all(
    markdownFiles.map(async (file) => ({
      ...(await parseMarkdownFile(
        path.join(folderPath, file),
        projectSchema,
        locale
      )),
      slug: path.basename(file, '.md'),
    }))
  );

  return projects.sort(
    (a, b) =>
      Number(b.featured) - Number(a.featured) ||
      b.date.getTime() - a.date.getTime()
  );
};

export const getProjectData = async (locale: Locale = 'en', slug: string) => {
  'use cache';
  const projectPath = path.join(
    process.cwd(),
    'content',
    locale,
    'projects',
    slug + '.md'
  );

  return {
    ...(await parseMarkdownFile(projectPath, projectSchema, locale)),
    slug,
  };
};

export const getExperienceData = async (locale: Locale = 'en') => {
  'use cache';
  const folderPath = path.join(process.cwd(), 'content', locale, 'experience');
  const markdownFiles = await listMarkdownFiles(folderPath);

  const experience = await Promise.all(
    markdownFiles.map(async (file) => ({
      ...(await parseMarkdownFile(
        path.join(folderPath, file),
        experienceSchema,
        locale
      )),
      slug: path.basename(file, '.md'),
    }))
  );

  return experience.sort(
    (a, b) =>
      Number(b.end === null) - Number(a.end === null) ||
      b.start.getTime() - a.start.getTime()
  );
};

export const getMeData = async (locale: Locale = 'en') => {
  'use cache';
  const mePath = path.join(process.cwd(), 'content', locale, 'me');
  const load = (file: string) => path.join(mePath, `${file}.md`);

  const [about, skills, education, faq] = await Promise.all([
    parseMarkdownFile(load('about'), meSchemas.about, locale),
    parseMarkdownFile(load('skills'), meSchemas.skills, locale),
    parseMarkdownFile(load('education'), meSchemas.education, locale),
    parseMarkdownFile(load('faq'), meSchemas.faq, locale),
  ]);

  return { about, skills, education, faq };
};

const listMarkdownFiles = async (folderPath: string) => {
  const files = await readdir(folderPath);
  return files.filter((file) => file.endsWith('.md'));
};

const loadMarkdownFile = async (filePath: string) => {
  const raw = await readFile(filePath, 'utf-8');

  if (!raw) {
    throw new Error(`File ${filePath} is empty or could not be read.`);
  }

  const { data, content } = matter(raw);

  return { data, content };
};

const parseMarkdownFile = async <T extends { lang: Locale }>(
  filePath: string,
  schema: z.ZodType<T>,
  locale: Locale
) => {
  const { data, content } = await loadMarkdownFile(filePath);
  const result = schema.safeParse(data);

  if (!result.success) {
    throw new Error(`${filePath}\n${z.prettifyError(result.error)}`);
  }

  if (result.data.lang !== locale) {
    throw new Error(
      `${filePath}: lang is "${result.data.lang}" but the folder is "${locale}"`
    );
  }

  return { ...result.data, content };
};
