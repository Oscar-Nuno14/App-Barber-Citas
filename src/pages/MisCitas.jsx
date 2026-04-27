import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiCalendar, FiClock, FiScissors } from "react-icons/fi";

const MisCitas = () => {
  const navigate = useNavigate();
  const [citas, setCitas] = useState([]);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("citas")) || [];
    setCitas(data);
  }, []);

  const eliminarCita = (index) => {
    const nuevas = citas.filter((_, i) => i !== index);
    setCitas(nuevas);
    localStorage.setItem("citas", JSON.stringify(nuevas));
    setModal(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

  
      <div className="max-w-6xl mx-auto">

  
        <h1 className="text-3xl font-bold mb-2">Mis Citas</h1>
        <p className="text-gray-500 mb-6">
          Gestiona todas tus citas agendadas
        </p>

        <h2 className="text-lg font-semibold mb-4">Próximas Citas</h2>

        {citas.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {citas.map((cita, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-5 transition hover:shadow-lg"
              >

            
                <span className="bg-yellow-400 text-xs px-2 py-1 rounded">
                  Confirmada
                </span>

           
                <h3 className="mt-3 font-semibold text-lg">
                  {cita.servicio.nombre}
                </h3>

                <div className="mt-3 space-y-2 text-sm text-gray-600">

                  <p className="flex items-center gap-2">
                    <FiUser /> {cita.barbero.nombre}
                  </p>

                  <p className="flex items-center gap-2">
                    <FiCalendar />
                    {new Date(cita.fecha).toLocaleDateString("es-MX", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric"
                    })}
                  </p>

                  <p className="flex items-center gap-2">
                    <FiClock /> {cita.hora}
                  </p>

                  <p className="flex items-center gap-2">
                    <FiScissors /> {cita.servicio.duracion}
                  </p>

                </div>

           
                <div className="mt-4 border-t pt-3">
                  <p className="text-sm text-gray-500">Total</p>
                  <p className="font-semibold">
                    ${cita.servicio.precio.toLocaleString()}
                  </p>
                </div>

       
                <button
                  onClick={() => setModal(index)}
                  className="mt-4 w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700 transition"
                >
                  Cancelar Cita
                </button>

              </div>
            ))}

          </div>
        ) : (
          <div className="text-center mt-20">
            <p className="text-gray-500 mb-4">
              No tienes citas agendadas
            </p>

            <button
              onClick={() => navigate("/agendar")}
              className="bg-black text-yellow-400 px-6 py-2 rounded-xl"
            >
              Agendar Nueva Cita
            </button>
          </div>
        )}

        {modal !== null && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

            <div className="bg-white rounded-xl p-6 w-80 shadow-lg">

              <h3 className="font-semibold text-lg mb-2">
                ¿Estás seguro?
              </h3>

              <p className="text-sm text-gray-500 mb-4">
                Esta acción cancelará tu cita. Si cambias de opinión,
                tendrás que agendar una nueva.
              </p>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setModal(null)}
                  className="px-4 py-2 border rounded-xl hover:bg-gray-100"
                >
                  No, mantener
                </button>

                <button
                  onClick={() => eliminarCita(modal)}
                  className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700"
                >
                  Sí, cancelar
                </button>
              </div>

            </div>

          </div>
        )}

        {citas.length > 0 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => navigate("/agendar")}
              className="bg-black text-yellow-400 px-6 py-3 rounded-xl"
            >
              Agendar Nueva Cita
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default MisCitas;