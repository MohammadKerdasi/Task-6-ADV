import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import NewsletterPage from './pages/NewsLetterPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
    <Router basename="/The-Blog">
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/newsletter" element={<NewsletterPage />} />
          </Routes>
        <Footer />
    </Router>
    </ThemeProvider>
  );
}

export default App;