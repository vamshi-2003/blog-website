import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';

export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  return (
    <Navbar className='border-b-2 '>
      <Link to='/' className='self-centre whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white' >
      <span className='pl-2 py-1 bg-purple-800 hover:bg-purple-950 border border-white rounded-tl-lg text-white '>MERN</span>
      <span className='pr-2 py-1 bg-white border border-purple-800 hover:border-purple-950 rounded-br-lg text-purple-800 hover:text-purple-950 '>BLOG</span>
      </Link>
      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className=' lg:hidden border-black border-2'color='purple' >
        <AiOutlineSearch className=' text-xl'/>
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button color='purple' 
          className=' border-black border-2 hidden sm:inline'
          onClick={() => dispatch(toggleTheme())}
        > 
          {theme === 'light' ? <FaSun className='text-xl'/> : <FaMoon className='text-xl'/>}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
            <Link to='/Signin'>
            <Button className='border-black border-2' color='purple' >
            Sign In
            </Button>
            </Link>
        )}
       
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/" }as={'div'}
        className={` rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2  
        ${path === '/' ? 'text-white bg-purple-800  md:text-xl md:border-black md:border-2 md:text-white md:bg-purple-800' : 'md:hover:text-xl md:hover:text-purple-950 md:hover:border-purple-950 md:hover:border-b-2 '
        }`}
        ><Link to='/'>Home</Link></Navbar.Link>
        <Navbar.Link active={path === "/about"}as={'div'}
        className={` rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 
        ${path === '/about' ? 'text-white bg-purple-800  md:text-xl md:border-black md:border-2 md:text-white md:bg-purple-800' : 'md:hover:text-xl md:hover:text-purple-950 md:hover:border-purple-950 md:hover:border-b-2 '
        }`}
        ><Link to='/about'>About</Link></Navbar.Link>
        <Navbar.Link active={path === "/projects"}as={'div'}
        className={` rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 
        ${path === '/projects' ? 'text-white bg-purple-800  md:text-xl md:border-black md:border-2 md:text-white md:bg-purple-800' : 'md:hover:text-xl md:hover:text-purple-950 md:hover:border-purple-950 md:hover:border-b-2 '
        }`}
        ><Link to='/projects'>Projects</Link></Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
