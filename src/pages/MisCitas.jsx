import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  FiUser,
  FiCalendar,
  FiClock,
  FiScissors
} from "react-icons/fi";

const MisCitas = () => {

  const navigate = useNavigate();

  const [citas, setCitas] = useState([]);

  const [modal, setModal] = useState(null);

  const [loading, setLoading] = useState(true);

  // OBTENER CITAS
  const obtenerCitas = async () => {

    try {

      const response = await fetch(
        "http://localhost:8080/api/appointments"
      );

      const data = await response.json();

      setCitas(data);

    } catch (error) {

      console.error(
        "Error obteniendo citas",
        error
      );

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    obtenerCitas();

  }, []);

  // ELIMINAR CITA
  const eliminarCita = async (id) => {

    try {

      await fetch(
        `http://localhost:8080/api/appointments/${id}`,
        {
          method: "DELETE"
        }
      );

      // RECARGAR CITAS
      obtenerCitas();

      setModal(null);

    } catch (error) {

      console.error(
        "Error eliminando cita",
        error
      );
    }
  };

  // PDF
  const handlePDF = async (cita) => {

    const { generarTicketPDF } = await import(
      "../utlis/generarTicketPDF"
    );

    generarTicketPDF(cita);
  };

  // LOADING
  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-gray-100">

        <p className="text-gray-500">
          Cargando citas...
        </p>

      </div>

    );
  }

  return (

    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <h1 className="text-3xl font-bold mb-2">
          Mis Citas
        </h1>

        <p className="text-gray-500 mb-6">
          Gestiona todas tus citas
        </p>

        {/* SI HAY CITAS */}
        {citas.length > 0 ? (

          <div className="grid md:grid-cols-3 gap-6">

            {citas.map((cita) => {

              // FECHA
              const fechaFormateada =
                new Date(
                  `${cita.date}T00:00:00`
                ).toLocaleDateString(
                  "es-MX",
                  {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                  }
                );

              return (

                <div
                  key={cita.id}
                  className="bg-white rounded-xl shadow p-5"
                >

                  {/* STATUS */}
                  <span
                    className={`
                      text-xs px-2 py-1 rounded font-medium

                      ${
                        cita.status === "ACTIVA"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }
                    `}
                  >
                    {cita.status}
                  </span>

                  {/* SERVICIO */}
                  <h3 className="mt-3 font-semibold text-lg">
                    {cita.service}
                  </h3>

                  {/* INFO */}
                  <div className="mt-3 space-y-2 text-sm text-gray-600">

                    {/* BARBERO */}
                    <p className="flex items-center gap-2">

                      <FiUser />

                      {cita.barber}

                    </p>

                    {/* FECHA */}
                    <p className="flex items-center gap-2">

                      <FiCalendar />

                      {fechaFormateada}

                    </p>

                    {/* HORA */}
                    <p className="flex items-center gap-2">

                      <FiClock />

                      {cita.time}

                    </p>

                    {/* CLIENTE */}
                    <p className="flex items-center gap-2">

                      <FiScissors />

                      Cliente:
                      {" "}
                      {cita.userName}

                    </p>

                  </div>

                  {/* BOTONES */}
                  <div className="mt-4 space-y-2">

                    <button
                      onClick={() => handlePDF(cita)}
                      className="w-full bg-black text-yellow-400 py-2 rounded-lg hover:bg-gray-900"
                    >
                      Descargar comprobante
                    </button>

                    <button
                      onClick={() => setModal(cita)}
                      className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
                    >
                      Cancelar Cita
                    </button>

                  </div>

                </div>

              );
            })}

          </div>

        ) : (

          <div className="text-center mt-20">

            <p className="text-gray-500 mb-4">
              No tienes citas agendadas
            </p>

            <button
              onClick={() => navigate("/agendar")}
              className="bg-black text-yellow-400 px-6 py-2 rounded-lg"
            >
              Agendar Nueva Cita
            </button>

          </div>

        )}

        {/* MODAL */}
        {modal && (

          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white rounded-xl p-6 w-80 shadow-lg">

              <h3 className="font-semibold text-lg mb-2">
                ¿Cancelar cita?
              </h3>

              <p className="text-sm text-gray-500 mb-4">

                Esta acción no se puede deshacer

              </p>

              <div className="flex justify-end gap-2">

                <button
                  onClick={() => setModal(null)}
                  className="px-4 py-2 border rounded"
                >
                  No
                </button>

                <button
                  onClick={() => eliminarCita(modal.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded"
                >
                  Sí, cancelar
                </button>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
};

export default MisCitas;