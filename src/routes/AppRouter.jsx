import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AgendarCita from '../pages/AgendarCita';
import Barber from '../pages/Barber';
import Layout from "../layout/Layout";
import Time from '../pages/Time'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="agendar" element={<AgendarCita />} />
          <Route path="agendar/barbero" element={<Barber />} />
          <Route path="agendar/time" element={<Time />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}