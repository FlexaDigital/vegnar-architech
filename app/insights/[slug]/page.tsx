import { notFound } from 'next/navigation';
import ArticleClient from './ArticleClient';
import { Metadata } from 'next';

async function fetchPost(slug: string) {
  try {
    const res = await fetch(`https://cms-arch.flexadigital.com/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) return null;
    const posts = await res.json();
    return posts[0] || null;
  } catch {
    return null;
  }
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await fetchPost(params.slug);
  
  if (!post) {
    return {
      title: 'Article Not Found | Vegnar Insights'
    };
  }

  const cleanTitle = post.title.rendered.replace(/&#8217;/g, "'").replace(/&#8211;/g, "-").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"');
  const cleanDescription = post.excerpt.rendered.replace(/<[^>]*>/g, '').replace(/&#8217;/g, "'").replace(/&#8211;/g, "-").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/\[&hellip;\]/g, '...').substring(0, 160);
  const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const publishDate = new Date(post.date).toISOString();
  const modifiedDate = new Date(post.modified).toISOString();

  // Get category name
  let categoryName = 'Insights';
  if (post.categories && post.categories.length > 0) {
    try {
      const catRes = await fetch(`https://cms-arch.flexadigital.com/wp-json/wp/v2/categories/${post.categories[0]}`, {
        next: { revalidate: 3600 }
      });
      if (catRes.ok) {
        const category = await catRes.json();
        categoryName = category.name;
      }
    } catch {}
  }

  return {
    title: `${cleanTitle} | Vegnar Insights`,
    description: cleanDescription,
    keywords: `${categoryName.toLowerCase()}, architectural hardware, ${cleanTitle.toLowerCase()}, railing systems, door hardware, glass fittings, Vegnar`,
    authors: [{ name: 'Vegnar Team' }],
    creator: 'Vegnar Architectural',
    publisher: 'Vegnar Architectural',
    category: categoryName,
    openGraph: {
      title: cleanTitle,
      description: cleanDescription,
      url: `https://vegnararch.com/insights/${params.slug}`,
      siteName: 'Vegnar Architectural',
      type: 'article',
      publishedTime: publishDate,
      modifiedTime: modifiedDate,
      authors: ['Vegnar Team'],
      section: categoryName,
      tags: [categoryName, 'Architectural Hardware', 'Vegnar'],
      images: image ? [{
        url: image,
        width: 1200,
        height: 630,
        alt: cleanTitle
      }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: cleanTitle,
      description: cleanDescription,
      images: image ? [image] : [],
      creator: '@vegnar_india'
    },
    alternates: {
      canonical: `https://vegnararch.com/insights/${params.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const post = await fetchPost(params.slug);
  
  if (!post) {
    notFound();
  }

  // Fetch category name and related posts
  const categoryId = post.categories[0];
  let categoryName = 'Insights';
  let relatedPosts = [];
  if (categoryId) {
    try {
      const catRes = await fetch(`https://cms-arch.flexadigital.com/wp-json/wp/v2/categories/${categoryId}`, {
        next: { revalidate: 300 }
      });
      if (catRes.ok) {
        const category = await catRes.json();
        categoryName = category.name;
        
        // Fetch related posts from same category
        const relatedRes = await fetch(`https://cms-arch.flexadigital.com/wp-json/wp/v2/posts?categories=${categoryId}&exclude=${post.id}&per_page=2&_embed`, {
          next: { revalidate: 300 }
        });
        if (relatedRes.ok) {
          relatedPosts = await relatedRes.json();
        }
      }
    } catch {}
  }

  const article = {
    title: post.title.rendered.replace(/&#8217;/g, "'").replace(/&#8211;/g, "-").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"'),
    description: post.excerpt.rendered.replace(/<[^>]*>/g, '').replace(/&#8217;/g, "'").replace(/&#8211;/g, "-").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/\[&hellip;\]/g, '...').substring(0, 200),
    category: categoryName,
    date: post.date,
    readTime: '5 min read',
    image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/Images/Gallary/Hardware-1.jpg',
    content: post.content.rendered
  };

  return <ArticleClient article={article} slug={params.slug} relatedPosts={relatedPosts} />;
}