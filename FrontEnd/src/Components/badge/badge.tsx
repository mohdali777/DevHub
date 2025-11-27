
import React, { useState } from 'react';
import { CheckCircle, Shield, Award, Star } from 'lucide-react';

const VerificationBadge = ({ type = 'blue', size = 20 }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const badges = {
    admin: {
      gradient: 'from-red-500 via-red-600 to-rose-600',
      shadow: 'shadow-red-500/50',
      icon: Shield,
      title: 'Admin',
      description: 'DevHub Administrator - Official staff member',
      glow: 'group-hover:shadow-red-500/80'
    },
    gold: {
      gradient: 'from-yellow-400 via-amber-500 to-yellow-600',
      shadow: 'shadow-yellow-500/50',
      icon: Award,
      title: 'Gold Author',
      description: 'Top-tier author with 100+ articles and exceptional quality',
      glow: 'group-hover:shadow-yellow-500/80'
    },
    silver: {
      gradient: 'from-gray-300 via-gray-400 to-gray-500',
      shadow: 'shadow-gray-400/50',
      icon: Star,
      title: 'Silver Author',
      description: 'Experienced author with 50+ quality articles',
      glow: 'group-hover:shadow-gray-400/80'
    },
    blue: {
      gradient: 'from-blue-400 via-blue-500 to-cyan-500',
      shadow: 'shadow-blue-500/50',
      icon: CheckCircle,
      title: 'Verified Author',
      description: 'Verified content creator on DevHub',
      glow: 'group-hover:shadow-blue-500/80'
    }
  };

  const badge = badges[type] || badges.blue;
  const Icon = badge.icon;

  return (
    <div 
      className="relative inline-flex items-center justify-center group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Badge with Glow Effect */}
      <div 
        className={`relative rounded-full bg-gradient-to-br ${badge.gradient} shadow-lg ${badge.shadow} ${badge.glow} cursor-pointer  group-hover:scale-110 group-hover:rotate-12`}
        style={{ 
          width: size, 
          height: size,
          animationDuration: '3s'
        }}
      >
        <Icon 
          className="text-white absolute inset-0 m-auto drop-shadow-lg"
          style={{ width: size * 0.65, height: size * 0.65 }}
          strokeWidth={2.5}
          fill="currentColor"
        />
        
        {/* Sparkle Effect */}
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      </div>

      {/* Rotating Ring */}
      <div 
        className={`absolute inset-0 rounded-full border-2 border-dashed ${badge.gradient.replace('from-', 'border-')} opacity-0 group-hover:opacity-50 group-hover:scale-150 transition-all duration-500`}
        style={{ width: size, height: size }}
      ></div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-50 pointer-events-none">
          <div className="relative animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className={`bg-gradient-to-br ${badge.gradient} p-[2px] rounded-2xl shadow-2xl`}>
              <div className="bg-gray-900 px-5 py-3 rounded-2xl">
                <div className="flex items-center gap-2 mb-1.5">
                  <div 
                    className={`w-5 h-5 rounded-full bg-gradient-to-br ${badge.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-3 h-3 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="font-bold text-sm text-white">{badge.title}</p>
                </div>
                <p className="text-xs text-gray-300 whitespace-nowrap max-w-xs">{badge.description}</p>
              </div>
            </div>
            {/* Arrow with gradient */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-[1px]">
              <div className={`w-3 h-3 bg-gradient-to-br ${badge.gradient} rotate-45`}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerificationBadge