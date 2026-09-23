import { Routes, Route } from "react-router";
import RootLayout from "@/layouts/root-layout";
import HomePage from "@/pages/home/home";
import AboutPage from "@/pages/about/about";
import ProjectsPage from "@/pages/projects/projects";
import ContactPage from "@/pages/contact/contact";
import NotFoundPage from "@/pages/not-found/not-found";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}