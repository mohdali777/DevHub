import React, { useState } from 'react';
import { Search, Plus, Bookmark, TrendingUp, Code, Zap, Database, Globe, Filter, Heart, MessageCircle, Share2, Eye, Clock, Sparkles, ArrowRight, Menu, Bell, User, Home, ChevronRight } from 'lucide-react';

const ArticlePage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: Globe, gradient: 'from-blue-400 via-purple-400 to-pink-400' },
    { id: 'frontend', name: 'Frontend', icon: Code, gradient: 'from-cyan-400 to-blue-500' },
    { id: 'backend', name: 'Backend', icon: Database, gradient: 'from-green-400 to-emerald-500' },
    { id: 'devops', name: 'DevOps', icon: Zap, gradient: 'from-orange-400 to-red-500' },
  ];

  const articles = [
    {
      id: 1,
      title: 'The Future of React: Server Components Deep Dive',
      excerpt: 'Exploring the paradigm shift in React architecture with RSC and how it changes everything we know about building web applications.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
      category: 'frontend',
      author: { name: 'Sarah Chen', avatar: '👩‍💻' },
      date: 'Nov 20, 2024',
      readTime: 8,
      views: '12.5K',
      likes: 1234,
      comments: 89,
      trending: true,
      tags: ['React', 'SSR', 'Performance']
    },
    {
      id: 2,
      title: 'Building Resilient Microservices with Event Sourcing',
      excerpt: 'A comprehensive guide to implementing event-driven architecture patterns for bulletproof distributed systems.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
      category: 'backend',
      author: { name: 'Michael Torres', avatar: '👨‍💼' },
      date: 'Nov 19, 2024',
      readTime: 15,
      views: '24.8K',
      likes: 2156,
      comments: 234,
      trending: true,
      tags: ['Microservices', 'Architecture', 'Event Sourcing']
    },
    {
      id: 3,
      title: 'Kubernetes Security: Zero Trust Implementation',
      excerpt: 'Master production-grade security practices for K8s clusters with real-world examples and battle-tested configurations.',
      image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=500&fit=crop',
      category: 'devops',
      author: { name: 'Alex Kumar', avatar: '🧑‍🔧' },
      date: 'Nov 18, 2024',
      readTime: 12,
      views: '18.3K',
      likes: 1892,
      comments: 167,
      trending: true,
      tags: ['Kubernetes', 'Security', 'DevOps']
    },
    {
      id: 4,
      title: 'CSS Grid & Subgrid: Layout Mastery in 2024',
      excerpt: 'Unlock the full potential of modern CSS with advanced Grid techniques that will transform your layouts.',
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=500&fit=crop',
      category: 'frontend',
      author: { name: 'Emma Wilson', avatar: '👩‍🎨' },
      date: 'Nov 17, 2024',
      readTime: 6,
      views: '9.2K',
      likes: 876,
      comments: 54,
      trending: false,
      tags: ['CSS', 'Layout', 'Design']
    },
    {
      id: 5,
      title: 'GraphQL Federation: Scaling Your API Gateway',
      excerpt: 'Learn how to build a unified GraphQL API across multiple microservices with Apollo Federation.',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop',
      category: 'backend',
      author: { name: 'David Park', avatar: '👨‍💻' },
      date: 'Nov 16, 2024',
      readTime: 11,
      views: '15.7K',
      likes: 1445,
      comments: 112,
      trending: false,
      tags: ['GraphQL', 'API', 'Microservices']
    },
    {
      id: 6,
      title: 'GitOps Workflows: Infrastructure as Code 2.0',
      excerpt: 'Revolutionize your deployment pipeline with GitOps principles using ArgoCD and Flux.',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=500&fit=crop',
      category: 'devops',
      author: { name: 'Rachel Adams', avatar: '👩‍🚀' },
      date: 'Nov 15, 2024',
      readTime: 10,
      views: '11.4K',
      likes: 967,
      comments: 78,
      trending: false,
      tags: ['GitOps', 'IaC', 'CI/CD']
    }
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  const ArticleCard = ({ article, index }) => (
    <div 
      className="group relative"
      onMouseEnter={() => setHoveredCard(article.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        {/* Image Section */}
        <div className="relative h-56 overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Trending Badge */}
          {article.trending && (
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
              <Sparkles className="w-3 h-3" />
              Trending
            </div>
          )}
          
          {/* Bookmark Button */}
          <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2.5 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110">
            <Bookmark className="w-4 h-4 text-white" />
          </button>

          {/* Category Badge */}
          <div className="absolute bottom-4 left-4">
            <div className={`bg-gradient-to-r ${categories.find(c => c.id === article.category)?.gradient} text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg`}>
              {categories.find(c => c.id === article.category)?.name}
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6">
          {/* Meta Info */}
          <div className="flex items-center gap-3 mb-4">
            <div className="text-2xl">{article.author.avatar}</div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">{article.author.name}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>{article.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime} min
                </span>
              </div>
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            {article.title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map(tag => (
              <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>
          
          {/* Stats & Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-5">
              <button className="flex items-center gap-1.5 text-gray-500 hover:text-red-500 transition-colors group/btn">
                <Heart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                <span className="text-sm font-medium">{article.likes}</span>
              </button>
              <button className="flex items-center gap-1.5 text-gray-500 hover:text-blue-500 transition-colors group/btn">
                <MessageCircle className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                <span className="text-sm font-medium">{article.comments}</span>
              </button>
              <div className="flex items-center gap-1.5 text-gray-500">
                <Eye className="w-4 h-4" />
                <span className="text-sm font-medium">{article.views}</span>
              </div>
            </div>
            
            <button className="flex items-center gap-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:gap-3 transition-all">
              Read
              <ArrowRight className="w-4 h-4 text-purple-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <h2 className="text-5xl font-black text-gray-900 mb-4 leading-tight">
            Discover the latest in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"> modern development</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Curated articles, tutorials, and insights from leading developers worldwide.
          </p>
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <TrendingUp className="w-8 h-8 mb-3 relative z-10" />
            <p className="text-3xl font-black mb-1 relative z-10">{articles.length}</p>
            <p className="text-sm font-medium opacity-90 relative z-10">Articles</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <Filter className="w-8 h-8 mb-3 relative z-10" />
            <p className="text-3xl font-black mb-1 relative z-10">{categories.length - 1}</p>
            <p className="text-sm font-medium opacity-90 relative z-10">Categories</p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <Heart className="w-8 h-8 mb-3 relative z-10" />
            <p className="text-3xl font-black mb-1 relative z-10">{(articles.reduce((sum, a) => sum + a.likes, 0) / 1000).toFixed(1)}K</p>
            <p className="text-sm font-medium opacity-90 relative z-10">Total Likes</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <Eye className="w-8 h-8 mb-3 relative z-10" />
            <p className="text-3xl font-black mb-1 relative z-10">102K</p>
            <p className="text-sm font-medium opacity-90 relative z-10">Total Views</p>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(category => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-xl scale-105`
                    : 'bg-white/80 backdrop-blur-xl text-gray-700 hover:shadow-lg hover:scale-105 border border-gray-200/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
                {activeCategory === category.id && (
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                    {category.id === 'all' ? articles.length : articles.filter(a => a.category === category.id).length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}
      </main>

    </div>
  );
};

export default ArticlePage;