import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Layout/footer';
import Header from '../Components/Layout/Header';

// Main App Component with Layout
const DevHubApp = () => {
return (
<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
{/* Animated Background */}
<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
<div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
</div>
{/* Header */}
<Header />
{/* Breadcrumbs */}

{/* Main Content Outlet */}
<main className="relative">
<Outlet />
</main>
{/* Footer */}
<Footer />
</div>
);
};

export default DevHubApp;