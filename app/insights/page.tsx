import InsightsClient from './InsightsClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Architectural Hardware Insights 2024 | Expert Tips & Future Trends | Vegnar',
  description: 'Discover expert insights on smart architectural hardware, sustainable railing systems, IoT door hardware, and energy-efficient glass fittings. Latest 2024 trends, smart installation tips, and innovative design ideas from Vegnar professionals.',
  keywords: 'smart architectural hardware insights 2024, sustainable railing system tips, IoT door hardware guide, energy efficient glass fittings installation, smart hardware design trends, green building solutions, architectural automation, smart building insights, future hardware trends, sustainable construction materials, Vegnar insights',
  openGraph: {
    title: 'Smart Architectural Hardware Insights 2024 | Expert Tips & Future Trends',
    description: 'Expert insights on smart architectural hardware, sustainable design trends, and IoT installation tips from industry professionals.',
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