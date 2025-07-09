import InsightsClient from './InsightsClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Architectural Hardware Insights | Expert Tips & Industry Trends | Vegnar',
  description: 'Discover expert insights on architectural hardware, railing systems, door hardware, and glass fittings. Latest trends, installation tips, and design ideas from Vegnar professionals.',
  keywords: 'architectural hardware insights, railing system tips, door hardware guide, glass fittings installation, hardware design trends, architectural solutions, Vegnar insights',
  openGraph: {
    title: 'Architectural Hardware Insights | Expert Tips & Trends',
    description: 'Expert insights on architectural hardware, design trends, and installation tips from industry professionals.',
    url: 'https://vegnararch.com/insights',
    siteName: 'Vegnar Architectural',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architectural Hardware Insights | Vegnar',
    description: 'Expert insights and tips on architectural hardware and design trends.',
  },
  alternates: {
    canonical: 'https://vegnararch.com/insights',
  },
};

async function fetchPosts() {
  try {
    const res = await fetch('https://cms-arch.flexadigital.com/wp-json/wp/v2/posts?_embed', {
      next: { revalidate: 60 }
    });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

async function fetchFeaturedPosts() {
  try {
    const res = await fetch('https://cms-arch.flexadigital.com/wp-json/wp/v2/posts?categories=55&_embed', {
      next: { revalidate: 60 }
    });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

async function fetchCategories() {
  try {
    const res = await fetch('https://cms-arch.flexadigital.com/wp-json/wp/v2/categories', {
      next: { revalidate: 300 }
    });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export default async function InsightsPage() {
  const [posts, categories, featuredPosts] = await Promise.all([
    fetchPosts(),
    fetchCategories(),
    fetchFeaturedPosts()
  ]);
  return <InsightsClient posts={posts} categories={categories} featuredPosts={featuredPosts} />;
}