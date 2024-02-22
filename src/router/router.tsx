import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AdminReports } from "../containers";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminReports />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
