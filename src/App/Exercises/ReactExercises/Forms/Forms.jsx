import './styles.css';
import { MainSection } from './MainSection/MainSection';
import { FieldSection } from './FieldSection/FieldSection';
import React, { useState } from 'react';
import { RadioButtons } from './RadioButtons/RadioButtons';
import { Checkboxes } from './Checkboxes/Checkboxes';
import Select from 'react-select';

const validateEmail = (value) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(value);
};

const productOptions = [
  { value: 'frontend', label: 'kurs front-end' },
  { value: 'backend', label: 'Kurs back-end' },
  { value: 'devops', label: 'Kurs devops' },
];

const paymentTypeOptions = [
  { value: 'blik', label: 'Blik' },
  { value: 'paypal', label: 'PayPal' },
  { value: 'transfer', label: 'przelew tradycyjny' },
];

const additionalOptionList = [
  { value: 'github', label: 'Intro do GitHub' },
  { value: 'environment', label: 'Ustawienia środowiska' },
  { value: 'extraDocuments', label: 'Materiały dodatkowe' },
];

const requiredFields = [
  'nameAndSurname',
  'email',
  'product',
  'paymentType',
  'consents',
];

export const Forms = () => {
  const [formData, setFormData] = useState({
    product: 'devops',
    paymentType: 'paypal',
    additionalOptions: {
      github: true,
      enviroment: false,
      extraDocuments: true,
    },
    nameAndSurname: '',
    email: '',
    details: '',
    consents: false,
  });

  const [isAllRequiredFieldsFilled, setIsAllRequiredFieldsFilled] =
    useState(true);

  const [isEmailValid, setIsEmailValid] = useState();

  const isNameAndSurnameValid =
    formData.nameAndSurname.length > 0
      ? formData.nameAndSurname.trim().includes(' ')
      : true;

  const isFieldsValid =
    isEmailValid && isNameAndSurnameValid && isAllRequiredFieldsFilled;

  function updateAdditionalOptions(optionName, newValue) {
    setFormData({
      ...formData,
      additionalOptions: {
        ...formData.additionalOptions,
        [optionName]: newValue,
      },
    });
  }

  function updateFormData(onChangeValue) {
    setFormData({
      ...formData,
      [onChangeValue.target.name]: onChangeValue.target.value,
    });
  }

  function handleSubmit() {
    const { nameAndSurname, email, product, paymentType, consents } = formData;
    if (nameAndSurname && email && product && paymentType && consents) {
      console.log('DANE WYSŁANE POPRAWNIE: ', formData);
    } else {
      setIsAllRequiredFieldsFilled(false);
    }
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(event.target.product.value);
      }}
    >
      <a href="">&lt; Formularz zamówienia</a>
      <div className="form-container">
        <MainSection title="ZAMÓWIENIE PRODUKTU">
          <FieldSection title="Wybierz produkt*">
            <select
              name="product"
              value={formData.product}
              onChange={(event) => {
                updateFormData(event);
              }}
            >
              {productOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <Select
              value={productOptions.find(
                (item) => item.value === formData.product
              )}
              options={productOptions}
              onChange={(selectedItem) => {
                setFormData({
                  ...formData,
                  product: selectedItem.value,
                });
              }}
            />
          </FieldSection>
          <FieldSection title="Wybierz formę płatności*">
            <RadioButtons
              name="paymentType"
              options={paymentTypeOptions}
              value={formData.paymentType}
              onChange={updateFormData}
            />
          </FieldSection>
          <FieldSection title="Opcje dodatkowe do zamówienia">
            <Checkboxes
              list={additionalOptionList.map((item) => {
                return {
                  ...item,
                  isChecked: formData.additionalOptions[item.value],
                };
              })}
              onChange={updateAdditionalOptions}
            />
          </FieldSection>
        </MainSection>
        <MainSection title="DANE DO REALIZACJI ZAMÓWIENIA"></MainSection>
        <FieldSection title="Imię i nazwisko*">
          <input
            type="text"
            name="nameAndSurname"
            value={formData.additionalOptions.nameAndSurname}
            onChange={updateFormData}
            className={!isNameAndSurnameValid ? 'input-field-error' : ''}
          />
          {!isNameAndSurnameValid && <p>Imie i Nazwisko są niepoprawne.</p>}
        </FieldSection>
        <FieldSection title="Email">
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={updateFormData}
            className={isEmailValid === false ? 'input-field-error' : ''}
            onBlur={() => {
              setIsEmailValid(validateEmail(formData.email));
            }}
          />
          {isEmailValid === false && (
            <p className="input-field-error-message">Email jest niepoprawny!</p>
          )}
        </FieldSection>
        {/* <FieldSection title="Hasło">
          <input type="password" />
        </FieldSection> */}
        <FieldSection title="Dodatkowe uwagi do zamówienia">
          <textarea
            rows={5}
            cols={30}
            name="details"
            value={formData.additionalOptions.details}
            onChange={updateFormData}
          />
        </FieldSection>

        <MainSection title="ZAKŁADANIE KONTA"></MainSection>
        <MainSection title="ZGODY I NEWSLETTER">
          <FieldSection title="Realizując zamówienie, akceptujesz regulamin naszego sklepu">
            <Checkboxes
              list={[
                {
                  value: 'consents',
                  label: 'akceptuje regulamin*',
                  isChecked: formData.consents,
                },
              ]}
              onChange={(_, newValue) => {
                setIsAllRequiredFieldsFilled(true);
                setFormData({
                  ...formData,
                  consents: newValue,
                });
              }}
            />
          </FieldSection>
        </MainSection>
        {!isAllRequiredFieldsFilled && (
          <p className="input-field-error-message">
            Wypełnij wszystkie pola wymagane!
          </p>
        )}
        <button className="" type="submit" disabled={!isFieldsValid}>
          WYŚLIJ
        </button>
      </div>
    </form>
  );
};
