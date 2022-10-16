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
                        <Link to={ "/dashboard" }><DropdownItem img={"/icons/dashboard.svg"} text={"Dashboard"}/></Link>
                        <Link to={ "/oauth2/v1/fakeauthorize/" }><DropdownItem img={"/icons/logout.svg"} text={"Logout"}/></Link>
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
            <a>{ props.text }</a>
        </li>
    );
}

export default Header;


