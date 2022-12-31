import { Menu, Transition } from "@headlessui/react";

const NavMenu = () => {
  return (
    <nav class="w-[100vw] h-[5vh] flex justify-end items-center">
      <div class="hidden lg:flex lg:justify-center">
        <a href="/" class="px-5"><h2>Home</h2></a>
        <a href="/blog" class="px-5"><h2>Blog</h2></a>
        <a href="/about" class="px-5"><h2>About</h2></a>
      </div>
    </nav>
  );
};

export default NavMenu;
