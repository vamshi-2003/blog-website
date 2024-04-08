import { Button, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
export default function Header() {
  const path=useLocation().pathname;
  return (
    <Navbar className='border-b-2 '>
      <Link to='/' className='self-centre whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white' >
      <span className='pl-2 py-1 bg-purple-900 border border-white rounded-tl-lg text-white '>MERN</span>
      <span className='pr-2 py-1 bg-white border border-purple-900 rounded-br-lg text-purple-900 '>BLOG</span>
      </Link>
      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className=' lg:hidden border-black border-2'color='purple' pill>
        <AiOutlineSearch className=' text-xl'/>
      </Button>
      <div className='flex gap-2 md:order-2'>
        {/* darkmode----------------------------- */}
        <Button color='purple' className=' border-black border-2 hidden sm:inline'pill  >
          <FaMoon className='text-xl'/>
        </Button>
        {/* sign in------------------------------------- */}
        <Link to='/Signin'>
          <Button className='border-black border-2' color='purple' >
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/" }as={'div'}><Link to='/'>Home</Link></Navbar.Link>
        <Navbar.Link active={path === "/about"}as={'div'}><Link to='/about'>About</Link></Navbar.Link>
        <Navbar.Link active={path === "/projects"}as={'div'}><Link to='/projects'>Projects</Link></Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
