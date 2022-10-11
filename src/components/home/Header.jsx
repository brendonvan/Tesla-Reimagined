import './Header.css';

function Header() {
    return (
        <div className='header'>
            <a href="/"><img src="/icons/tesla-logo.svg" alt="tesla-logo" className='tesla-logo' /></a>
            <img src="/icons/dropdown-menu.svg" alt="dropdown-menu" className="dropdown-menu" />
        </div>
    )
}

export default Header;


