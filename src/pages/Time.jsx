import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiCalendar } from "react-icons/fi";

const horariosPorDia = {
  1: [
    { inicio: "10:00", fin: "14:00" },
    { inicio: "16:30", fin: "20:00" }
  ],
  2: [
    { inicio: "10:00", fin: "14:00" },
    { inicio: "16:30", fin: "20:00" }
  ],
  3: [
    { inicio: "10:00", fin: "14:00" },
    { inicio: "16:30", fin: "20:00" }
  ],
  4: [
    { inicio: "10:00", fin: "14:00" },
    { inicio: "17:00", fin: "20:00" }
  ],
  5: [
    { inicio: "10:00", fin: "14:00" },
    { inicio: "16:30", fin: "20:00" }
  ],
  6: [
    { inicio: "10:00", fin: "19:00" }
  ],
  0: [
    { inicio: "10:30", fin: "14:30" }
  ]
};

const generarHoras = (inicio, fin) => {
  const horas = [];

  let [h, m] = inicio.split(":").map(Number);
  let [hFin, mFin] = fin.split(":").map(Number);

  while (h < hFin || (h === hFin && m <= mFin)) {
    horas.push(
      `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`
    );

    m += 30;

    if (m >= 60) {
      m = 0;
      h++;
    }
  }

  return horas;
};

const generarFechas = () => {
  const fechas = [];
  const hoy = new Date();

  for (let i = 0; i < 12; i++) {
    const nueva = new Date();
    nueva.setDate(hoy.getDate() + i);
    fechas.push(nueva);
  }

  return fechas;
};

const Time = () => {
  const navigate = useNavigate();

  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [horas, setHoras] = useState([]);
  const [horaSeleccionada, setHoraSeleccionada] = useState(null);

  const fechas = generarFechas();

  const pasoActual = 2;

  const seleccionarFecha = (fecha) => {
    setFechaSeleccionada(fecha);
    setHoraSeleccionada(null);

    const dia = fecha.getDay();
    const bloques = horariosPorDia[dia] || [];

    let horasGeneradas = [];

    bloques.forEach((bloque) => {
      horasGeneradas = [
        ...horasGeneradas,
        ...generarHoras(bloque.inicio, bloque.fin)
      ];
    });

    setHoras(horasGeneradas);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* HEADER */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Agendar Cita
        </h1>

        {/* PROGRESS */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`h-2 w-1/4 rounded-full ${
                step <= pasoActual ? "bg-black" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        {/* TÍTULO */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-black text-white p-2 rounded-lg">
            <FiCalendar className="text-lg" />
          </div>

          <div>
            <p className="text-lg font-semibold text-gray-900">
              Selecciona Fecha y Hora
            </p>
            <p className="text-sm text-gray-500">
              Elige el día y la hora disponible
            </p>
          </div>
        </div>

        {/* FECHAS */}
        <p className="text-gray-700 mb-2 font-medium">Fecha</p>
        <div className="flex flex-wrap gap-3 mb-6">
          {fechas.map((fecha, i) => {
            const label = fecha.toLocaleDateString("es-MX", {
              weekday: "short",
              day: "numeric",
              month: "short"
            });

            return (
              <button
                key={i}
                onClick={() => seleccionarFecha(fecha)}
                className={`px-4 py-2 rounded-xl text-sm border transition-all duration-200 ${
                  fechaSeleccionada?.toDateString() === fecha.toDateString()
                    ? "bg-black text-white scale-105"
                    : "bg-white hover:bg-gray-200"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* HORAS (OPTIMIZADAS) */}
        <p className="text-gray-700 mb-2 font-medium">Hora</p>

        {horas.length > 0 ? (
          <div className="grid grid-cols-5 md:grid-cols-6 gap-2 mb-6">
            {horas.map((hora, i) => (
              <button
                key={i}
                onClick={() => setHoraSeleccionada(hora)}
                className={`py-2 rounded-lg text-xs border transition-all duration-200 ${
                  horaSeleccionada === hora
                    ? "bg-black text-white scale-105"
                    : "bg-white hover:bg-gray-200"
                }`}
              >
                {hora}
              </button>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 mb-6">
            Selecciona una fecha para ver horarios
          </p>
        )}

        {/* BOTONES */}
        <div className="flex justify-between">

          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 border rounded-xl hover:bg-gray-200 transition"
          >
            Atrás
          </button>

          <button
            onClick={() =>
              navigate("/agendar/barbero", {
                state: {
                  fecha: fechaSeleccionada,
                  hora: horaSeleccionada
                }
              })
            }
            disabled={!horaSeleccionada}
            className={`px-6 py-2 rounded-xl font-medium transition ${
              horaSeleccionada
                ? "bg-black text-yellow-400 hover:bg-gray-900"
                : "bg-gray-300 text-gray-500"
            }`}
          >
            Continuar
          </button>

        </div>

      </div>
    </div>
  );
};

export default Time;