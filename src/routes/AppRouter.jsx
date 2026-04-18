import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AgendarCita from '../pages/AgendarCita';
import Layout from "../layout/Layout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="agendar" element={<AgendarCita />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}