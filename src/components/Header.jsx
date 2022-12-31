import NavMenu from "./NavMenu.jsx";
import { useState } from "react";
import Sidebar from "./Sidebar.jsx";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-[100vw] flex justify-center">
        <div className="w-[90vw] flex justify-center items-center">
          <h1 class="pl-5 text-xl">Kanopo</h1>
          <NavMenu />
          <button
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="sidebar"
            aria-label="Open Menu"
            class="pr-5"
          >
            <svg viewBox="0 0 100 80" width="20" height="20" class="lg:hidden">
              <rect width="100" height="20" rx="10"></rect>
              <rect y="30" width="100" height="20" rx="10"></rect>
              <rect y="60" width="100" height="20" rx="10"></rect>
            </svg>
          </button>
          <Sidebar open={open} setOpen={setOpen} />
        </div>
    </header>
  );
};

export default Header;
