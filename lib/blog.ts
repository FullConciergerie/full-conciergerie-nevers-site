import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content/blog');

export type MarkdownArticle = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  readingMinutes: number;
  content: string;
};

function isPublished(dateStr: string): boolean {
  const pub = new Date(dateStr);
  pub.setUTCHours(0, 0, 0, 0);
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  return pub <= today;
}

export function getAllMarkdownArticles(): MarkdownArticle[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'));
  return files
    .map((filename) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), 'utf8');
      const { data, content } = matter(raw);
      return {
        slug: data.slug as string,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        author: data.author as string,
        category: data.category as string,
        readingMinutes: (data.readingMinutes as number) ?? 5,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPublishedMarkdownArticles(): MarkdownArticle[] {
  return getAllMarkdownArticles().filter((a) => isPublished(a.date));
}

export function getMarkdownArticleBySlug(slug: string): MarkdownArticle | null {
  const all = getAllMarkdownArticles();
  return all.find((a) => a.slug === slug) ?? null;
}

export function getPublishedMarkdownArticleBySlug(slug: string): MarkdownArticle | null {
  const article = getMarkdownArticleBySlug(slug);
  if (!article || !isPublished(article.date)) return null;
  return article;
}
