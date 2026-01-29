import React, { useState } from 'react'
import type { USER_DTO } from '../../Interface/user'
import DefaultImages from "../../assets/Dummy2.jpg"
import { useNavigate } from 'react-router';
import { Award, Bookmark, Briefcase, Calendar, Edit2, Github, Heart, Link2, Linkedin, LogOut, Mail, MapPin, MessageCircle, Shield, X } from 'lucide-react';
import Usedispatch from '../../hooks/dispatch';
import { LogoutUsers } from '../../Redux/slice/Auth/reducers';
import VerificationBadge from '../badge/badge';
interface Props{
    userData:Partial<USER_DTO>,
    handleEdit:()=>void
}

function ProfileContainer({userData,handleEdit}:Props) {
    console.log(userData);
    
    const navigate = useNavigate();
    const dispatch = Usedispatch()
    const [activeTab, setActiveTab] = useState("about");

    const savedArticles = [
    {
      id: 1,
      title: 'Kubernetes Security: Zero Trust Implementation',
      image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=250&fit=crop',
      category: 'DevOps',
      author: 'Sarah Chen',
      date: 'Nov 18, 2024',
      readTime: 12,
      likes: 1892,
      comments: 167
    },
    {
      id: 2,
      title: 'Building CI/CD Pipelines with GitHub Actions',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=250&fit=crop',
      category: 'DevOps',
      author: 'Michael Torres',
      date: 'Nov 10, 2024',
      readTime: 10,
      likes: 1245,
      comments: 89
    }
  ];

   const userComments = [
    {
      id: 1,
      articleTitle: 'Kubernetes Security: Zero Trust Implementation',
      comment: 'Great article! I implemented these practices in our production cluster and saw immediate improvements in security posture.',
      date: 'Nov 20, 2024',
      likes: 23
    }
  ];

  return (
     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        {/* Profile Card */}
        <div className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar */}
            <div>
            <div className="relative">
            <img 
            src={userData?.image?.image_url || DefaultImages} 
            alt={DefaultImages}
            className="w-40 h-40 rounded-3xl object-cover border-4 border-white shadow-xl"
            />
            </div>
            <div className=" flex flex-col gap-4 mt-4">
            {userData?.role === 'admin' &&
            <button
            onClick={()=>navigate("/admin")}
            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all text-sm"
            >
            <Shield className="w-4 h-4" />
            Admin Panel
            </button>
            }
            <button
            onClick={()=>dispatch(LogoutUsers())}
            className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-all text-sm"
            >
            <LogOut className="w-4 h-4" />
            Logout
            </button>
            </div>
            </div>
            {/* User Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className='flex gap-3'>
                  <h1 className="text-4xl font-black text-gray-900 mb-2">{userData?.name}</h1>
                  {
                    userData?.is_verified && userData?.badge !== 'none' && userData?.role === 'admin' && <VerificationBadge type={userData?.badge} size={30} />
                  }
                  </div>
                  <p className="text-lg text-gray-600">{userData?.role}</p>
                </div>

                <button
                  onClick={handleEdit}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all"
                >
                  <Edit2 className="w-5 h-5" />
                  Edit Profile
                </button>
              </div>

              {/* Bio */}
              <p className="text-gray-700 leading-relaxed mb-4">{userData?.about?.bio || "update your bio..."}</p>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{userData?.email}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{userData?.about?.location || "update your location..."}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <Link2 className="w-4 h-4" />
                  <a href={`https://${userData?.about?.website}`} className="text-sm text-purple-600 hover:underline">{userData?.about?.website || "update your website..."}</a>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-sm">{userData?.about?.company}</span>
                </div>
              </div>

              {/* Social Links */}
              {/* <div className="flex items-center gap-3">
                <a href={`https://github.com/${userData?.about?.social.github}`} className="bg-gray-900 text-white p-2 rounded-lg hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </a>
                <a href={`https://twitter.com/${userData?.about?.social.twitter}`} className="bg-blue-400 text-white p-2 rounded-lg hover:scale-110 transition-transform">
                  <X className="w-5 h-5" />
                </a>
                <a href={`https://linkedin.com/in/${userData?.about?.social.linkedin}`} className="bg-blue-600 text-white p-2 rounded-lg hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div> */}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-3xl font-black text-gray-900">{(userData?.stats?.saved_articles as string[])?.length || 0}</p>
              <p className="text-sm text-gray-600 font-medium">Saved Articles</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-gray-900">{(userData?.stats?.comments as string[])?.length || 0}</p>
              <p className="text-sm text-gray-600 font-medium">Comments</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-gray-900">{(userData?.stats?.likes as string[])?.length || 0}</p>
              <p className="text-sm text-gray-600 font-medium">Likes Given</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-xl border border-white/20 mb-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('saved')}
              className={`flex-1 py-4 px-6 font-semibold transition-all ${
                activeTab === 'saved'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Bookmark className="w-5 h-5" />
                Saved Articles
              </div>
            </button>
            <button
              onClick={() => setActiveTab('comments')}
              className={`flex-1 py-4 px-6 font-semibold transition-all ${
                activeTab === 'comments'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                My Comments
              </div>
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`flex-1 py-4 px-6 font-semibold transition-all ${
                activeTab === 'about'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Award className="w-5 h-5" />
                About
              </div>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'saved' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">My Saved Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedArticles.map(article => (
                    <div key={article.id} className="group cursor-pointer">
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                        <div className="relative h-40 overflow-hidden">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <span className="absolute bottom-2 left-2 bg-purple-600 text-white px-3 py-1 rounded-lg text-xs font-bold">
                            {article.category}
                          </span>
                          <button className="absolute top-2 right-2 bg-white/20 backdrop-blur-md p-2 rounded-lg hover:bg-white/30 transition-colors">
                            <Bookmark className="w-4 h-4 text-white fill-white" />
                          </button>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">By {article.author}</p>
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                            <span>{article.date}</span>
                            <span>{article.readTime} min</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              {article.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageCircle className="w-4 h-4" />
                              {article.comments}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'comments' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">My Comments</h3>
                <div className="space-y-4">
                  {userComments.map(comment => (
                    <div key={comment.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1 hover:text-purple-600 cursor-pointer">
                            {comment.articleTitle}
                          </h4>
                          <p className="text-sm text-gray-500">{comment.date}</p>
                        </div>
                        <button className="flex items-center gap-1 text-gray-600 hover:text-red-500 transition-colors">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm font-semibold">{comment.likes}</span>
                        </button>
                      </div>
                      <p className="text-gray-700 leading-relaxed bg-gray-50 rounded-xl p-4">
                        {comment.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'about' && (
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">About Me</h3>
                    <p className="text-gray-700 leading-relaxed">{userData?.about?.bio}</p>
                  </div>
                  <button
                    onClick={handleEdit}
                    className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-all"
                  >
                    <Edit2 className="w-5 h-5 text-purple-600" />
                  </button>
                </div>
                
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Experience</h3>
                    <div className="space-y-4">
                      {userData?.about?.experience.map(exp => (
                        <div  className="bg-gray-50 rounded-2xl p-4">
                          <h4 className="font-bold text-gray-900">{exp.position}</h4>
                          <p className="text-sm text-gray-600">{exp.company}</p>
                          <p className="text-xs text-gray-500 mt-1">{exp.duration}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={handleEdit}
                    className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-all"
                  >
                    <Edit2 className="w-5 h-5 text-purple-600" />
                  </button>
                </div>

                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {userData?.about?.skills.map(skill => (
                        <span key={skill} className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={handleEdit}
                    className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-all flex-shrink-0"
                  >
                    <Edit2 className="w-5 h-5 text-purple-600" />
                  </button>
                </div>

                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Member Since</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5" />
                      <span>{userData?.createdAt}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
  )
}

export default ProfileContainer
