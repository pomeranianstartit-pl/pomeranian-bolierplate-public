import './styles.css';
import { MainSection } from './MainSection/MainSection';
import { FieldSection } from './FieldSection/FieldSection';
import React, { useState } from 'react';
import { BackLink } from '../../../Components/GoBack/GoBack';
import { RadioButtons } from './RadioButtons/RadioButtons';
import { Checkboxes } from './Checkboxes/Checkboxes';
import { validatePhoneNumber } from './Validators/phoneValidator';
import Select from 'react-select';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  addDoc,
  collection,
  getDoc,
  doc,
} from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { useEffect } from 'react';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_id,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const analytics = getAnalytics(app); - na razie nie używamy

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
    nick: '',
    adress: '',
    email: '',
    phone: '',
    details: '',
    createAccount: '',
    consents: false,
    newsletter: '',
  });

  const [isAllRequiredFieldsFilled, setIsAllRequiredFieldsFilled] =
    useState(true);
  const [isEmailValid, setIsEmailValid] = useState();
  const [isSentWithId, setSentWithId] = useState();

  const [isPhoneValid, setIsPhoneValid] = useState(false);

  useEffect(() => {
    if (isSentWithId) {
      getDoc(doc(db, 'orders', isSentWithId)).then((response) => {
        console.log('pobrane dane:', response.data());
      });
    }
  }, [isSentWithId]);

  const isNameAndSurnameValid =
    formData.nameAndSurname.length > 0
      ? formData.nameAndSurname.trim().includes(' ')
      : true;

  const isNickValid = formData.nick.length > 0; // add API logic to check if nick was used in database before

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

  async function handleSubmit() {
    const { nameAndSurname, email, product, paymentType, consents } = formData;
    if (nameAndSurname && email && product && paymentType && consents) {
      console.log('DANE WYSŁANE POPRAWNIE: ', formData);

      try {
        const docRef = await addDoc(collection(db, 'orders'), formData);

        setSentWithId(docRef.id);
        console.log(docRef);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    } else {
      setIsAllRequiredFieldsFilled(false);
    }
  }

  return (
    <>
      <BackLink label={'&lt; Formularz zamówienia'} />

      <form
        onSubmit={(event) => {
          event.preventDefault();

          handleSubmit();
        }}
      >
        <div className="form-container">
          <MainSection title="ZAMÓWIENIE PRODUKTU">
            <FieldSection title="Wybierz produkt*">
              <Select
                className="bottom-margin-Select"
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
          <MainSection title="DANE DO REALIZACJI ZAMÓWIENIA">
            <FieldSection title="Imię i nazwisko*">
              <input
                type="text"
                name="nameAndSurname"
                value={formData.nameAndSurname}
                onChange={updateFormData}
                className={!isNameAndSurnameValid ? 'input-field-error' : ''}
              />
              {!isNameAndSurnameValid && <p>Imie i Nazwisko są niepoprawne.</p>}
            </FieldSection>
            <FieldSection title="Twój pseudonim*">
              <input
                type="text"
                name="nick"
                value={formData.nick}
                onChange={updateFormData}
                className={!isNickValid ? 'input-field-error' : ''}
              />
              {!isNickValid && (
                <p>Taka nazwa użytkownika już istnieje. Spróbuj innej.</p>
              )}
            </FieldSection>
            <FieldSection title="Adres do wysyłki*">
              <input
                type="text"
                name="adress"
                value={formData.adress}
                onChange={updateFormData}
              />
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
                <p className="input-field-error-message">
                  Email jest niepoprawny!
                </p>
              )}
            </FieldSection>
            <FieldSection title="Numer kontaktowy*">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={updateFormData}
                onBlur={() => {
                  setIsPhoneValid(validatePhoneNumber(formData.phone));
                  // FieldSection.onBlur(formattedPhoneNumber);
                }}
                className={!isPhoneValid ? 'input-field-error' : ''}
              />
              {!isPhoneValid && <p>Podany numer telefonu jest niepoprawny.</p>}
            </FieldSection>
            <FieldSection title="Dodatkowe uwagi do zamówienia">
              <textarea
                rows={5}
                cols={30}
                name="details"
                value={formData.details}
                onChange={updateFormData}
              />
            </FieldSection>
          </MainSection>
          <MainSection title="ZAKŁADANIE KONTA">
            <FieldSection title="Chcę założyć konto razem z zamówieniem" />
            <Checkboxes
              list={[
                {
                  value: 'createAccount',
                  label: 'zakładam konto',
                  isChecked: formData.createAccount,
                },
              ]}
              onChange={(_, newValue) => {
                setFormData({
                  ...formData,
                  createAccount: newValue,
                });
              }}
            />
            {/* <FieldSection title="Moje hasło">
              <input type="password" />
            </FieldSection>
            <FieldSection title="Powtórz hasło">
              <input type="password" />
            </FieldSection> */}
          </MainSection>
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
            <FieldSection title="Dołącz do naszego newslettera z promocjami dla naszych klientów">
              <Checkboxes
                list={[
                  {
                    value: 'newsletter',
                    label: 'zapisuję się na listę mailingową ',
                    isChecked: formData.newsletter,
                  },
                ]}
                onChange={(_, newValue) => {
                  setFormData({
                    ...formData,
                    newsletter: newValue,
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
          <button
            className="app-button activeButton"
            type="submit"
            disabled={!isFieldsValid}
          >
            SKŁADAM ZAMÓWIENIE
          </button>
          {isSentWithId && (
            <p>
              Zamówienie zostało złożone
              <br />
              Unikalny numer zamówienia: {isSentWithId}
            </p>
          )}
        </div>
      </form>
      {isSentWithId && (
        <div className="modal-container">
          <div className="modal">
            test
            <button
              className="app-button activeButton"
              onClick={() => setSentWithId()}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};
