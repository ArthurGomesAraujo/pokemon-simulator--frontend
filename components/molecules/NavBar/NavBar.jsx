import classes from './NavBar.module.css';

const NavBar = ({ onRouteChange }) => {
  const pokeballIcon = "/images/pokeballicon.png";
  const { icon, option } = classes;

  return (
    <nav className="navbar">
      <ul>
        <li><img src={pokeballIcon} alt="icon" className={icon}/></li>
        <li className={option}><Link href="/teams">Check Teams</Link></li>
        <li className={option}><Link className={pokebutton} href="/create">Create Teams</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
