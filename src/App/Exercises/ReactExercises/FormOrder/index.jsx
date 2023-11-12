import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Select } from './components';
import * as yup from 'yup';

const PRODUCT_OPTIONS = [
  'kurs front-end',
  'kurs back-end',
  'żonglowanie ryżem',
];

const PAYMENT_METHOD = ['BLIK', 'PAYPAL', 'przelew tradycyjny'];
const schema = yup.object({
  product: yup
    .string('Wybierz produkt')
    .required('Należy wybrać conajmniej 1 pozycję')
    .oneOf(PRODUCT_OPTIONS),
  paymentForm: yup.string().oneOf(PAYMENT_METHOD).required(),
});


export const FormOrder = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h3>Zamówienie produktu</h3>
      <div></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="product">Wybierz produkt*:</label>
          {/* <select {...register('product')}>
            {PRODUCT_OPTIONS.map((value) => (
              <option value={value}>{value}</option>
            ))}
          </select> */}
          <Select name="product" options={PRODUCT_OPTIONS} />

          <label htmlFor=""></label>
          <input {...register('radio')} type="radio" name="Blik" value="A" />
          <input {...register('radio')} type="radio" value="B" />
          <input {...register('radio')} type="radio" value="C" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
