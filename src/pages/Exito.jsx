import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import {
  FiScissors,
  FiUser,
  FiCalendar,
  FiClock
} from "react-icons/fi";

const Exito = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const data =
    location.state ||
    JSON.parse(localStorage.getItem("citaConfirmada"));

  const {
    servicio,
    fecha,
    hora,
    barbero
  } = data || {};

  // SI NO HAY DATA
  if (!servicio || !fecha || !hora || !barbero) {

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">

        <button
          onClick={() => navigate("/")}
          className="px-5 py-3 rounded-xl bg-black text-yellow-400"
        >
          Volver al inicio
        </button>

      </div>
    );
  }

  // FORMATEAR FECHA
  const fechaFormateada = new Date(
    `${fecha}T00:00:00`
  ).toLocaleDateString("es-MX", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

      <div className="max-w-xl w-full text-center">

        {/* ICONO */}
        <div className="flex justify-center mb-4">

          <div className="border-4 border-yellow-400 rounded-full p-4">

            <FaCheckCircle className="text-yellow-400 text-5xl" />

          </div>

        </div>

        {/* TITULO */}
        <h1 className="text-3xl font-bold mb-2">
          ¡Cita Confirmada!
        </h1>

        <p className="text-gray-500 text-sm mb-8">
          Tu cita ha sido agendada exitosamente.
          Te esperamos en BarberStudio.
        </p>

        {/* CARD */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-left mb-6 space-y-5">

          {/* SERVICIO */}
          <div className="flex gap-4">

            <div className="bg-yellow-100 p-3 rounded-xl h-fit">
              <FiScissors className="text-yellow-600 text-lg" />
            </div>

            <div>

              <p className="text-xs text-gray-500">
                Servicio
              </p>

              <p className="font-semibold">
                {servicio.nombre}
              </p>

              <p className="text-sm text-gray-400">
                {servicio.duracion} • $
                {servicio.precio.toLocaleString()}
              </p>

            </div>

          </div>

          {/* BARBERO */}
          <div className="flex gap-4">

            <div className="bg-yellow-100 p-3 rounded-xl h-fit">
              <FiUser className="text-yellow-600 text-lg" />
            </div>

            <div>

              <p className="text-xs text-gray-500">
                Barbero
              </p>

              <p className="font-semibold">
                {barbero.nombre}
              </p>

              <p className="text-sm text-gray-400">
                {barbero.especialidad}
              </p>

            </div>

          </div>

          {/* FECHA */}
          <div className="flex gap-4">

            <div className="bg-yellow-100 p-3 rounded-xl h-fit">
              <FiCalendar className="text-yellow-600 text-lg" />
            </div>

            <div>

              <p className="text-xs text-gray-500">
                Fecha
              </p>

              <p className="font-semibold capitalize">
                {fechaFormateada}
              </p>

            </div>

          </div>

          {/* HORA */}
          <div className="flex gap-4">

            <div className="bg-yellow-100 p-3 rounded-xl h-fit">
              <FiClock className="text-yellow-600 text-lg" />
            </div>

            <div>

              <p className="text-xs text-gray-500">
                Hora
              </p>

              <p className="font-semibold">
                {hora}
              </p>

            </div>

          </div>

        </div>

        {/* IMPORTANTE */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-left mb-6">

          <p className="font-semibold text-blue-700 mb-3">
            Importante
          </p>

          <ul className="text-blue-600 text-sm space-y-2">

            <li>
              • Llega 5 minutos antes de tu cita
            </li>

            <li>
              • Cancela con al menos 2 horas de anticipación
            </li>

            <li>
              • Muestra tu comprobante al llegar
            </li>

          </ul>

        </div>

        {/* BOTONES */}
        <div className="flex flex-col sm:flex-row gap-3">

          <button
            onClick={() => navigate("/citas")}
            className="flex-1 border border-gray-300 py-3 rounded-xl hover:bg-gray-200 transition"
          >
            Ver Mis Citas
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex-1 bg-black text-yellow-400 py-3 rounded-xl hover:bg-gray-900 transition"
          >
            Volver al Inicio
          </button>

        </div>

      </div>

    </div>
  );
};

export default Exito;