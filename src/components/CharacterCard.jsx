const CharacterCard = ({ character }) => {
    const { name, thumbnail } = character;
    const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;

    return (
        <div className="card">
            <img src={imageUrl} alt={name} className="image" />
            <h3 className="name">{name}</h3>
        </div>
    );
};

export default CharacterCard;
