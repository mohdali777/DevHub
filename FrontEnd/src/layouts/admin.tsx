import React, {useState } from 'react';
import { 
Menu, X,Home, Users,Settings, Bell, ChevronDown,
LogOut, User,
BookAIcon
} from 'lucide-react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import LogoApp from '../Components/logocontainer';

const AdminLayout = () => {
const [sidebarOpen, setSidebarOpen] = useState(false);
const [profileOpen, setProfileOpen] = useState(false);
const location = useLocation()
const navigate = useNavigate()
const menuItems = [
{ icon: Home, label: "Dashboard", url: "/admin" },
{ icon: Users, label: "Users" },
{ icon: BookAIcon, label: "Articles", url: "/admin/articles" },
{ icon: Settings, label: "Settings" },
];

return (
<div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100">
{/* Header */}
<header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 fixed w-full z-30 top-0 shadow-sm">
<div className="flex items-center justify-between px-4 lg:px-6 py-4">
{/* Left Section */}
<div className="flex items-center gap-4">
<button
onClick={() => setSidebarOpen(!sidebarOpen)}
className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-all active:scale-95"
>
{sidebarOpen ? <X size={24} className="text-slate-700" /> : <Menu size={24} className="text-slate-700" />}
</button>
<div className="flex items-center gap-3">
<div className="w-10 h-10  rounded-xl flex items-center justify-center shadow-lg">
<LogoApp w={'w-30'} h={'h-9'} />
</div>
<div className="hidden sm:block">
<h1 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">AdminPro</h1>
<p className="text-xs text-slate-500">Dashboard v2.0</p>
</div>
</div>
</div>

{/* Right Section */}
<div className="flex items-center gap-2">
<button className="relative p-2.5 rounded-xl hover:bg-slate-100 transition-all">
<Bell size={22} className="text-slate-600" />
<span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
</button>

<div className="relative">
<button
onClick={() => setProfileOpen(!profileOpen)}
className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100 transition-all"
>
<div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md">
JD
</div>
<div className="hidden sm:block text-left">
<p className="text-sm font-semibold text-slate-700">John Doe</p>
<p className="text-xs text-slate-500">Administrator</p>
</div>
<ChevronDown size={16} className="hidden sm:block text-slate-500" />
</button>

{profileOpen && (
<div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-slate-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
<div className="px-4 py-3 border-b border-slate-100">
<p className="text-sm font-semibold text-slate-800">John Doe</p>
<p className="text-xs text-slate-500">john@example.com</p>
</div>
<a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors">
<User size={18} className="text-slate-600" />
<span className="text-sm text-slate-700">My Profile</span>
</a>
<a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors">
<Settings size={18} className="text-slate-600" />
<span className="text-sm text-slate-700">Settings</span>
</a>
<hr className="my-2 border-slate-100" />
<a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors text-red-600">
<LogOut size={18} />
<span className="text-sm font-medium">Logout</span>
</a>
</div>
)}
</div>
</div>
</div>
</header>

{/* Sidebar */}
<aside
className={`fixed top-0 left-0 z-40 h-screen pt-20 transition-transform duration-300 ease-in-out border-r border-slate-200
${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
lg:translate-x-0 w-72 shadow-xl`}
>
<div className="h-full px-4 py-6 overflow-y-auto flex flex-col">
<nav className="flex-1 space-y-2">
{menuItems.map((item, index) => {
const isActive = (() => {
if (!item.url) return false;
if (item.url === "/admin") {
return location.pathname === "/admin";
}
return location.pathname.startsWith(item.url);
})();
return (
<button
key={index}
onClick={() => item.url && navigate(item.url)}
className={`w-full text-left flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group
${
isActive
? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
: 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
}
`}
>
<div className="flex items-center gap-3">
<item.icon
size={22}
className={`${isActive ? '' : 'group-hover:scale-110 transition-transform'}`}
/>
<span className="font-medium">{item.label}</span>
</div>
</button>
);
})}
</nav>
</div>
</aside>

{/* Overlay */}
{sidebarOpen && (
<div
onClick={() => setSidebarOpen(false)}
className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-30 lg:hidden transition-opacity"
></div>
)}

{/* Main Content */}
<main className="mt-20 lg:ml-72 p-4">
<Outlet/>
</main>
</div>
);
};

export default AdminLayout;