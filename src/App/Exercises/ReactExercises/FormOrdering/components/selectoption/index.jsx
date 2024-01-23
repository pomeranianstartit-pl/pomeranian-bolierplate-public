import { Header } from '../header';
import { Label } from '../label';

export const SelectOption = ({
  constants,
  name,
  headerText,
  labelText,
  register,
}) => {
  return (
    <>
      <div>
        <Header children={headerText} />
        <Label children={labelText} />
        <select id={name} name={name} {...register(name)}>
          {constants.map((product, index) => (
            <option key={index} value={product.value}>
              {product.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
