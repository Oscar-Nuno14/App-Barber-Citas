import React from "react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">

      {/* Imagen de fondo */}
      <img
        src="https://images.unsplash.com/photo-1519415943484-9fa1873496d4"
        alt="Barber"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20 text-white max-w-2xl">
        
        {/* Icono/logo */}
        <div className="mb-4 text-4xl">✂️</div>

        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Agenda tu corte de cabello
        </h1>

        {/* Descripción */}
        <p className="mt-4 text-gray-300">
          Reserva tu cita en pocos pasos y mantén tu estilo siempre impecable.
        </p>

        {/* Botones */}
        <div className="mt-6 flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
            Agendar Cita
          </button>

          <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
            Ver Servicios
          </button>
        </div>

      </div>
    </section>
  );
}