import { useEffect, useState } from "react";
import ComicList from "../components/ComicList";

const ComicsPage = () => {
    const [comics, setComics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_KEY = import.meta.env.VITE_API_KEY;
    const TS = import.meta.env.VITE_TS;
    const HASH = import.meta.env.VITE_HASH;
    const API_URL = `https://gateway.marvel.com:443/v1/public/comics?apikey=${API_KEY}&hash=${HASH}&ts=${TS}&limit=10`;

    useEffect(() => {
        const fetchComics = async () => {
            try {
                const res = await fetch(API_URL);
                const data = await res.json();
                setComics(data.data.results);
            } catch (err) {
                setError("Failed to fetch comics.");
            } finally {
                setLoading(false);
            }
        };

        fetchComics();
    }, []);

    return (
        <div className="container">
            <h2 className="heading">Marvel Comics</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && <ComicList comics={comics} />}
        </div>
    );
};

export default ComicsPage;
