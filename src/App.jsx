import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllPosts from "./pages/AllPosts";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";
import CreatePost from "./pages/CreatePost";
import AuthContextProvider from "./context/AuthContext";

function Button() {
  let clickCount = 0;

  const handleClick = () => {
    clickCount++;
    console.log('Button clicked ' + clickCount + ' times');
  };

  return (
    <button onClick={handleClick}>
      Click me <span> {clickCount}</span>
    </button>
  );
}

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />
          <Button/>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="posts" element={<AllPosts />} />
            <Route path="posts/:id" element={<SinglePost />} />
            <Route path="posts/create" element={<CreatePost />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}
