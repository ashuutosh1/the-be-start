"use client"

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
}

const News: React.FC = () => {

  const router = useRouter();
  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: "Bemaxo Launches Revolutionary Connection Features",
      excerpt: "Introducing new ways to discover and connect with like-minded individuals in your community and beyond.",
      date: "2025-07-25",
      category: "Product Update",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Privacy First: Our Commitment to User Safety",
      excerpt: "Learn about our latest security enhancements and privacy measures designed to protect our community.",
      date: "2025-07-20",
      category: "Security",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "Community Spotlight: Success Stories from Our Users",
      excerpt: "Celebrating the amazing connections and relationships formed through our platform.",
      date: "2025-07-15",
      category: "Community",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Bemaxo Reaches 1 Million Active Users Milestone",
      excerpt: "A heartfelt thank you to our incredible community as we celebrate this major achievement.",
      date: "2025-07-10",
      category: "Company News",
      readTime: "2 min read"
    },
    {
      id: 5,
      title: "AI-Powered Matching: The Science Behind Better Connections",
      excerpt: "Discover how our advanced algorithms help you find more meaningful and compatible connections.",
      date: "2025-07-05",
      category: "Technology",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Global Expansion: Bemaxo Now Available in 15 New Countries",
      excerpt: "Expanding our reach to bring people together across borders and cultures worldwide.",
      date: "2025-06-30",
      category: "Company News",
      readTime: "3 min read"
    }
  ];

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Product Update': 'bg-gray-100 text-gray-800',
      'Security': 'bg-gray-200 text-gray-800',
      'Community': 'bg-gray-100 text-gray-800',
      'Company News': 'bg-gray-200 text-gray-800',
      'Technology': 'bg-gray-100 text-gray-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <>
      <Head>
        <title>News & Updates - Bemaxo</title>
        <meta name="description" content="Stay updated with the latest news, features, and announcements from Bemaxo." />
      </Head>

      {/* Floating Back Button */}
      <button
        onClick={() => router.back()}
        className="fixed top-4 left-4 z-50 px-4 py-2 bg-white text-black hover:bg-black hover:text-white rounded-lg transition-colors flex items-center shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back
      </button>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                News & Updates
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Stay informed about the latest developments, features, and community highlights
              </p>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">Featured</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredArticle.category)}`}>
                      {featuredArticle.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-4">{featuredArticle.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-700 mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">{formatDate(featuredArticle.date)}</span>
                    <Link href={`/news/${featuredArticle.id}`} className="text-gray-900 hover:text-black font-semibold">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-xs ml-3">{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">{formatDate(article.date)}</span>
                    <Link href={`/news/${article.id}`} className="text-gray-900 hover:text-black text-sm font-semibold">
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay in the Loop</h2>
            <p className="text-lg text-gray-700 mb-8">
              Subscribe to our newsletter for the latest updates and exclusive insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;