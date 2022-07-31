import Link from 'next/link';

import classes from './NavBar.module.css';

const NavBar = () => {
  const pokeballIcon = "/images/pokeballicon.png";
  const { icon, option, navbar } = classes;

  return (
    <nav className={navbar}>
      <ul>
        <li><img src={pokeballIcon} alt="icon" className={icon}/></li>
        <li className={option}><Link href="/teams">Check Teams</Link></li>
        <li className={option}><Link href="/create">Create Teams</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
