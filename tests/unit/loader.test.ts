/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, expect, it } from 'vitest';
import { getProjectData, getProjectsData } from '@/features/loader';
import { projectSchema } from '@/features/schema';

describe('getProjectsData', () => {
  it('returns one project per markdown file', async () => {
    const projects = await getProjectsData('en');

    const slugs = projects.map((p) => p.slug);

    expect(slugs).toHaveLength(5);
  });

  it('returns validated data, not raw frontmatter', async () => {
    const [first] = await getProjectsData('en');
    if (!first) throw new Error('expected at least one project');

    const { content: _content, ...copy } = first;

    const parsed = projectSchema.parse(copy);
    expect(copy).toEqual(parsed);
  });

  it('every project in content/ passes the schema', async () => {
    const projects = await getProjectsData('en');

    projects.forEach((p) => {
      const { content: _content, ...copy } = p;
      const parsed = projectSchema.parse(copy);
      expect(copy).toEqual(parsed);
    });
  });

  it('rejects an unknown locale', async () => {
    await expect(getProjectData('fr', 'refhub')).rejects.toThrow(
      `ENOENT: no such file or directory, open '/Volumes/ExternalSSD/Projects/web-portfolio/content/fr/projects/refhub.md'`
    );
  });
});

describe('getProjectData', () => {
  it('returns the project matching a slug', async () => {
    const projectData = await getProjectData('en', 'refhub');
    expect(projectData).toBeDefined();
  });

  it('throws for a slug that does not exist', async () => {
    await expect(getProjectData('en', 'non-existent-slug')).rejects.toThrow(
      `ENOENT: no such file or directory, open '/Volumes/ExternalSSD/Projects/web-portfolio/content/en/projects/non-existent-slug.md'`
    );
  });
});
