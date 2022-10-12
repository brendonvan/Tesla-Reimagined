import './Login-Header.css';

function Header() {
    return (
        <div className='header'>
            <a href="/"><img src="/icons/tesla-logo.svg" alt="tesla-logo" className='tesla-logo' /></a>
            <a href="/oauth2/v1/fakeauthorize">
                <div className='language-options'>
                    <img src="/icons/globe.svg" alt="dropdown-menu" className="dropdown-menu" /><h3>en-US</h3>
                </div>
            </a>
        </div>
    )
}

export default Header;


