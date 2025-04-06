import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters }) => {
    return (
        <div className="list">
            {characters.map((char) => (
                <CharacterCard key={char.id} character={char} />
            ))}
        </div>
    );
};

export default CharacterList;
