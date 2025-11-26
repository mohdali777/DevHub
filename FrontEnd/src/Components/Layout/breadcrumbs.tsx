import { ChevronRight } from "lucide-react";
import React from "react";

interface ItemsProps{
items:{icon:any,
     label:string,
    active: boolean 
    href?:string
    }[]     
}
const Breadcrumbs = ({ items }:ItemsProps) => {
  return (
    <div className="relative bg-white/40 backdrop-blur-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-sm">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
              {item.icon && <item.icon className="w-4 h-4" />}
              {item.href ? (
                <a
                  href={item.href}
                  className={`font-medium transition-colors ${
                    item.active
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className={`font-medium ${
                    item.active
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold'
                      : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs