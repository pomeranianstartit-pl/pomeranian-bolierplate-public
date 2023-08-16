import './MainSection.css';

export function MainSection({ title, children }) {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    );
}
