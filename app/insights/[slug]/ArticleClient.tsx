'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, Share2, Plus, Minus } from 'lucide-react';
import { useState, useEffect } from 'react';

type Article = {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
};

type Props = {
  article: Article;
  slug: string;
};

type TOCItem = {
  id: string;
  text: string;
  level: number;
  children: TOCItem[];
};

export default function ArticleClient({ article }: Props) {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(article.content, 'text/html');
    const headings = doc.querySelectorAll('h2, h3');
    
    const tocItems: TOCItem[] = [];
    let currentH2: TOCItem | null = null;
    
    headings.forEach((heading, index) => {
      const id = `heading-${index}`;
      const text = heading.textContent || '';
      const level = parseInt(heading.tagName.charAt(1));
      
      if (level === 2) {
        currentH2 = { id, text, level, children: [] };
        tocItems.push(currentH2);
      } else if (level === 3 && currentH2) {
        currentH2.children.push({ id, text, level, children: [] });
      }
    });
    
    setToc(tocItems);
  }, [article.content]);

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      {/* Article Hero */}
      <div className="bg-[#2B4257] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 text-sm text-white/80 mb-6">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full font-medium">
                {article.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(article.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {article.title}
            </h1>
            
            <p className="text-xl text-white/90 mb-8">
              {article.description}
            </p>

            <div className="flex items-center justify-between border-t border-white/20 pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-semibold">
                  V
                </div>
                <div>
                  <p className="font-semibold text-white">Vegnar Team</p>
                  <p className="text-sm text-white/80">Architectural Hardware Experts</p>
                </div>
              </div>
              
              <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="bg-white pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-64 md:h-96 rounded-lg overflow-hidden"
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Article Content with TOC */}
      <div className="bg-white pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="flex gap-8">
            {/* Table of Contents */}
            {toc.length > 0 && (
              <div className="w-64 flex-shrink-0">
                <div className="sticky top-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    {toc.map((item) => (
                      <div key={item.id} className="mb-2">
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => scrollToHeading(item.id)}
                            className="text-sm font-medium text-gray-700 hover:text-[#2B4257] transition-colors flex-1 text-left"
                          >
                            {item.text}
                          </button>
                          {item.children.length > 0 && (
                            <button
                              onClick={() => toggleExpanded(item.id)}
                              className="ml-2 p-1 hover:bg-gray-200 rounded"
                            >
                              {expandedItems.has(item.id) ? (
                                <Minus className="w-3 h-3" />
                              ) : (
                                <Plus className="w-3 h-3" />
                              )}
                            </button>
                          )}
                        </div>
                        {expandedItems.has(item.id) && item.children.length > 0 && (
                          <div className="ml-4 mt-2 space-y-1">
                            {item.children.map((child) => (
                              <button
                                key={child.id}
                                onClick={() => scrollToHeading(child.id)}
                                className="block text-xs text-gray-600 hover:text-[#2B4257] transition-colors"
                              >
                                {child.text}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Article Content */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ 
                  __html: article.content.replace(
                    /<(h[23])([^>]*)>/g, 
                    (match, tag, attrs, offset) => {
                      const index = (article.content.substring(0, offset).match(/<h[23]/g) || []).length;
                      return `<${tag} id="heading-${index}"${attrs}>`;
                    }
                  )
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/insights/aluminum-vs-stainless-steel-railings" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/Images/Gallary/railing-3-lg.jpg"
                    alt="Aluminum vs Stainless Steel"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Aluminum vs Stainless Steel Railings
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Compare materials for your next project
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/insights/door-hardware-maintenance-tips" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/Images/Gallary/door-hardware-1.jpg"
                    alt="Door Hardware Maintenance"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Door Hardware Maintenance Tips
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Keep your hardware in perfect condition
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}