export const Author = ({ author, authorDescription }) => {
    return (
        <div>
            <h3 className="blog-post-author">{author}</h3>
            <p className="blog-post-author-description">{authorDescription}</p>
        </div>
    );
};
