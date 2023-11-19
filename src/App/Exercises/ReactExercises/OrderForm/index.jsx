import { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { Input, Checkbox, Radio, Select, Section } from './components/Fields';

import { yupResolver } from '@hookform/resolvers/yup';

import {
  KEYS_DESCRIPTION,
  DEFAULT_VALUES,
  KEYS,
  SCHEMA,
  LABELS,
} from './schema';

import './styles.css';

export const Exercise = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(SCHEMA),
  });

  const isNewAccountChecked = watch(KEYS.IS_NEW_ACCOUNT);

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    console.log(errors, 'errors');
  });

  return (
    <div className="order-wrapper">
      <h2 className="order-h2">ZAMÓWIENIE PRODUKTU</h2>
      <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
        <Section title="Wybierz produkt">
          <Select
            keyName={KEYS.PRODUCT}
            register={register}
            options={KEYS_DESCRIPTION[KEYS.PRODUCT].ELEMENTS}
            required
          />
        </Section>

        <Section title="Wybierz formę płatności">
          <Radio
            keyName={KEYS.PAYMENT_METHOD}
            options={KEYS_DESCRIPTION[KEYS.PAYMENT_METHOD].ELEMENTS}
            register={register}
            errors={errors[KEYS.PAYMENT_METHOD]?.message}
          />
        </Section>

        <Section title="Opcje dodatkowe do zamówienia">
          <Checkbox
            keyName={KEYS.IS_ENVIRONMENT}
            register={register}
            label={LABELS[KEYS.IS_ENVIRONMENT]}
          />
          <Checkbox
            keyName={KEYS.IS_GIT}
            register={register}
            label={LABELS[KEYS.IS_GIT]}
          />
          <Checkbox
            keyName={KEYS.IS_ADDITIONAL}
            register={register}
            label={LABELS[KEYS.IS_ADDITIONAL]}
          />
        </Section>

        <Section title="DANE DO REALIZACJI ZAMÓWIENIA">
          <Input
            keyName={KEYS.FULL_NAME}
            label={LABELS[KEYS.FULL_NAME]}
            register={register}
            errors={errors[KEYS.FULL_NAME]?.message}
            required
          />
          <Input
            keyName={KEYS.ADDRESS}
            label={LABELS[KEYS.ADDRESS]}
            register={register}
            errors={errors[KEYS.ADDRESS]?.message}
            required
          />
          <Input
            keyName={KEYS.NICKNAME}
            label={LABELS[KEYS.NICKNAME]}
            register={register}
            errors={errors[KEYS.NICKNAME]?.message}
            required
          />
          <Input
            keyName={KEYS.EMAIL}
            label={LABELS[KEYS.EMAIL]}
            register={register}
            errors={errors[KEYS.EMAIL]?.message}
            required
          />

          <Input
            keyName={KEYS.PHONE_NUMBER}
            label={LABELS[KEYS.PHONE_NUMBER]}
            register={register}
            errors={errors[KEYS.PHONE_NUMBER]?.message}
            required
          />

          <Input
            keyName={KEYS.ADDITIONAL_DETAILS}
            label={LABELS[KEYS.ADDITIONAL_DETAILS]}
            register={register}
            errors={errors[KEYS.ADDITIONAL_DETAILS]?.message}
          />
        </Section>

        <Section title="ZAKŁADANIE KONTA">
          <Checkbox
            keyName={KEYS.IS_NEW_ACCOUNT}
            register={register}
            label={LABELS[KEYS.IS_NEW_ACCOUNT]}
          />
          {isNewAccountChecked && (
            <>
              <Input
                keyName={KEYS.PASSWORD}
                label={LABELS[KEYS.PASSWORD]}
                type="password"
                placeholder="Wpisz hasło..."
                register={register}
                errors={errors[KEYS.PASSWORD]?.message}
                required
              />

              <Input
                keyName={KEYS.CONFIRM_PASSWORD}
                label={LABELS[KEYS.CONFIRM_PASSWORD]}
                type="password"
                placeholder="Wpisz hasło..."
                register={register}
                errors={errors[KEYS.CONFIRM_PASSWORD]?.message}
                required
              />
            </>
          )}
        </Section>

        <Section title="ZGODY I NEWSLETTER">
          <b>Realizując zamówienie, akceptujesz regulamin naszego sklepu</b>
          <Checkbox
            keyName={KEYS.IS_ACCEPT_REGULATIONS}
            register={register}
            label={LABELS[KEYS.IS_ACCEPT_REGULATIONS]}
            required
            errors={errors[KEYS.IS_ACCEPT_REGULATIONS]?.message}
          />
          <b>Dołącz do naszego newslettera z promocjami dla naszych klientów</b>
          <Checkbox
            keyName={KEYS.IS_NEWSLETTER}
            register={register}
            label={LABELS[KEYS.IS_NEWSLETTER]}
          />
        </Section>
        <input className='of-button' type="submit" value='SKŁADAM ZAMÓWIENIE' />
      </form>
    </div>
  );
};