import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import About from "./pages/About"
import Profile from "./pages/Profile"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/signin" element={<Signin></Signin>} />
      <Route path="/signup" element={<Signup></Signup>} />
      <Route path="/about" element={<About></About>} />
      <Route path="/profile" element={<Profile></Profile>} />
    </Routes>
    </BrowserRouter>
  )
}
