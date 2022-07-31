import Link from 'next/link';

import classes from './OptionsMenu.module.css';

const OptionsMenu = () => {
    const { pokedexBg, buttonGroupMenu, pokebutton } = classes;

    return(
        <div className={pokedexBg}>
            <section className={buttonGroupMenu}>
                <Link className={pokebutton} href="/teams">Check Teams</Link>
                <Link className={pokebutton} href="/create">Create Teams</Link>
            </section>
        </div>
    )
};

export default OptionsMenu;