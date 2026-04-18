import React from "react";

export default function CTASection() {
  return (
    <section className="w-full py-14 md:py-18 px-6 flex justify-center items-center bg-black">

      {/* Contenido */}
      <div className="text-center max-w-2xl text-white">

        {/* Título */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          ¿Listo para{" "}
          <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#C9A227] bg-clip-text text-transparent">
            tu nuevo look
          </span>
          ?
        </h2>

        {/* Línea */}
        <div className="mx-auto mt-5 w-20 h-1 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#C9A227] rounded-full"></div>

        {/* Texto */}
        <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
          Agenda tu cita ahora y experimenta el mejor servicio de barbería de la ciudad.
        </p>

        {/* Botón */}
        <div className="mt-10">
          <a
            href="https://wa.me/5210000000000"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#C9A227] text-black px-10 py-4 rounded-md font-semibold text-base md:text-lg tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.5)]"
          >
            Reserva Tu Cita Ahora
          </a>
        </div>

      </div>
    </section>
  );
}