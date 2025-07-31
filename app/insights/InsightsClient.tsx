'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';

type WordPressPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  categories: number[];
  sticky: boolean;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
  };
};

type WordPressCategory = {
  id: number;
  name: string;
  slug: string;
};

type Props = {
  posts: WordPressPost[];
  categories: WordPressCategory[];
  featuredPosts: WordPressPost[];
};

function formatPost(post: WordPressPost, categories: WordPressCategory[]) {
  const postCategory = categories.find(cat => post.categories.includes(cat.id));
  const cleanTitle = post.title.rendered.replace(/&#8217;/g, "'").replace(/&#8211;/g, "-").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&amp;/g, '&');
  const cleanExcerpt = post.excerpt.rendered.replace(/<[^>]*>/g, '').replace(/&#8217;/g, "'").replace(/&#8211;/g, "-").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&amp;/g, '&').replace(/\[&hellip;\]/g, '...').substring(0, 150) + '...';
  
  return {
    id: post.slug,
    title: cleanTitle,
    excerpt: cleanExcerpt,
    category: postCategory?.name || 'Insights',
    readTime: '5 min read',
    date: post.date,
    image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/Images/Gallary/Hardware-1.jpg',
    featured: post.sticky
  };
}

export default function InsightsClient({ posts, categories, featuredPosts }: Props) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const insights = posts.map(post => formatPost(post, categories));
  const featuredInsights = featuredPosts.map(post => formatPost(post, categories));
  const categoryNames = ['All', ...categories.map(cat => cat.name)];
  const allInsights = insights.filter(insight => !featuredPosts.some(fp => fp.slug === insight.id));
  const regularInsights = selectedCategory === 'All' 
    ? allInsights 
    : allInsights.filter(insight => insight.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2B4257] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Architectural Hardware Insights</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Expert knowledge, industry trends, and professional tips for architectural hardware solutions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categoryNames.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border transition-colors ${
                  selectedCategory === category
                    ? 'border-[#2B4257] bg-[#2B4257] text-white'
                    : 'border-gray-300 hover:border-[#2B4257] hover:text-[#2B4257]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {featuredInsights.length >= 1 ? (
          // Featured article - left image, right content
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[400px]">
              <div className="relative h-80 lg:h-full">
                <Image
                  src={featuredInsights[0].image}
                  alt={featuredInsights[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#2B4257] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{featuredInsights[0].category}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredInsights[0].date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredInsights[0].readTime}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{featuredInsights[0].title}</h2>
                <p className="text-gray-600 mb-6">{featuredInsights[0].excerpt}</p>
                <Link
                  href={`/insights/${featuredInsights[0].id}`}
                  className="inline-flex items-center text-[#2B4257] font-semibold hover:text-[#1a2834] transition-colors"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularInsights.map((insight, index) => (
            <motion.article
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">{insight.category}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {insight.readTime}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">{insight.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{insight.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{new Date(insight.date).toLocaleDateString()}</span>
                  <Link
                    href={`/insights/${insight.id}`}
                    className="text-[#2B4257] font-medium hover:text-[#1a2834] transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}