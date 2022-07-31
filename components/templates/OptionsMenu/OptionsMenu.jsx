import Link from 'next/link';

import classes from './OptionsMenu.module.css';

const OptionsMenu = () => {
    const { pokedexBg, buttonGroupMenu, pokebutton } = classes;

    return(
        <div className={pokedexBg}>
            <section className={buttonGroupMenu}>
                <button className={pokebutton}><Link href="/teams">Check Teams</Link></button>
                <button className={pokebutton}><Link href="/create">Create Teams</Link></button>
            </section>
        </div>
    )
};

export default OptionsMenu;