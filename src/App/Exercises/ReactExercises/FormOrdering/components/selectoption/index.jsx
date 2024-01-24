import { Header } from '../header';
import { Label } from '../label';

export const SelectOption = ({
  constants,
  name,
  headerText,
  labelText,
  register,
  error,
}) => {
  return (
    <>
      <div>
        <Header children={headerText} />
        <Label children={labelText} value={name} />
        <select id={name} name={name} {...register(name)}>
          {constants.map((product, index) => (
            <option key={index} value={product.value}>
              {product.label}
            </option>
          ))}
        </select>
        {error && <p>{error.message}</p>}
      </div>
    </>
  );
};
