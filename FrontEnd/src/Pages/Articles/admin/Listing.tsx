import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Settings, 
  Search,
  Edit,
  Trash2,
  Eye,
  MoreVertical,
  TrendingUp,
  MessageSquare,
  Heart,
  Filter,
  Calendar,
  Tag
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function AdminArticleListing() {
  const [activeMenu, setActiveMenu] = useState('articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate()
  // Sample articles data
  const articles = [
    {
      id: 1,
      title: 'Kubernetes Security: Zero Trust Implementation',
      category: 'DevOps',
      author: 'Alex Kumar',
      authorAvatar: '🧑‍🔧',
      date: 'Nov 18, 2024',
      status: 'published',
      views: 18300,
      likes: 1892,
      comments: 167,
      subArticles: 4,
      thumbnail: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=250&fit=crop',
      tags: ['Kubernetes', 'Security', 'Zero Trust']
    },
    {
      id: 2,
      title: 'Building Resilient Microservices with Event Sourcing',
      category: 'Architecture',
      author: 'Sarah Chen',
      authorAvatar: '👩‍💻',
      date: 'Nov 15, 2024',
      status: 'published',
      views: 12500,
      likes: 945,
      comments: 89,
      subArticles: 3,
      thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
      tags: ['Microservices', 'Architecture', 'Event Sourcing']
    },
    {
      id: 3,
      title: 'GitOps Workflows: Infrastructure as Code 2.0',
      category: 'DevOps',
      author: 'Mike Johnson',
      authorAvatar: '🧑‍💼',
      date: 'Nov 12, 2024',
      status: 'draft',
      views: 0,
      likes: 0,
      comments: 0,
      subArticles: 5,
      thumbnail: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=250&fit=crop',
      tags: ['GitOps', 'IaC', 'DevOps']
    },
    {
      id: 4,
      title: 'React Performance Optimization: A Deep Dive',
      category: 'Frontend',
      author: 'Emma Wilson',
      authorAvatar: '👩‍🎨',
      date: 'Nov 10, 2024',
      status: 'published',
      views: 22100,
      likes: 2341,
      comments: 234,
      subArticles: 6,
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
      tags: ['React', 'Performance', 'Frontend']
    },
    {
      id: 5,
      title: 'Database Scaling Strategies for High Traffic Applications',
      category: 'Backend',
      author: 'David Park',
      authorAvatar: '🧑‍🔬',
      date: 'Nov 8, 2024',
      status: 'published',
      views: 15600,
      likes: 1256,
      comments: 143,
      subArticles: 4,
      thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop',
      tags: ['Database', 'Scaling', 'Backend']
    },
    {
      id: 6,
      title: 'Machine Learning Pipeline Best Practices',
      category: 'AI/ML',
      author: 'Lisa Anderson',
      authorAvatar: '👩‍🔧',
      date: 'Nov 5, 2024',
      status: 'draft',
      views: 0,
      likes: 0,
      comments: 0,
      subArticles: 7,
      thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop',
      tags: ['Machine Learning', 'AI', 'Pipeline']
    }
  ];

  const categories = ['all', 'DevOps', 'Architecture', 'Frontend', 'Backend', 'AI/ML'];

  const stats = [
    { label: 'Total Articles', value: '24', change: '+12%', icon: FileText, color: 'blue' },
    { label: 'Total Views', value: '145K', change: '+23%', icon: Eye, color: 'green' },
    { label: 'Total Likes', value: '12.4K', change: '+18%', icon: Heart, color: 'red' },
    { label: 'Total Comments', value: '2.3K', change: '+15%', icon: MessageSquare, color: 'purple' }
  ];

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'articles', label: 'Articles', icon: FileText },
    { id: 'authors', label: 'Authors', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

   const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return (
    <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="px-8 py-6">
            {/* Search and Filters */}
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles, authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="font-semibold text-gray-700">Filter</span>
              </button>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600',
                green: 'from-green-500 to-green-600',
                red: 'from-red-500 to-red-600',
                purple: 'from-purple-500 to-purple-600'
              };
              return (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${colorClasses[stat.color]} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-1 text-green-600 text-sm font-semibold">
                      <TrendingUp className="w-4 h-4" />
                      {stat.change}
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-1">{stat.value}</h3>
                  <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Category Filters */}
          <div className="flex justify-between mb-6 overflow-x-auto pb-2 ">
            <div className='flex gap-3'>
                {categories.map(category => (
                <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl font-semibold whitespace-nowrap transition-all ${
                selectedCategory === category
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                >
                {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
                ))}
            </div>
             <button
                className={`px-4 py-2 rounded-xl font-semibold whitespace-nowrap transition-all bg-gradient-to-r from-blue-600 to-purple-600 text-white w-30`}
                onClick={()=>navigate("/admin/articles/create")}
              >
                Create
              </button>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredArticles.map(article => (
              <div key={article.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all group">
                {/* Thumbnail */}
                <div className="relative overflow-hidden">
                  <img 
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      article.status === 'published'
                        ? 'bg-green-500 text-white'
                        : 'bg-yellow-500 text-white'
                    }`}>
                      {article.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button 
                      onClick={() => setOpenDropdown(openDropdown === article.id ? null : article.id)}
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <MoreVertical className="w-4 h-4 text-gray-600" />
                    </button>
                    {openDropdown === article.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-10">
                        <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors">
                          <Eye className="w-4 h-4 text-gray-600" />
                          <span className="text-sm font-medium text-gray-700">View</span>
                        </button>
                        <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors">
                          <Edit className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-gray-700">Edit</span>
                        </button>
                        <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors">
                          <Trash2 className="w-4 h-4 text-red-600" />
                          <span className="text-sm font-medium text-gray-700">Delete</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600">{article.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                    {article.tags.length > 2 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">
                        +{article.tags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Author & Date */}
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                    <span className="text-2xl">{article.authorAvatar}</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">{article.author}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Eye className="w-4 h-4" />
                        <span className="font-medium">{article.views >= 1000 ? `${(article.views / 1000).toFixed(1)}K` : article.views}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Heart className="w-4 h-4" />
                        <span className="font-medium">{article.likes >= 1000 ? `${(article.likes / 1000).toFixed(1)}K` : article.likes}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <MessageSquare className="w-4 h-4" />
                        <span className="font-medium">{article.comments}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-blue-600 font-semibold">
                      <FileText className="w-4 h-4" />
                      <span>{article.subArticles} sections</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-semibold">
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all">
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
  )
}

export default AdminArticleListing
