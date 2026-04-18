import React, { useState, useRef, useEffect } from 'react'
import logo from '../logo.png';

// Icons
import { MdMenuOpen } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { GrCatalogOption } from "react-icons/gr";
import { CiCalendar } from "react-icons/ci";
import { CiCircleList } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const menuItems = [
  {
    icons: <IoHomeOutline size={30} />,
    label: 'Inicio'
  },
  {
    icons: <GrCatalogOption size={30} />,
    label: 'Servicios'
  },
  {
    icons: <CiCalendar size={30} />,
    label: 'Agendar'
  },
  {
    icons: <CiCircleList size={30} />,
    label: 'Mis Citas'
  },
]

export default function Sliderbar() {

  const [open, setOpen] = useState(true)
  const [openUser, setOpenUser] = useState(false)

  const userRef = useRef()

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setOpenUser(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className={`shadow-md min-h-screen p-2 flex flex-col duration-500 bg-zinc-900 text-white ${open ? 'w-60' : 'w-16'}`}>

      {/* Header */}
      <div className='px-3 py-5 h-20 flex justify-between items-center'>
        <img src={logo} alt='Logo' className={`${open ? 'w-10' : 'hidden'} rounded-md`} />
        <MdMenuOpen
          size={36}
          className={`duration-500 cursor-pointer ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* Body */}
      <ul className='flex-1'>
        {
          menuItems.map((item, index) => {
            return (
              <li
                key={index}
                className='px-3 py-2 my-2 hover:bg-blue-100 hover:text-black rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group'
              >
                <div>{item.icons}</div>

                <p className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>
                  {item.label}
                </p>

                {/* Tooltip cuando está cerrado */}
                <p className={`${open && 'hidden'} absolute left-32 shadow-md rounded-md
                  w-0 p-0 duration-300 text-black overflow-hidden bg-white
                  group-hover:w-fit group-hover:p-2 group-hover:left-16`}>
                  {item.label}
                </p>
              </li>
            )
          })
        }
      </ul>

      {/* Usuario */}
      <div className='relative' ref={userRef}>
        <div
          className='flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-zinc-800 rounded-md'
          onClick={() => setOpenUser(!openUser)}
        >
          <CiUser size={30} />

          <div className={`leading-5 ${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>
            <p>Oscar Nuño</p>
          </div>
        </div>

        {/* Dropdown */}
        {
          openUser && (
            <div className="absolute bottom-14 left-0 bg-white text-black rounded-md shadow-lg w-56 z-50">

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
          )
        }
      </div>

    </nav>
  )
}