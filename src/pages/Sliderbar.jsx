import React, {useState} from 'react'
import logo from '../logo.png';

// Icons
import { MdMenuOpen } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { GrCatalogOption } from "react-icons/gr";
import { CiCalendar } from "react-icons/ci";
import { CiCircleList } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { list } from 'postcss';


const menuItems = [
  {
    icons:<IoHomeOutline size={30}/>,
    label:'Inicio'
  },
  {
    icons:<GrCatalogOption size={30}/>,
    label:'Servicios'
  },
  {
    icons:<CiCalendar size={30}/>,
    label:'Agendar'
  },
  {
    icons:<CiCircleList size={30}/>,
    label:'Mis Citas'
  },
]


export default function Sliderbar() {

  const [open, setOpen] = useState(true)

  return (
    <nav className={`shadow-md h-screen p-2 flex flex-col duration-500 bg-zinc-900 text-white ${open ? 'w-60' : 'w-16'}`}>
      {/* Header */}
      <div className=' px-3 py-5 h-20 flex justify-between items-center'>
        <img src={logo} alt='Logo' className={`${open ? 'w-10' : 'w-5'} rounded-md`}></img> 
        <div><MdMenuOpen size={36} className={` duration-500 cursor-pointer ${!open && 'rotate-180'}`} onClick={() => setOpen(!open)} /></div>
      </div>

      <br></br>


      {/* Body */}
      <ul className='flex-1'>
        {
          menuItems.map((item,index)=>{
            return(
              <li key={index} className='px-3 py-2 my-2 hover:bg-blue-100 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group'>
                <div>{item.icons}</div>
                <p className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>{item.label}</p>
                <p className={`${open && 'hidden'} absolute left-32 shadow-md rounded-md
                w-0
                p-0
                  duration-300
                  text-black
                  overflow-hidden
                  group-hover:w-fit
                  group-hover:p-2
                  group-hover:left-16
                `}>{item.label}</p>
              </li>
            )
          })
        }
      </ul>

      <div className='flex items-center gap-2 px-3 py-2'>
        <div><CiUser size={30}/></div>
        <div className={`leading-5 ${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>
          <p>Oscar Nuño</p>
        </div>
      </div>
    </nav>
  )
}