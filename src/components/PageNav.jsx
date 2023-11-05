import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

function PageNav() {
  return (
    <nav className=' text-2xl bg-transparent text-white items-center   flex  w-full'>
      {/* Logo */}
      <Link to='/'>
        <Logo />
      </Link>

      {/* Navlinks */}

      <ul className=' items-center justify-end w-full flex gap-7'>
        <li>
          <NavLink to='/pricing'>Pricing</NavLink>
        </li>
        <li>
          <NavLink to='/product'>Product</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
