import React from 'react';

import { useForm, useWatch } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

const schema = yup.object({
  example: yup.string().required('Pole example jest wymagane'),

  age: yup
    .number()
    .min(18, 'Musisz mieć więcej niż 18 lat')
    .max(67, 'Nie możesz mieć wiecej niż 67 lat')
    .required('Pole age jest wymagane'),
});

// const boxChecked = () =>{
//    if (boxChecked) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// }

export const Forms = () => {
  const {
    register,

    handleSubmit,

    // watch,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="form-exercise">
        <h4>ZAMÓWIENIE PRODUKTU</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Wybierz produkt:</label><br />
          <select {...register("category")}>
        <option value="">Select...</option>
        <option value="A">kurs front-end</option>
      </select>
        </form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Wybierz formę płatności*</label>

          <input
            {...register('radio')}
            type="radio"
            value="blik"
          />
          <label for="blik">blik</label>

          <input {...register('radio')} type="radio" value="paypal" />
          <label for="paypal">paypal</label>

          <input
            {...register('radio')}
            type="radio"
            value="traditional-transfer"
          />
          <label for="traditional-transfer">przelew tradycyjny</label>
        </form>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Opcje dodatkowe do zamówienia</label>
          <div>
            <input
              {...register('checkbox')}
              type="checkbox"
              value="environment-setting"
            />
            <label for="environment-setting">ustawienie środowiska</label>
          </div>
          <div>
            <input
              {...register('checkbox')}
              type="checkbox"
              value="git-intro"
            />
            <label for="git-intro">intro do GitHub</label>
          </div>
          <div>
            <input
              {...register('checkbox')}
              type="checkbox"
              value="addictional-materials"
            />
            <label for="additional-materials">materiały dodatkowe</label>
          </div>
        </form>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Dane do realizcji zamówienia</label>
          <br />

          <input {...register('name-and-surname')} />

          <p>{errors.example?.message}</p>

          <input {...register('nick')} />

          <p>{errors.age?.message}</p>

          <input {...register('address')} />

          <p>{errors.age?.message}</p>

          <input {...register('phone-number')} />

          <p>{errors.age?.message}</p>

          <input {...register('additional-notes')} />

          <p>{errors.age?.message}</p>

          <input type="submit" />
        </form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">ZAKŁADANIE KONTA</label>
          <br />
          <div>
            <input {...register('checkbox')} type="checkbox" value="register" />
            <label for="register">Chce założyć konto razem z zamówieniem</label>
          </div>
        </form>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Dane do realizcji zamówienia</label>
          <br />

          <input {...register('password')} />

          <p>{errors.example?.message}</p>

          <input {...register('repat-password')} />

          <p>{errors.example?.message}</p>

          <input type="submit" />
        </form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">ZGODY I NEWSLETTER</label>
          <br />
          <b>Realizując zamówienie, akceptujesz regulamin naszego sklepu</b>
          <div>
            <input
              {...register('checkbox')}
              type="checkbox"
              value="accept-regulation"
            />
            <label for="environment-setting">akceptuje regulamin*</label> <br />
          </div>
          <b>Dołącz do naszego newslettera z promocjami dla naszych klientów</b>
          <div>
            <input
              {...register('checkbox')}
              type="checkbox"
              value="zapisuję się na listę mailingową"
            />
            <label for="environment-setting">
              zapisuję się na listę mailingową
            </label>
          </div>
        </form>
        <button>SKŁADAM ZAMÓWIENIE</button>
      </div>
    </>
  );
};
