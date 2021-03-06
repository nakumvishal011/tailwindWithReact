import React from 'react';
export const Header = () =>{
    return <header className="lg:px-16 px-8 bg-white flex flex-wrap items-center py-4 shadow-md">
    <div className="flex-1 flex justify-between items-center">
    <a href="#" className="text-xl text-purple-800">Web Dev</a>
    </div>

    <label for="menu-toggle" className="pointer-cursor md:hidden block">
    <svg className="fill-current text-purple-900"
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
    </svg>
    </label>
    <input className="hidden" type="checkbox" id="menu-toggle" />

    <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
    <nav>
        <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
        <li className="hover:bg-purple-900 rounded"><a className="md:p-4 py-3 px-0 block text-purple-400 hover:text-white" href="#home">Home</a></li>
        <li className="hover:bg-purple-900 rounded"><a className="md:p-4 py-3 px-0 block text-purple-400 hover:text-white" href="#tech-stack">TechStack</a></li>
        <li className="hover:bg-purple-900 rounded"><a className="md:p-4 py-3 px-0 block text-purple-400 hover:text-white" href="#about">AboutMe</a></li>
        <li className="hover:bg-purple-900 rounded"><a className="md:p-4 py-3 px-0 block text-purple-400 hover:text-white" href="#">Treatments</a></li>
        <li className="hover:bg-purple-900 rounded"><a className="md:p-4 py-3 px-0 block text-purple-400 hover:text-white" href="#">Blog</a></li>
        <li className="hover:bg-purple-900 rounded"><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2 text-purple-400 hover:text-white" href="#">Contact Us</a></li>
        </ul>
    </nav>
    </div>
</header>
}
