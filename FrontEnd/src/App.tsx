import { Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "./Pages/Auth/common"
import Login from "./Pages/Auth/login"
import Signup from "./Pages/Auth/signup"

function App() {
  return (
    <>
<Routes>
<Route path="/auth" element={<LoginPage />}>
<Route index element={<Navigate to="login" replace />} />
<Route path="login" element={<Login />} />
<Route path="signup" element={<Signup />} />
</Route>
</Routes>
    </>
  )
}

export default App
