import './RadioButtons.css';

export function RadioButtons({
    name,
    options,
    value: selectedValue,
    onChange,
}) {
    return options.map((option) => {
        const { value, label } = option;

        return (
            <div className="radio" key={value}>
                <input
                    id={`radio-${name}-${value}`}
                    name={name}
                    value={value}
                    type="radio"
                    checked={selectedValue === value}
                    onChange={onChange}
                />
                <label htmlFor={`radio-${name}-${value}`} className="radio-label">
                    {label}
                </label>
            </div>
        );
    });
}