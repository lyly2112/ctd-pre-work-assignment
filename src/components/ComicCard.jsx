const ComicCard = ({ comic }) => {
    const { title, thumbnail } = comic;
    const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;

    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="image" />
            <h3 className="name">{title}</h3>
        </div>
    );
};

export default ComicCard;
