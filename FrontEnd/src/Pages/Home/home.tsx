import { ArrowRight, Award, BookOpen, Calendar, Code, Database, Globe, Play, Rocket, Search, Sparkles, Star, TrendingUp, Users, Zap } from "lucide-react";

const HomePage = () => {
  const featuredCategories = [
    { 
      id: 'frontend', 
      name: 'Frontend', 
      icon: Code, 
      gradient: 'from-cyan-400 to-blue-500',
      count: '2.4K',
      description: 'React, Vue, Angular & more'
    },
    { 
      id: 'backend', 
      name: 'Backend', 
      icon: Database, 
      gradient: 'from-green-400 to-emerald-500',
      count: '1.8K',
      description: 'APIs, Databases & Servers'
    },
    { 
      id: 'devops', 
      name: 'DevOps', 
      icon: Zap, 
      gradient: 'from-orange-400 to-red-500',
      count: '1.2K',
      description: 'CI/CD, Cloud & Infrastructure'
    },
    { 
      id: 'mobile', 
      name: 'Mobile', 
      icon: Globe, 
      gradient: 'from-purple-400 to-pink-500',
      count: '980',
      description: 'iOS, Android & Cross-platform'
    },
  ];

  const trendingArticles = [
    {
      id: 1,
      title: 'The Future of React: Server Components Deep Dive',
      author: 'Sarah Chen',
      avatar: '👩‍💻',
      views: '12.5K',
      likes: 1234,
      readTime: 8,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
      category: 'Frontend'
    },
    {
      id: 2,
      title: 'Building Resilient Microservices with Event Sourcing',
      author: 'Michael Torres',
      avatar: '👨‍💼',
      views: '24.8K',
      likes: 2156,
      readTime: 15,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      category: 'Backend'
    },
    {
      id: 3,
      title: 'Kubernetes Security: Zero Trust Implementation',
      author: 'Alex Kumar',
      avatar: '🧑‍🔧',
      views: '18.3K',
      likes: 1892,
      readTime: 12,
      image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&h=400&fit=crop',
      category: 'DevOps'
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Web3 Developer Summit 2024',
      date: 'Dec 15, 2024',
      time: '10:00 AM EST',
      attendees: 2400,
      type: 'Virtual'
    },
    {
      id: 2,
      title: 'React Masterclass: Advanced Patterns',
      date: 'Dec 18, 2024',
      time: '2:00 PM EST',
      attendees: 1850,
      type: 'Workshop'
    },
    {
      id: 3,
      title: 'Cloud Native Architecture',
      date: 'Dec 20, 2024',
      time: '11:00 AM EST',
      attendees: 3200,
      type: 'Conference'
    },
  ];

  const stats = [
    { label: 'Active Developers', value: '50K+', icon: Users, gradient: 'from-blue-500 to-cyan-500' },
    { label: 'Articles Published', value: '12.5K', icon: BookOpen, gradient: 'from-purple-500 to-pink-500' },
    { label: 'Community Events', value: '240+', icon: Calendar, gradient: 'from-orange-500 to-red-500' },
    { label: 'Success Stories', value: '3.8K', icon: Award, gradient: 'from-green-500 to-emerald-500' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-8 animate-bounce">
            <Sparkles className="w-4 h-4" />
            Welcome to DevHub
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Where Developers
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"> Learn & Grow</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 50,000+ developers sharing knowledge, building projects, and advancing their careers in our vibrant community.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all font-bold text-lg">
              <Rocket className="w-6 h-6" />
              Start Exploring
            </button>
            <button className="flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-2xl hover:shadow-xl hover:scale-105 transition-all font-bold text-lg">
              <Play className="w-6 h-6" />
              Watch Demo
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="w-6 h-6 text-gray-400 absolute left-6 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles, tutorials, developers..."
              className="w-full pl-16 pr-6 py-5 bg-white/80 backdrop-blur-xl border-2 border-gray-200/50 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-xl text-lg transition-all"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className={`bg-gradient-to-br ${stat.gradient} rounded-3xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
                <Icon className="w-10 h-10 mb-4 relative z-10" />
                <p className="text-4xl font-black mb-2 relative z-10">{stat.value}</p>
                <p className="text-sm font-medium opacity-90 relative z-10">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-2">Explore Topics</h2>
            <p className="text-gray-600 text-lg">Find content that matches your interests</p>
          </div>
          <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
            View All
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer group">
                <div className={`bg-gradient-to-r ${category.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 font-bold">{category.count} articles</span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trending Articles */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                <TrendingUp className="w-4 h-4" />
                Trending Now
              </div>
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-2">Most Popular Content</h2>
            <p className="text-gray-600 text-lg">What the community is reading this week</p>
          </div>
          <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
            See More
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {trendingArticles.map((article) => (
            <div key={article.id} className="bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer group">
              <div className="relative h-48 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-bold">
                  {article.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                  {article.title}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{article.avatar}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{article.author}</p>
                      <p className="text-xs text-gray-500">{article.readTime} min read</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current text-yellow-500" />
                      {article.likes}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-2">Upcoming Events</h2>
            <p className="text-gray-600 text-lg">Join live sessions and workshops</p>
          </div>
          <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
            All Events
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 rounded-full text-white text-xs font-bold">
                  {event.type}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{event.title}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{event.attendees} registered</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-2xl font-bold hover:shadow-xl transition-all">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Ready to Level Up?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of developers already learning and growing with DevHub
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
              Create Free Account
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage