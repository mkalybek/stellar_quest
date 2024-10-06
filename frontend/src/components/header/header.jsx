import './header.scss'

const Header = () => {
    return (
        <header className='header anton-regular'>
            <ul>
                <li><a href="/stellar-quest#history">HISTORY</a></li>
                <li><a href="/stellar-quest#methods">METHODS OF SEARCH</a></li>
                <li><a href="/stellar-quest#types">TYPES AND CLASSES</a></li>
                <li><a href="/stellar-quest#exoplanets">EXOPLANETS</a></li>
                <li><a href="/stellar-quest#simulator">SIMULATOR</a></li>
                <li><a href="/stellar-quest#maps">MAPPING</a></li>
                <li><a href="/stellar-quest#exomoons">EXOMOONS</a></li>
                <li><a href="/stellar-quest#">EXPLORE</a></li>
            </ul>
        </header>
    );
};

export default Header;