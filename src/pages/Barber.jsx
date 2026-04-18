import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";

const barberos = [
  {
    id: 1,
    nombre: "Carlos Méndez",
    descripcion: "Cortes clásicos y modernos",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    id: 2,
    nombre: "Miguel Torres",
    descripcion: "Especialista en barbas",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    id: 3,
    nombre: "Andrés Silva",
    descripcion: "Diseños y tendencias",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
  },
];

const steps = ["Servicio", "Barbero", "Fecha", "Confirmar"];

export default function Barber() {
  const [seleccionado, setSeleccionado] = useState(null);
  const navigate = useNavigate();

  const currentStep = 1;

  const handleContinuar = () => {
    if (!seleccionado) return;
    navigate("/agendar/time"); 
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">

        {/* STEPPER */}
        <div className="mb-8">
          <div className="flex justify-between text-xs mb-2">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className={`w-3 h-3 rounded-full mb-1 transition-all
                  ${index <= currentStep ? "bg-black" : "bg-gray-300"}`}
                />
                <span
                  className={`text-center text-xs ${
                    index <= currentStep ? "text-black font-medium" : "text-gray-400"
                  }`}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-2 bg-black rounded-full transition-all duration-300"
              style={{
                width: `${((currentStep + 1) / steps.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* TITULO */}
        <h1 className="text-3xl font-bold mb-6">Agendar Cita</h1>

        {/* SUBTITULO */}
        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <FaUserTie className="text-black" />
          Selecciona tu Barbero
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {barberos.map((barbero) => (
            <div
              key={barbero.id}
              onClick={() => setSeleccionado(barbero)}
              className={`cursor-pointer bg-white rounded-xl p-5 border transition-all duration-300
              ${
                seleccionado?.id === barbero.id
                  ? "border-black shadow-lg scale-[1.02]"
                  : "border-gray-200 hover:border-black hover:shadow-sm"
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={barbero.img}
                  alt={barbero.nombre}
                  className="w-20 h-20 rounded-full object-cover mb-3"
                />

                <h3 className="font-semibold text-base">
                  {barbero.nombre}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {barbero.descripcion}
                </p>

                <span className="mt-3 text-xs bg-gray-100 px-3 py-1 rounded-full">
                  ⭐ {barbero.rating}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* BOTONES */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 bg-white border rounded-lg"
          >
            Atrás
          </button>

          <button
            disabled={!seleccionado}
            onClick={handleContinuar}
            className={`px-6 py-2 rounded-lg font-medium transition-all
            ${
              seleccionado
                ? "bg-black text-yellow-400 hover:opacity-90"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Continuar
          </button>
        </div>

      </div>
    </div>
  );
}