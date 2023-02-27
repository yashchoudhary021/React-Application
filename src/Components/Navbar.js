import propTypes from "prop-types";

export default function Navbar(props) { 
    return (
        <div>
            <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.main}</a>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={props.toggalmode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className={`form-check-label text-${props.mode==='light'? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable to {props.mode ==='light'?'Dark' : "Light"} </label>
                        </div>
                        <form className="d-flex" role="search">
                            <input className="form-control mx-4" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title : propTypes.string,
    main : propTypes.string
}

Navbar.defaultProps = {
    title : "Yash Bhai ki website",
    main: "About Us"
}