// isActiv
// isDisabled
// type (primary, secondary, tertiary) = 'primary'
// onClick
// classNames

import './styles.css';

export const Button = ({
    classNames = '', 
    type = 'primary', 
    isDisabled = false,
    isActiv = false, 
    onClick = () => {}, 
    children, 

}) => {
    const activClassName = isActiv ? 'btn--active' : '';
    const disabledClassName = isDisabled ? 'btn--disabled' : '';
    const typeClassName = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
    };
    const className = `btn ${classNames} ${activClassName} ${disabledClassName} ${typeClassName[type]}`;
    return ( 
    <button className={className} disabled={isDisabled} onClick={onClick}>{children}
    </button>
    );
};