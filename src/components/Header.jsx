import './Header.css';

function Header() {
    return (
        <div className='header'>
            <a href="/"><img src="/icons/tesla-logo.svg" alt="tesla-logo" className='tesla-logo' /></a>
            <a href="/oauth2/v1/fakeauthorize"><img src="/icons/dropdown-menu.svg" alt="dropdown-menu" className="dropdown-menu" /></a>
        </div>
    )
}

export default Header;


