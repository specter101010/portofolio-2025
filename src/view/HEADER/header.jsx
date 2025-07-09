function Navbar({ onSelect, disabled, activeMenu }) {
    const menus = ["Home","Education","Project", "Skills", "Experience", "Contact"];
  
    return (
      <div className="w-full flex justify-center">
        <ul
          className={`container_nav flex gap-10 bg-[#17153B] w-145 h-10 justify-center items-center m-10 rounded-2xl ${
            disabled ? "pointer-events-none opacity-50" : ""
          }`}
        >
          {menus.map((menu) => (
            <li
              key={menu}
              onClick={() => !disabled && onSelect(menu)}
              className={`cursor-pointer transition duration-300 ${
                activeMenu === menu ? "text-white" : "text-[#4B70F5]"
              }`}
            >
              {menu}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Navbar;
  