import './styles.css';

export const Tile = ({ hasMemo, variant = 'neutral', onClick, value }) => {
    if (
        !(variant === 'correct' || variant === 'incorrect' || variant === 'neutral')
    )
        console.warn('błędny parametr variant', variant);
    let memoClass = '';
    if (hasMemo) memoClass = 'memo-tile--has-memo';
    return (
        <button
            className={`memo-tile memo-tile--${variant} ${memoClass}`}
            onClick={onClick}
        >
            {value}
        </button>
    );
};
