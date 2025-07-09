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
  relatedPosts?: any[];
};

type TOCItem = {
  id: string;
  text: string;
  level: number;
  children: TOCItem[];
};

export default function ArticleClient({ article, relatedPosts = [] }: Props) {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
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
    }
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
    if (typeof window !== 'undefined') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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

      {/* Article Content with TOC */}
      <div className="bg-white pb-16">
        <div className="max-w-7xl mx-auto px-6 pt-12">
          {/* Mobile TOC Toggle Button */}
          {toc.length > 0 && (
            <div className="lg:hidden mb-8">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="flex items-center gap-2 bg-[#2B4257] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#1a2834] transition-colors"
              >
                <div className="flex flex-col gap-1">
                  <div className="w-4 h-0.5 bg-white"></div>
                  <div className="w-4 h-0.5 bg-white"></div>
                  <div className="w-4 h-0.5 bg-white"></div>
                </div>
                Table of Contents
              </button>
            </div>
          )}
          
          {/* Mobile Sidebar Overlay */}
          {isSidebarOpen && (
            <div className="lg:hidden fixed inset-0 z-50">
              <div className="absolute inset-0 bg-black/50" onClick={() => setIsSidebarOpen(false)}></div>
              <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-[#2B4257] uppercase tracking-wide">
                      Table of Contents
                    </h3>
                    <button
                      onClick={() => setIsSidebarOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <div className="w-6 h-6 relative">
                        <div className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-gray-600 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                        <div className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-gray-600 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
                      </div>
                    </button>
                  </div>
                  <div className="space-y-1 max-h-[calc(100vh-120px)] overflow-y-auto">
                    {toc.map((item) => (
                      <div key={item.id}>
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => {
                              scrollToHeading(item.id);
                              setIsSidebarOpen(false);
                            }}
                            className="text-sm font-medium text-[#2B4257] hover:text-[#1a2834] hover:bg-slate-100 transition-all duration-200 flex-1 text-left p-2 rounded"
                          >
                            {item.text}
                          </button>
                          {item.children.length > 0 && (
                            <button
                              onClick={() => toggleExpanded(item.id)}
                              className="ml-2 p-1 hover:bg-slate-100 rounded text-[#2B4257] hover:text-[#1a2834] transition-all duration-200 min-w-[1.5rem] h-5 flex items-center justify-center"
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
                          <div className="ml-2 mt-1 space-y-1 border-l-2 border-slate-200 pl-2">
                            {item.children.map((child) => (
                              <button
                                key={child.id}
                                onClick={() => {
                                  scrollToHeading(child.id);
                                  setIsSidebarOpen(false);
                                }}
                                className="block text-xs text-slate-600 hover:text-[#2B4257] hover:bg-slate-100 transition-all duration-200 p-1 rounded w-full text-left"
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
            </div>
          )}
          
          <div className="flex gap-8 items-start">
            {/* Desktop TOC - Left Side Sticky */}
            {toc.length > 0 && (
              <div className="hidden lg:block w-80 flex-shrink-0">
                <div className="space-y-6">
                  {/* LinkedIn Company Card */}
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden">
                        <img
                          src="https://media.licdn.com/dms/image/v2/D4D0BAQGJRIALK97lHw/company-logo_200_200/B4DZdKR..1HkAI-/0/1749297918645/vegnar_architectural_products_logo?e=1757548800&v=beta&t=9dO6W8krXDLn4jATWKKCsa5t99m_qAAX4301qkmoCv8"
                          alt="Vegnar Architectural Logo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Vegnar Architectural</h3>
                        <p className="text-sm text-gray-600">Architectural Hardware Solutions</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      Leading manufacturer of premium architectural hardware including railing systems, door hardware, and glass fittings.
                    </p>
                    <a
                      href="https://www.linkedin.com/company/vegnar-architectural-products/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#2B4257] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1a2834] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Follow on LinkedIn
                    </a>
                  </div>
                  
                  {/* Table of Contents */}
                  <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 shadow-sm sticky top-20" style={{ maxHeight: 'calc(100vh - 320px)', overflowY: 'auto' }}>
                    <h3 className="text-sm font-semibold text-[#2B4257] uppercase tracking-wide mb-4 pb-3 border-b-2 border-slate-200">
                      Table of Contents
                    </h3>
                  <div className="space-y-2">
                    {toc.map((item) => (
                      <div key={item.id}>
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => scrollToHeading(item.id)}
                            className="text-sm font-medium text-[#2B4257] hover:text-[#1a2834] hover:bg-slate-100 transition-all duration-200 flex-1 text-left p-3 rounded border border-transparent hover:border-slate-300 relative"
                          >
                            {item.text}
                          </button>
                          {item.children.length > 0 && (
                            <button
                              onClick={() => toggleExpanded(item.id)}
                              className="ml-2 p-2 hover:bg-slate-100 rounded text-[#2B4257] hover:text-[#1a2834] transition-all duration-200 min-w-[1.5rem] h-6 flex items-center justify-center"
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
                          <div className="ml-3 mt-2 space-y-1 border-l-2 border-slate-200 pl-3">
                            {item.children.map((child) => (
                              <button
                                key={child.id}
                                onClick={() => scrollToHeading(child.id)}
                                className="block text-xs text-slate-600 hover:text-[#2B4257] hover:bg-slate-100 transition-all duration-200 p-2 rounded w-full text-left"
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
              </div>
            )}
            
            {/* Right Column - Featured Image + Content */}
            <div className="flex-1 min-w-0">
              {/* Featured Image - Full Width */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg mb-8"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              {/* Article Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="article-content"
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#333'
                }}
                dangerouslySetInnerHTML={{ 
                  __html: article.content.replace(
                    /<(h[23])([^>]*)>/g, 
                    (match, tag, attrs, offset) => {
                      const index = (article.content.substring(0, offset).match(/<h[23]/g) || []).length;
                      return `<${tag} id="heading-${index}" style="scroll-margin-top: 100px;"${attrs}>`;
                    }
                  )
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related {article.category} Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.slice(0, 2).map((post) => {
                const cleanTitle = post.title.rendered.replace(/&#8217;/g, "'").replace(/&#8211;/g, "-").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"');
                const cleanExcerpt = post.excerpt.rendered.replace(/<[^>]*>/g, '').replace(/&#8217;/g, "'").replace(/&#8211;/g, "-").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/\[&hellip;\]/g, '...').substring(0, 120);
                const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/Images/Gallary/Hardware-1.jpg';
                
                return (
                  <Link key={post.id} href={`/insights/${post.slug}`} className="group">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="relative h-48">
                        <Image
                          src={image}
                          alt={cleanTitle}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>5 min read</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-[#2B4257] transition-colors">
                          {cleanTitle}
                        </h4>
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {cleanExcerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}