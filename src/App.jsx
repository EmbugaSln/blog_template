import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllPosts from "./pages/AllPosts";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";
export default function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="posts" element={<AllPosts />} />
          <Route path="posts/:id" element={<SinglePost/>} />
          <Route path="*" element={<h1>Not Found</h1>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}