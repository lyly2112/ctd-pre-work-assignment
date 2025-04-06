import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <section className="home-container">
            <h2 className="home-heading">Welcome to Marvel 🦸‍♂️</h2>
            <p className="home-text">
                Dive into the Marvel universe by exploring your favorite
                characters and comics.
            </p>
            <div className="home-links">
                <Link to="/characters" className="home-button">
                    Characters
                </Link>
                <Link to="/comics" className="home-button">
                    Comics
                </Link>
            </div>
        </section>
    );
};

export default HomePage;
