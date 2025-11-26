import { Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "./Pages/Auth/common"
import Login from "./Pages/Auth/login"
import Signup from "./Pages/Auth/signup"
import ModernDevArticlesApp from "./layouts/UserLayout"
import HomePage from "./Pages/Home/home"
import ArticleHome from "./Pages/Articles/artilcemain"
import PublicRoutes from "./Routes/PublicRoutes"
import UserRoutes from "./Routes/UserRoutes"
import UserProfilePage from "./Pages/Userprofile/profile"

function App() {
return (
<>
<Routes>

<Route element={<PublicRoutes/>}>
<Route path="/auth" element={<LoginPage />}>
<Route index element={<Navigate to="login" replace />} />
<Route path="login" element={<Login />} />
<Route path="signup" element={<Signup />} />
</Route>
</Route>  

<Route element={<UserRoutes/>}>
<Route path="/" element={<ModernDevArticlesApp/>}>
<Route index element={<HomePage/>} />
<Route path="/articles" element={<ArticleHome/>} />
<Route path="/user/profile" element={<UserProfilePage/>} />
</Route>
</Route>
</Routes>
</>
)
}

export default App
