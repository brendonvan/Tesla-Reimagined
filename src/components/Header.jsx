import './Header.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <div className='header'>
            <a href="/"><img src="/icons/tesla-logo.svg" alt="tesla-logo" className='tesla-logo' /></a>
            <div className="menu">
                <img src="/icons/dropdown-menu.svg" alt="dropdown-menu" className="menu-trigger" onClick={ () => { setOpen(!open) }} />
                <div className={ `dropdown-menu ${ open ? 'active' : 'inactive' }` }>
                    <ul>
                        <DropdownItem img={"/icons/dashboard.svg"} text={"Dashboard"} href="/dashboard"/>
                        <DropdownItem img={"/icons/logout.svg"} text={"Logout"} href="/oauth2/v1/fakeauthorize/"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

function DropdownItem(props) {
    return(
        <li>
            <img src={ props.img } alt={ props.text } />
            <Link to={ props.href }><a>{ props.text }</a></Link>
        </li>
    );
}

export default Header;


