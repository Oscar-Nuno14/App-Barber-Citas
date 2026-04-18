import React from "react";
import { CiCalendar, CiClock2, CiMedal, CiUser } from "react-icons/ci";

export default function WhyUs() {
  const items = [
    {
      icon: <CiCalendar size={30} />,
      title: "Agenda Online",
      desc: "Reserva tu cita en cualquier momento",
    },
    {
      icon: <CiClock2 size={30} />,
      title: "Horarios Flexibles",
      desc: (
        <>
         Disponibilidad amplia <br />
         toda la semana
        </>
        ),
    },
    {
      icon: <CiMedal size={30} />,
      title: "Profesionales",
      desc: "Barberos con más de 6 años de experiencia",
    },
    {
      icon: <CiUser size={30} />,
      title: "Atención Premium",
      desc: "Servicio personalizado para cada cliente",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">
      
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        ¿Por Qué Elegirnos?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-yellow-200 p-6 text-center hover:shadow-lg transition"
          >
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full border border-yellow-400 text-yellow-500 mb-4">
              {item.icon}
            </div>

            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}

      </div>
    </section>
  );
}