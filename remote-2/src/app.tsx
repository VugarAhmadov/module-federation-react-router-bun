import MainLayout from "@/layouts/main";
import { lazy } from "react";
import { Route, Routes } from "react-router";

const HomePage = lazy(() => import("@/pages/home"));
const ContactPage = lazy(() => import("@/pages/contact"));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}
