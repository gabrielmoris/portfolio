import matter from 'gray-matter';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { projectSchema } from './schema';
import { z } from 'zod';

export const getProjectsData = async (locale: string = 'en') => {
  'use cache';
  const folderPath = path.join(process.cwd(), 'content', locale, 'projects');
  const files = await readdir(folderPath);

  const projects = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(
        process.cwd(),
        'content',
        locale,
        'projects',
        file
      );
      const raw = await readFile(filePath, 'utf-8');

      if (!raw) {
        throw new Error(`File ${filePath} is empty or could not be read.`);
      }

      const { data, content } = matter(raw);

      const {
        success,
        error,
        data: parsedData,
      } = projectSchema.safeParse(data);

      if (!success) {
        throw new Error(z.prettifyError(error));
      }

      return {
        ...parsedData,
        content,
      };
    })
  );

  return projects;
};

// TODO:  Check `data` with `projectSchema.parse`. On failure, throw an error that names the file path. Throwing here is what makes the build fail on bad frontmatter.
// TODO: getProject(locale, slug) for single projects
// TODO: Tests
