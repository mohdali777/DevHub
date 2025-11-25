import GoogleIcon from '../../assets/google-icon-logo-svgrepo-com.svg';
import LogoApp from '../../Components/logocontainer';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import axiosInstance from '../../Api/loginaxios';

const LoginPage = () => {
const navigate = useNavigate();
const location = useLocation();
const isLogin = location.pathname.includes('login');


const login = useGoogleLogin({
flow:"auth-code",    
onSuccess: async({code}) => {
try {
const response = await axiosInstance.post("/googlelogin",{token:code});
console.log(response);
} catch (error) {
console.log(error);
}
},
onError: (err) => console.error("Login Failed:", err),
});

return (
<div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">

{/* Animated Background */}
<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
<div
className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse"
style={{ animationDelay: '1s' }}
></div>
</div>

{/* Two-Column Layout */}
<div className="relative w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-center">

{/* Left Side - Branding & Image */}
<div className="flex-1 hidden lg:flex flex-col justify-center items-center text-center space-y-6 p-8">
<div className="relative">
<div className="w-full max-w-lg">
<div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20">
<LogoApp/>
</div>
</div>
</div>

<div className="space-y-4 max-w-md">
<h1 className="text-4xl font-bold text-gray-800 leading-tight">
Welcome to DevHub
</h1>
<p className="text-lg text-gray-600">
Read, learn, ask, repeat—DevHub keeps your development journey moving
</p>

{/* Feature highlights */}
<div className="grid grid-cols-1 gap-3 mt-8 text-left">
<div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-xl">
<div className="w-10 h-10 flex-shrink-0 bg-purple-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
✓
</div>
<span className="text-gray-700 font-medium">
Read practical setup guides—Node.js, Docker, architecture, and more.
</span>
</div>

<div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-xl">
<div className="w-10 h-10 flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
✓
</div>
<span className="text-gray-700 font-medium">
Ask questions and get real answers from experts.
</span>
</div>

<div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-xl">
<div className="w-10 h-10 flex-shrink-0 bg-pink-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
✓
</div>
<span className="text-gray-700 font-medium">
Connect, share, and grow with a supportive tech community.
</span>
</div>
</div>

</div>
</div>

{/* Right Side - Auth Card */}
<div className="flex-1 w-full max-w-md">
<div className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-8">

{/* Logo - Mobile only */}
<div className="flex flex-col items-center mb-5 lg:hidden">
<div className="relative p-4 rounded-2xl">
<LogoApp />
</div>
<p className="text-gray-600 text-sm mt-2">
{isLogin
? 'Welcome back! Please login to continue.'
: 'Create your account to get started.'}
</p>
</div>

{/* Desktop subtitle */}
<div className="hidden lg:block mb-5">
<p className="text-gray-600 text-sm text-center">
{isLogin
? 'Welcome back! Please login to continue.'
: 'Create your account to get started.'}
</p>
</div>

{/* Toggle Tabs */}
<div className="flex gap-2 mb-6 bg-gray-100 rounded-2xl p-1">
<button
onClick={() => navigate('/auth/login')}
className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
isLogin ? 'bg-white text-gray-900 shadow-md' : 'text-gray-600 hover:text-gray-900'
}`}
>
Login
</button>

<button
onClick={() => navigate('/auth/signup')}
className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
!isLogin ? 'bg-white text-gray-900 shadow-md' : 'text-gray-600 hover:text-gray-900'
}`}
>
Sign Up
</button>
</div>

{/* Google Login */}
<div className="space-y-3 mb-6">
<button
onClick={() => login()}
className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold py-3 rounded-xl transition-all hover:shadow-lg"
>
<img src={GoogleIcon} alt="Google" className="w-5 h-5" />
Continue with Google
</button>
</div>
{/* Divider */}
<div className="flex items-center gap-4 mb-6">
<div className="flex-1 h-px bg-gray-300"></div>
<span className="text-gray-500 text-sm font-medium">OR</span>
<div className="flex-1 h-px bg-gray-300"></div>
</div>
<Outlet/>
{/* Footer Switch */}
<p className="text-center text-sm text-gray-600 mt-6">
{isLogin ? "Don't have an account? " : "Already have an account? "}
<button
onClick={() => navigate(isLogin ? '/auth/signup' : '/auth/login')}
className="text-purple-600 hover:text-purple-700 font-semibold"
>
{isLogin ? 'Sign Up' : 'Login'}
</button>
</p>

</div>
</div>

</div>
</div>
);
};

export default LoginPage;

