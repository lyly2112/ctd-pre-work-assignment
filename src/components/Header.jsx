import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <h1 className="title">Marvel Explorer</h1>
            <nav className="nav">
                <Link to="/" className="link">
                    Home
                </Link>
                <Link to="/characters" className="link">
                    Characters
                </Link>
                <Link to="/comics" className="link">
                    Comics
                </Link>
            </nav>
        </header>
    );
};

export default Header;
