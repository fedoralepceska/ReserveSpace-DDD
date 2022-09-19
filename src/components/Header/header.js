import React from "react";
import  {Link} from "react-router-dom"
const Header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
                <a className="navbar-brand" href="/rooms">Reserve space</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href={"/rooms"}>Rooms</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href={"/orders"}>Orders</a>
                        </li>

                    </ul>

                </div>
            </nav>
        </header>

    )
}
export default Header;