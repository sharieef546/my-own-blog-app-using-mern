import { Button, Navbar, TextInput } from 'flowbite-react';
import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const path=useLocation().pathname;

  return (
    <div className="border-b-2">
      <Navbar>
        {/* Correct usage of Navbar.Brand */}
        <Navbar.Brand href="/">
          <span className="px-2 py-1 bg-gradient-to-r from-black via-blue-500 to-yellow-500 rounded-lg text-white">
            Sharieef's
          </span>
          Blog
        </Navbar.Brand>

        <div className="flex items-center">
          {/* Search Form */}
          <form className="hidden lg:block">
            <TextInput
              type="text"
              placeholder="Search..."
              icon={AiOutlineSearch}  // If TextInput has a 'rightIcon' or 'icon' prop, use it
            />
          </form>

          {/* Mobile Search Button */}
          <Button className="w-10 h-10 lg:hidden" pill>
            <AiOutlineSearch />
          </Button>

          {/* Dark Mode Toggle Button */}
          <Button className="ml-2">
            <FaMoon />
          </Button>

          {/* Sign In Button */}
          <Link to="/signin">
            <Button gradientDuoTone="red-to-blue" className="ml-2">
              Sign In
            </Button>
          </Link>
          <Navbar.Toggle/>
        </div>


        {/* Navbar Collapse for additional links */}
        <Navbar.Collapse>
          <Navbar.Link active={path==="/"} as={'div'}>
          <Link to="/" className="p-2">
            Home
          </Link>
          </Navbar.Link>
          <Navbar.Link active={path==="/about"} as={'div'}>
          <Link to="/about" className="p-2">
            About
          </Link>
          </Navbar.Link>
          <Navbar.Link active={path==="/projects"} as={'div'}>
          <Link to="/projects" className="p-2">
            Projects
          </Link>
          </Navbar.Link>
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

