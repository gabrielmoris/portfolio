import matter from 'gray-matter';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { Locale, projectSchema } from './schema';
import { z } from 'zod';

export const getProjectsData = async (locale: Locale = 'en') => {
  'use cache';
  const folderPath = path.join(process.cwd(), 'content', locale, 'projects');
  const markdownFiles = await listMarkdownFiles(folderPath);

  const projects = await Promise.all(
    markdownFiles.map(async (file) => {
      const filePath = path.join(
        process.cwd(),
        'content',
        locale,
        'projects',
        file
      );

      const { data, content } = await loadMarkdownFile(filePath);

      const {
        success,
        error,
        data: parsedData,
      } = projectSchema.safeParse(data);

      if (!success) {
        throw new Error(z.prettifyError(error));
      }

      const output = {
        ...parsedData,
        slug: path.basename(file, '.md'),
        content,
      };

      return output;
    })
  );

  return projects.sort(
    (a, b) =>
      Number(b.featured) - Number(a.featured) ||
      b.date.getTime() - a.date.getTime()
  );
};

const listMarkdownFiles = async (folderPath: string) => {
  const files = await readdir(folderPath);
  return files.filter((file) => file.endsWith('.md'));
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

  const { data, content } = await loadMarkdownFile(projectPath);

  const { success, error, data: parsedData } = projectSchema.safeParse(data);

  if (!success) {
    throw new Error(z.prettifyError(error));
  }

  return {
    ...parsedData,
    slug: path.basename(slug, '.md'),
    content,
  };
};

const loadMarkdownFile = async (filePath: string) => {
  const raw = await readFile(filePath, 'utf-8');

  if (!raw) {
    throw new Error(`File ${filePath} is empty or could not be read.`);
  }

  const { data, content } = matter(raw);

  return { data, content };
};
