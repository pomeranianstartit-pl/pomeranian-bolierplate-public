import { Header } from '../header';
import { Label } from '../label';
import '../../styles.css';
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
      <div className="FormOrdering_font FormOrdering_div_select ">
        <Header children={headerText} />
        <Label children={labelText} value={name} />
        <select
          id={name}
          name={name}
          className="FormOrdering_select FormOrdering_font"
          {...register(name)}
        >
          {constants.map((product, index) => (
            <option key={index} value={product.value}>
              {product.label}
            </option>
          ))}
        </select>
        {error && <p className="FormOrdering_error_message">{error.message}</p>}
      </div>
    </>
  );
};
