import ComicCard from "./ComicCard";

const ComicList = ({ comics }) => {
    return (
        <div className="list">
            {comics.map((comic) => (
                <ComicCard key={comic.id} comic={comic} />
            ))}
        </div>
    );
};

export default ComicList;
