export const TextAreaOption = ({
  name,
  text,
  register,
  error,
  ...props // Przechwytuje dodatkowe propsy, jak placeholder
}) => {
  return (
    <div>
      <div>
        <label htmlFor={name}>{text}</label>
        <textarea maxLength={150} {...register(name)} {...props} />
        {error && <p>{error.message}</p>}
      </div>
    </div>
  );
};
