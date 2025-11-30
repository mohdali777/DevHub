import { Bell, Rocket, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LogoApp from "../logocontainer";

const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-2xl border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0"></div>
                <LogoApp w={"w-12"} h={"h-11"} />
            </div>
            <div>
              <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                DevHub
              </h1>
              <p className="text-xs text-gray-500 font-medium">Modern Developer Platform</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            <a onClick={()=>navigate("/")} className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">Home</a>
            <a onClick={()=>navigate("/articles")}  className="text-gray-600 font-semibold hover:text-blue-600 transition-colors">Articles</a>
            <a href="#" className="text-gray-600 font-semibold hover:text-blue-600 transition-colors">Community</a>
            <a href="#" className="text-gray-600 font-semibold hover:text-blue-600 transition-colors">Events</a>
            <a href="#" className="text-gray-600 font-semibold hover:text-blue-600 transition-colors">Learn</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-3 hover:bg-gray-100 rounded-xl transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <button className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl hover:shadow-xl hover:scale-105 transition-all font-semibold">
              <Rocket className="w-5 h-5" />
              Get Started
            </button>
            <button className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl" onClick={()=>navigate("/user/profile")}>
              <User className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header