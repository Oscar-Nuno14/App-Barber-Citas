import logo from '../logo.png';
import { menuItems } from '../data/menuItems';

export default function TopNavbar() {
  return (
    <nav className="hidden md:flex items-center justify-between px-8 py-4 bg-zinc-900 text-white shadow-md">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-10 rounded-md" />
        <span className="font-bold text-lg">Barber App</span>
      </div>

      {/* Menú */}
      <ul className="flex gap-8">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <li
              key={index}
              className="flex items-center gap-2 cursor-pointer hover:text-yellow-400 transition"
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </li>
          );
        })}
      </ul>

      {/* Usuario */}
      <div className="cursor-pointer hover:text-yellow-400">
        Oscar
      </div>

    </nav>
  );
}