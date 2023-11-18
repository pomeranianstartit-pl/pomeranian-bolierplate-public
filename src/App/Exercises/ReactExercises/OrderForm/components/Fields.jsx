export const Section = ({ title, children }) => (
    <fieldset className="order-fieldset">
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
  
  export const Select = ({ keyName, options, register }) => (
    <select {...register(keyName)}>
      {options.map((item) => {
        return (
          <option key={item.VALUE} value={item.VALUE}>
            {item.LABEL}
          </option>
        );
      })}
    </select>
  );
  
  export const Radio = ({ keyName, label, options, register, errors = null }) => (
    <div className="order-radio-group">
      {label && <label htmlFor={keyName}>{label}</label>}
      {options.map((item) => {
        return (
          <div key={item.VALUE}>
            <input type={item.TYPE} value={item.VALUE} {...register(keyName)} />
            <label htmlFor={item.VALUE}>{item.LABEL}</label>
          </div>
        );
      })}
      <Error message={errors} />
    </div>
  );
  
  export const Checkbox = ({
    keyName,
    label,
    register,
    required = false,
    errors = null,
  }) => (
    <div>
      <input
        aria-invalid={errors && 'true'}
        type="checkbox"
        {...register(keyName)}
      />
      <label htmlFor={keyName}>
        {label} {required && '*'}
      </label>
      <Error message={errors} />
    </div>
  );
  
  export const Input = ({
    keyName,
    label,
    type = 'text',
    placeholder = '',
    required = false,
    register,
    errors = null,
  }) => (
    <div className="input-wrapper">
      <label htmlFor={keyName}>
        {label}
        {required && '*'}
      </label>
      <input
        aria-invalid={errors && 'true'}
        type={type}
        placeholder={placeholder}
        {...register(keyName)}
      />
      <Error message={errors} />
    </div>
  );
  
  const Error = ({ message }) => {
    if (!message) return null;
    return <p className="error">{message}</p>;
  };