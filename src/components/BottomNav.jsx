import { useState, useRef, useEffect } from 'react';
import { menuItems } from '../data/menuItems';
import { CiUser } from "react-icons/ci";

export default function BottomNav() {

  const [openUser, setOpenUser] = useState(false);
  const userRef = useRef(null);

  // cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setOpenUser(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-zinc-900 text-white border-t shadow-md z-50">
      
      <div className="flex justify-around items-center py-2">

        {/* BOTONES NORMALES */}
        {menuItems
          .filter(item => item.label !== 'Perfil')
          .map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                onClick={() => setOpenUser(false)}
                className="flex flex-col items-center text-xs hover:text-yellow-400 transition"
              >
                <Icon size={22} />
                <span>{item.label}</span>
              </button>
            );
          })
        }

        {/* 👤 PERFIL (SEPARADO) */}
        <div className="relative" ref={userRef}>

          <button
            onClick={() => setOpenUser(!openUser)}
            className="flex flex-col items-center text-xs hover:text-yellow-400 transition"
          >
            <CiUser size={22} />
            <span>Perfil</span>
          </button>

          {/* DROPDOWN */}
          {openUser && (
            <div className="absolute bottom-14 right-0 bg-white text-black rounded-md shadow-lg w-56 z-50">

              <div className="p-3 border-b">
                <p className="font-semibold">Mi Cuenta</p>
              </div>

              <div className="p-3 flex items-center gap-2">
                <CiUser />
                <div>
                  <p className="text-sm font-medium">Oscar</p>
                  <p className="text-xs text-gray-500">oscar@gmail.com</p>
                </div>
              </div>

              <div className="p-3 border-t text-red-500 cursor-pointer hover:bg-gray-100">
                Cerrar Sesión
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}