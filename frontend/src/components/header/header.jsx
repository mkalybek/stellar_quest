import './header.scss'

const Header = () => {
    return (
        <header className='header anton-regular'>
            <ul>
                <li><a href="/#history">HISTORY</a></li>
                <li><a href="/#methods">METHODS OF SEARCH</a></li>
                <li><a href="/#types">TYPES AND CLASSES</a></li>
                <li><a href="/#exoplanets">EXOPLANETS</a></li>
                <li><a href="/#simulator">SIMULATOR</a></li>
                <li><a href="/#">MAPS</a></li>
                <li><a href="/#exomoons">EXOMOONS</a></li>
                <li><a href="/#">EXPLORE</a></li>
            </ul>
        </header>
    );
};

export default Header;