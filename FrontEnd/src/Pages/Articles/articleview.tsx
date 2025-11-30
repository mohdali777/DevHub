import React, { useState } from 'react';
import { ArrowLeft, Heart, Bookmark, Share2, MessageCircle, Clock, Eye, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const ArticleReadingPage = () => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedSubArticles, setExpandedSubArticles] = useState([0]); // First sub-article expanded by default

  // Main article data with sub-articles
  const articleData = {
    id: 1,
    title: 'Kubernetes Security: Complete Guide to Zero Trust Implementation',
    category: 'DevOps',
    author: {
      name: 'Alex Kumar',
      avatar: '🧑‍🔧',
      role: 'Senior DevOps Engineer'
    },
    date: 'November 18, 2024',
    readTime: 45,
    views: '18.3K',
    likes: 1892,
    comments: 167,
    tags: ['Kubernetes', 'Security', 'Zero Trust', 'DevOps'],
    
    // Main article introduction
    introduction: 'Master production-grade security practices for K8s clusters with real-world examples and battle-tested configurations. In today\'s cloud-native landscape, implementing Zero Trust isn\'t just a best practice—it\'s essential.',
    
    // Sub-articles array
    subArticles: [
      {
        id: 'sub-1',
        title: 'Understanding Zero Trust Architecture',
        sort_order: 0,
        content_blocks: [
          {
            heading: 'What is Zero Trust?',
            text: 'In today\'s cloud-native landscape, traditional perimeter-based security models are no longer sufficient. Zero Trust Architecture (ZTA) represents a fundamental shift in how we approach security, operating on the principle that no entity should be trusted by default.',
            list: [
              'Never trust, always verify',
              'Assume breach mentality',
              'Verify explicitly every request',
              'Use least privilege access',
              'Segment access by role and context'
            ],
            images: [
              {
                image: {
                  image_url: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1200&h=600&fit=crop',
                  public_id: 'zero-trust-architecture'
                },
                caption: 'Zero Trust Architecture Overview'
              }
            ],
            links: [
              {
                url: 'https://www.nist.gov/publications/zero-trust-architecture',
                caption: 'NIST Zero Trust Architecture Standard'
              }
            ],
            sort_order: 0
          },
          {
            heading: 'The Threat Landscape',
            text: 'Before diving into implementation details, it\'s crucial to understand what we\'re protecting against. Modern Kubernetes environments face multiple attack vectors that require comprehensive protection strategies.',
            list: [
              'Container Breakouts - Attackers escaping container isolation',
              'Privilege Escalation - Unauthorized elevation of permissions',
              'Data Exfiltration - Unauthorized access to sensitive data',
              'Supply Chain Attacks - Compromised images or dependencies',
              'Misconfigured RBAC - Overly permissive access controls'
            ],
            images: [
              {
                image: {
                  image_url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=500&fit=crop',
                  public_id: 'threat-landscape'
                },
                caption: 'Common security threats in cloud environments'
              }
            ],
            links: [],
            sort_order: 1
          }
        ]
      },
      {
        id: 'sub-2',
        title: 'Authentication & Authorization in Kubernetes',
        sort_order: 1,
        content_blocks: [
          {
            heading: 'RBAC Fundamentals',
            text: 'The foundation of Zero Trust in Kubernetes starts with robust authentication and authorization mechanisms. Role-Based Access Control (RBAC) is your first line of defense against unauthorized access.',
            list: [
              'Use service accounts for pod authentication',
              'Implement fine-grained RBAC policies',
              'Enable audit logging for all access',
              'Regularly review and rotate credentials',
              'Use external identity providers (OIDC)'
            ],
            images: [
              {
                image: {
                  image_url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=500&fit=crop',
                  public_id: 'rbac-architecture'
                },
                caption: 'Kubernetes RBAC architecture'
              }
            ],
            links: [
              {
                url: 'https://kubernetes.io/docs/reference/access-authn-authz/rbac/',
                caption: 'Official Kubernetes RBAC Documentation'
              }
            ],
            sort_order: 0
          },
          {
            heading: 'Service Account Best Practices',
            text: 'Service accounts are the identity mechanism for pods in Kubernetes. Proper configuration and management of service accounts is critical for maintaining a secure cluster.',
            list: [
              'Create dedicated service accounts for each application',
              'Disable automatic token mounting when not needed',
              'Use short-lived tokens with bound service account tokens',
              'Implement token rotation policies',
              'Audit service account usage regularly'
            ],
            images: [],
            links: [
              {
                url: 'https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/',
                caption: 'Configure Service Accounts Guide'
              }
            ],
            sort_order: 1
          }
        ]
      },
      {
        id: 'sub-3',
        title: 'Network Security & Policy Implementation',
        sort_order: 2,
        content_blocks: [
          {
            heading: 'Network Policies Overview',
            text: 'Network segmentation is critical for Zero Trust. Kubernetes NetworkPolicies allow you to control traffic flow at the IP address or port level, creating micro-segmentation within your cluster.',
            list: [
              'Start with default-deny policies',
              'Explicitly allow required traffic only',
              'Use namespace-level isolation',
              'Implement egress controls',
              'Monitor and log all network traffic'
            ],
            images: [
              {
                image: {
                  image_url: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=500&fit=crop',
                  public_id: 'network-policy'
                },
                caption: 'Network policy configuration example'
              }
            ],
            links: [
              {
                url: 'https://kubernetes.io/docs/concepts/services-networking/network-policies/',
                caption: 'Kubernetes Network Policies Documentation'
              }
            ],
            sort_order: 0
          },
          {
            heading: 'Service Mesh Integration',
            text: 'Service meshes like Istio and Linkerd provide advanced traffic management and security features that complement NetworkPolicies. They offer mutual TLS, fine-grained authorization, and comprehensive observability.',
            list: [
              'Enable mTLS for all service-to-service communication',
              'Implement authorization policies at the service level',
              'Use traffic encryption by default',
              'Monitor traffic patterns and anomalies',
              'Integrate with external identity providers'
            ],
            images: [],
            links: [
              {
                url: 'https://istio.io/latest/docs/concepts/security/',
                caption: 'Istio Security Concepts'
              },
              {
                url: 'https://linkerd.io/2.11/features/automatic-mtls/',
                caption: 'Linkerd Automatic mTLS'
              }
            ],
            sort_order: 1
          }
        ]
      },
      {
        id: 'sub-4',
        title: 'Secrets Management & Data Protection',
        sort_order: 3,
        content_blocks: [
          {
            heading: 'External Secrets Management',
            text: 'Proper secrets management is non-negotiable in a Zero Trust environment. Never store secrets in plain text or in container images. Use external secret stores to manage sensitive data.',
            list: [
              'Use external secret stores (Vault, AWS Secrets Manager)',
              'Encrypt secrets at rest with KMS',
              'Rotate secrets regularly (every 90 days)',
              'Enable audit logging for secret access',
              'Never commit secrets to version control',
              'Use short-lived credentials where possible'
            ],
            images: [
              {
                image: {
                  image_url: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&h=500&fit=crop',
                  public_id: 'secrets-management'
                },
                caption: 'External secrets management workflow'
              }
            ],
            links: [
              {
                url: 'https://www.vaultproject.io/docs/platform/k8s',
                caption: 'HashiCorp Vault for Kubernetes'
              },
              {
                url: 'https://external-secrets.io/',
                caption: 'External Secrets Operator'
              }
            ],
            sort_order: 0
          },
          {
            heading: 'Encryption Best Practices',
            text: 'Encryption should be applied at multiple layers: at rest, in transit, and in use. This ensures that data remains protected throughout its lifecycle.',
            list: [
              'Enable encryption at rest for etcd',
              'Use TLS 1.3 for all network communications',
              'Implement pod security policies for encryption requirements',
              'Use encrypted storage classes for persistent volumes',
              'Consider using confidential computing for sensitive workloads'
            ],
            images: [],
            links: [],
            sort_order: 1
          }
        ]
      }
    ],
    
    previousArticle: {
      id: 2,
      title: 'Building Resilient Microservices with Event Sourcing',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&h=120&fit=crop',
      readTime: 10
    },
    
    nextArticle: {
      id: 3,
      title: 'GitOps Workflows: Infrastructure as Code 2.0',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=200&h=120&fit=crop',
      readTime: 8
    }
  };

  const toggleSubArticle = (index) => {
    setExpandedSubArticles(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const renderContentBlock = (block, blockIndex, subArticleIndex) => {
    return (
      <div key={blockIndex} className="mb-8">
        {/* Heading */}
        {block.heading && (
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {block.heading}
          </h3>
        )}

        {/* Text */}
        {block.text && (
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {block.text}
          </p>
        )}

        {/* List */}
        {block.list && block.list.length > 0 && (
          <ul className="space-y-3 mb-6 ml-6">
            {block.list.map((item, i) => (
              <li key={i} className="text-gray-700 leading-relaxed flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Images */}
        {block.images && block.images.length > 0 && (
          <div className="space-y-6 my-8">
            {block.images.map((img, i) => (
              <div key={i}>
                <img 
                  src={img.image.image_url} 
                  alt={img.caption}
                  className="w-full rounded-2xl shadow-xl"
                />
                {img.caption && (
                  <p className="text-sm text-gray-500 text-center mt-3">{img.caption}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Links */}
        {block.links && block.links.length > 0 && (
          <div className="bg-blue-50 rounded-xl p-4 my-6">
            <h4 className="text-sm font-semibold text-blue-900 mb-3">📚 Related Resources</h4>
            <div className="space-y-2">
              {block.links.map((link, i) => (
                <a 
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  {link.caption || link.url}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category */}
        <div className="mb-6">
          <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
            {articleData.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
          {articleData.title}
        </h1>

        {/* Meta Info */}
        <div className="flex items-center gap-6 mb-12 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{articleData.author.avatar}</span>
            <div>
              <p className="font-semibold text-gray-900">{articleData.author.name}</p>
              <p className="text-sm text-gray-600">{articleData.author.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>{articleData.date}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {articleData.readTime} min
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {articleData.views}
            </span>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed font-medium">
            {articleData.introduction}
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Table of Contents</h2>
          <ol className="space-y-2">
            {articleData.subArticles.map((subArticle, index) => (
              <li key={subArticle.id}>
                <a 
                  href={`#${subArticle.id}`}
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  {index + 1}. {subArticle.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Sub Articles */}
        <div className="space-y-6">
          {articleData.subArticles.map((subArticle, subIndex) => (
            <div 
              key={subArticle.id} 
              id={subArticle.id}
              className="bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 overflow-hidden"
            >
              {/* Sub Article Header */}
              <button
                onClick={() => toggleSubArticle(subIndex)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-black text-blue-600">
                    {subIndex + 1}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 text-left">
                    {subArticle.title}
                  </h2>
                </div>
                {expandedSubArticles.includes(subIndex) ? (
                  <ChevronUp className="w-6 h-6 text-gray-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-600" />
                )}
              </button>

              {/* Sub Article Content */}
              {expandedSubArticles.includes(subIndex) && (
                <div className="px-6 pb-6 border-t border-gray-200">
                  <div className="pt-6 space-y-6">
                    {subArticle.content_blocks
                      .sort((a, b) => a.sort_order - b.sort_order)
                      .map((block, blockIndex) => 
                        renderContentBlock(block, blockIndex, subIndex)
                      )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 my-12 pt-8 border-t border-gray-200">
          {articleData.tags.map(tag => (
            <span key={tag} className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm font-semibold text-gray-700 transition-colors cursor-pointer">
              #{tag}
            </span>
          ))}
        </div>

        {/* Engagement */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 flex items-center justify-between my-8">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setLiked(!liked)}
              className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors"
            >
              <Heart className={`w-6 h-6 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
              <span className="font-semibold">{liked ? articleData.likes + 1 : articleData.likes}</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
              <MessageCircle className="w-6 h-6" />
              <span className="font-semibold">{articleData.comments}</span>
            </button>
          </div>
          <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all">
            <Share2 className="w-5 h-5" />
            Share
          </button>
        </div>

        {/* Previous/Next Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 pt-8 border-t border-gray-200">
          {/* Previous Article */}
          {articleData.previousArticle && (
            <div className="group cursor-pointer">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 hover:shadow-xl transition-all">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <ChevronLeft className="w-4 h-4" />
                  <span className="font-semibold">PREVIOUS</span>
                </div>
                <div className="flex gap-4">
                  <img 
                    src={articleData.previousArticle.image}
                    alt="Previous"
                    className="w-24 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 line-clamp-2">
                      {articleData.previousArticle.title}
                    </h3>
                    <p className="text-sm text-gray-500">{articleData.previousArticle.readTime} min read</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Next Article */}
          {articleData.nextArticle && (
            <div className="group cursor-pointer">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 hover:shadow-xl transition-all">
                <div className="flex items-center justify-end gap-2 text-gray-500 text-sm mb-3">
                  <span className="font-semibold">NEXT</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 text-right">
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 line-clamp-2">
                      {articleData.nextArticle.title}
                    </h3>
                    <p className="text-sm text-gray-500">{articleData.nextArticle.readTime} min read</p>
                  </div>
                  <img 
                    src={articleData.nextArticle.image}
                    alt="Next"
                    className="w-24 h-16 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default ArticleReadingPage;