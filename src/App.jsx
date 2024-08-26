import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Blog from "./components/views/Blog.jsx";
import Plans from "./components/views/Plans.jsx";
import Product from "./components/views/Product.jsx";
import NavBar from "./components/AppComponents/NavBar.jsx";
import Footer from "./components/AppComponents/Footer.jsx";
import SeenBlog from "./components/BlogComponents/SeenBlog.jsx";
import ForLegal from "./components/views/ForLegal.jsx";
import About from "./components/views/About.jsx";
import { UpdateProvider } from "./utilites/UpdateState.jsx";

const App = () => {
  return (
    <Router>
      <UpdateProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:blogLink" element={<SeenBlog />} />
          <Route path="/legal/:item" element={<ForLegal />} />
        </Routes>
      </UpdateProvider>
      <Footer />
    </Router>
  )
};

export default App;
