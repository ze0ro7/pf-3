import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Header } from "./components/header";
import Index from "./pages/Index";
import { Footer } from "./components/footer";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectPage";
import AchievementsPage from "./pages/AchievementsPage";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import BlogPost from "./pages/BlogPost";
import CoursesPage from "./pages/CoursePage";

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    <Toaster position="top-right" richColors />
  </ThemeProvider>
);

export default App;
