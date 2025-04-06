import { useEffect, useState } from "react";
import CharacterList from "../components/CharacterList";

const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_KEY = import.meta.env.VITE_API_KEY;
    const TS = import.meta.env.VITE_TS;
    const HASH = import.meta.env.VITE_HASH;
    const API_URL = `https://gateway.marvel.com:443/v1/public/characters?apikey=${API_KEY}&hash=${HASH}&ts=${TS}&limit=10`;

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const res = await fetch(API_URL);
                const data = await res.json();
                setCharacters(data.data.results);
            } catch (err) {
                setError("Failed to fetch characters.");
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    return (
        <div className="container">
            <h2 className="heading">Marvel Characters</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && <CharacterList characters={characters} />}
        </div>
    );
};

export default CharactersPage;
