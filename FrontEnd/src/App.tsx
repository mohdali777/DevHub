import { Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "./Pages/Auth/common"
import Login from "./Pages/Auth/login"
import Signup from "./Pages/Auth/signup"
import ModernDevArticlesApp from "./layouts/UserLayout"
import HomePage from "./Pages/Home/home"
import PublicRoutes from "./Routes/PublicRoutes"
import UserRoutes from "./Routes/UserRoutes"
import UserProfilePage from "./Pages/Userprofile/profile"
import ArticlePage from "./Pages/Articles/artilcemain"
import AdminLayout from "./layouts/admin"
import AdminRoutes from "./Routes/admin"
import ArticleReadingPage from "./Pages/Articles/articleview"
import AdminArticleListing from "./Pages/Articles/admin/Listing"
import CreateArticle from "./Pages/Articles/admin/Create"

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
<Route path="/articles" element={<ArticlePage/>} />
<Route path="/articles/view" element={<ArticleReadingPage/>} />
<Route path="/user/profile" element={<UserProfilePage/>} />
</Route>
</Route>


<Route element={<AdminRoutes/>}>
<Route path="/admin" element={<AdminLayout/>}>
<Route path="articles" element={<AdminArticleListing/>}></Route>
<Route path="articles/create" element={<CreateArticle/>}></Route>
</Route>
</Route>
</Routes>




</>
)
}

export default App
