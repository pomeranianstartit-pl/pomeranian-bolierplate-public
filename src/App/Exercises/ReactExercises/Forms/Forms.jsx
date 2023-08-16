import React, { useState } from 'react';

import './style.css';
import { MainSection } from './MainSection/MainSection';
import { FieldSection } from './FieldSection/FieldSection';
import { RadioButtons } from './RadioButtons/RadioButtons';

const productOptions = [
  { value: 'frontend', label: 'kurs front-end' },
  { value: 'backend', label: 'Kurs Back-End' },
  { value: 'devops', label: 'Kurs Devops' },
];
const paymentTypeOptions = [
  { value: 'blik', label: 'Blik' },
  { value: 'paypal', label: 'PayPal' },
  { value: 'transefer', label: 'Przelew tradycyjny' },
];
export function Forms() {
  const [formData, setFormData] = useState({
    products: 'devops',
    paymentType: 'blik',
    additionalOptions: {
      github: false,
      enviroment: false,
      extraDocument: true,
    },
  });
  function updateAdditionalOptions(optionName, value) { }
  function updateFormData(onChangeEvent) {
    setFormData({
      ...formData,
      [onChangeEvent.target.name]: onChangeEvent.target.value,
    });
  }
  console.log('formData', formData);
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log('product:', event.target.products.value);
          console.log('paymentType:', event.target.products.value);
          console.log('additionalOption:', event.target.github.checked);
          console.log('additionalOption:', event.target.env.checked);
          console.log('additionalOption:', event.target.extraDocs.checked);
        }}
      >
        <MainSection title="ZAMÓWIENIE PRODUKTU">

          <FieldSection title="Wybierz produkt">
            <select
              name="products"
              value={formData.products}
              onChange={(event) => {
                updateFormData(event);
              }}
            >
              {productOptions.map((option, id) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
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
            <input type="checkbox" name="github" />
            <input type="checkbox" name="env" />
            <input type="checkbox" name="extraDocs" />
          </FieldSection>
        </MainSection>
        <MainSection title="DANE DO REALIZACJI ZAMÓWIENIA">
          <div>test</div>
        </MainSection>
        <MainSection title="ZAKŁADANIE KONTA">
          <div>test</div>
        </MainSection>
        <MainSection title="ZGODY I NEWSLETTER">
          <div>test</div>
        </MainSection>
        <button type="submit">WYŚLIJ</button>
      </form>
    </div>
  );
}
