
// arg - argument zwykle nazywany jako "props"
export function Title(arg) {
    return (
    <article>
    <h5 className="artData">{arg.data}</h5>    
    <h1 className="artTitle">{arg.title}</h1>
    </article>
    );
}