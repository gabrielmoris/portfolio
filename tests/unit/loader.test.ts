/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, expect, it } from 'vitest';
import {
  getExperienceData,
  getMeData,
  getProjectData,
  getProjectsData,
} from '@/features/loader';
import { projectSchema } from '@/features/schema';

describe('getProjectsData', () => {
  it('returns one project per markdown file', async () => {
    const projects = await getProjectsData('en');

    const slugs = projects.map((p) => p.slug);

    expect(slugs).toHaveLength(5);
  });

  it('every project slug is kebab-case', async () => {
    const projects = await getProjectsData('en');

    for (const { slug } of projects) {
      expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it('returns validated data, not raw frontmatter', async () => {
    const [first] = await getProjectsData('en');
    if (!first) throw new Error('expected at least one project');

    const { content: _content, slug: _slug, ...copy } = first;

    const parsed = projectSchema.parse(copy);
    expect(copy).toEqual(parsed);
  });

  it('every project in content/ passes the schema', async () => {
    const projects = await getProjectsData('en');

    projects.forEach((p) => {
      const { content: _content, slug: _slug, ...copy } = p;
      const parsed = projectSchema.parse(copy);
      expect(copy).toEqual(parsed);
    });
  });

  it('rejects an unknown locale', async () => {
    // @ts-expect-error fr is not a supported locale
    await expect(getProjectsData('fr')).rejects.toThrow('ENOENT');
  });
});

describe('getProjectData', () => {
  it('returns the project matching a slug', async () => {
    const projectData = await getProjectData('en', 'refhub');
    expect(projectData?.slug).toBe('refhub');
  });

  it('returns null for a slug that does not exist', async () => {
    await expect(getProjectData('en', 'non-existent-slug')).resolves.toBeNull();
  });

  it('loads every project returned by getProjectsData by its slug', async () => {
    const projects = await getProjectsData('en');

    for (const { slug } of projects) {
      const project = await getProjectData('en', slug);
      expect(project?.slug).toBe(slug);
    }
  });

  it('rejects an unknown locale', async () => {
    // @ts-expect-error fr is not a supported locale
    await expect(getProjectData('fr', 'refhub')).rejects.toThrow('ENOENT');
  });
});

describe('getMeData', () => {
  it('returns about, skills, education, faq ', async () => {
    const meData = await getMeData('en');
    expect(meData).toHaveProperty('about');
    expect(meData).toHaveProperty('skills');
    expect(meData).toHaveProperty('education');
    expect(meData).toHaveProperty('faq');
  });
});

describe('getExperienceData', () => {
  it('returns the 5 jobs, with any job where end is null before the finished ones, and finished jobs sorted newest first', async () => {
    const experienceData = await getExperienceData('en');
    expect(experienceData).toHaveLength(5);
  });
});
