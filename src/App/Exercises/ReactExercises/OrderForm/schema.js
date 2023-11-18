import * as yup from 'yup';

export const KEYS = {
  // 1 section
  PRODUCT: 'product',
  PAYMENT_METHOD: 'paymentMethod',
  IS_ADDITIONAL: 'isAdditional',
  IS_ENVIRONMENT: 'isEnvironment',
  IS_GIT: 'isGit',
  // 2 section
  FULL_NAME: 'fullName',
  NICKNAME: 'nickname',
  ADDRESS: 'address',
  EMAIL: 'email',
  PHONE_NUMBER: 'phoneNumber',
  ADDITIONAL_DETAILS: 'additionalDetails',
  // 3 section
  IS_NEW_ACCOUNT: 'isNewAccount',
  PASSWORD: 'password',
  CONFIRM_PASSWORD: 'confirmPassword',
  // 4 section
  IS_ACCEPT_REGULATIONS: 'isAcceptRegulations',
  IS_NEWSLETTER: 'isNewsletter',
};

export const DEFAULT_VALUES = {
  // 1 section
  [KEYS.PRODUCT]: '',
  [KEYS.PAYMENT_METHOD]: '',
  [KEYS.IS_ADDITIONAL]: false,
  [KEYS.IS_ENVIRONMENT]: false,
  [KEYS.IS_GIT]: false,
  // 2 section
  [KEYS.FULL_NAME]: '',
  [KEYS.NICKNAME]: '',
  [KEYS.ADDRESS]: '',
  [KEYS.EMAIL]: '',
  [KEYS.PHONE_NUMBER]: '',
  [KEYS.ADDITIONAL_DETAILS]: '',
  // 3 section
  [KEYS.IS_NEW_ACCOUNT]: false,
  [KEYS.PASSWORD]: '',
  [KEYS.CONFIRM_PASSWORD]: '',
  // 4 section
  [KEYS.IS_ACCEPT_REGULATIONS]: false,
  [KEYS.IS_NEWSLETTER]: false,
};

export const LABELS = {
  // 1 section
  [KEYS.PRODUCT]: 'Wybierz produkt',
  [KEYS.PAYMENT_METHOD]: 'Wybierz formę płatności',
  [KEYS.IS_ENVIRONMENT]: 'ustawienie środowiska',
  [KEYS.IS_GIT]: 'intro do GitHub',
  [KEYS.IS_ADDITIONAL]: 'Opcje dodatkowe do zamówienia',
  // 2 section
  [KEYS.FULL_NAME]: 'Imie i nazwisko',
  [KEYS.NICKNAME]: 'Twój pseudonim',
  [KEYS.ADDRESS]: 'Adres do wysyłki',
  [KEYS.EMAIL]: 'Adres e-mail',
  [KEYS.PHONE_NUMBER]: 'Numer kontaktowy',
  [KEYS.ADDITIONAL_DETAILS]: 'Dodatkowe informacje do zamówienia',
  // 3 section
  [KEYS.IS_NEW_ACCOUNT]: 'Zakładam konto',
  [KEYS.PASSWORD]: 'Moje hasło',
  [KEYS.CONFIRM_PASSWORD]: 'Powtórz hasło',
  // 4 section
  [KEYS.IS_ACCEPT_REGULATIONS]: 'Akceptuję regulamin',
  [KEYS.IS_NEWSLETTER]: 'Zapisuję się na listę mailingową',
};

export const KEYS_DESCRIPTION = {
  [KEYS.PRODUCT]: {
    LEGEND: '',
    LABEL: 'Wybierz produkt',
    REQUIRED: true,
    ELEMENTS: [
      {
        VALUE: 'frontend',
        LABEL: 'kurs front-end',
      },
      {
        VALUE: 'backend',
        LABEL: 'kurs back-end',
      },
      {
        VALUE: 'ux/ui',
        LABEL: 'kurs abc',
      },
    ],
  },
  [KEYS.PAYMENT_METHOD]: {
    ELEMENTS: [
      {
        TYPE: 'radio',
        VALUE: 'blik',
        LABEL: 'blik',
      },
      {
        TYPE: 'radio',
        VALUE: 'paypal',
        LABEL: 'paypal',
      },
      {
        TYPE: 'radio',
        VALUE: 'paymentCard',
        LABEL: 'karta płatnicza',
      },
    ],
  },
};

export const SCHEMA = yup
  .object({
    [KEYS.PRODUCT]: yup.string().required('Pole jest wymagane!'),
    [KEYS.PAYMENT_METHOD]: yup.string().required('Pole jest wymagane!'),
    [KEYS.FULL_NAME]: yup.string().required('Musisz podać imię i nazwisko!'),
    [KEYS.NICKNAME]: yup.string().required('Musisz podać pseudonim!'),
    [KEYS.ADDRESS]: yup.string().required('Musisz podać adres!'),
    [KEYS.EMAIL]: yup
      .string()
      .email('Musisz podać poprawny adres email')
      .required('Musisz podać adres e-mail!'),
    [KEYS.PHONE_NUMBER]: yup
      .string()
      .matches(/^\d{9}$/, 'Numer telefonu musi zawierać 9 cyfr')
      .required('Musisz podać numer telefonu!'),
    [KEYS.IS_NEW_ACCOUNT]: yup.boolean(),
    [KEYS.IS_ACCEPT_REGULATIONS]: yup
      .boolean()
      .oneOf([true], 'Pole jest wymagane!'),
    [KEYS.IS_NEWSLETTER]: yup.boolean(),
    [KEYS.PASSWORD]: yup.string().when(KEYS.IS_NEW_ACCOUNT, {
      is: (value) => {
        return value;
      },
      then: () =>
        yup
          .string()
          .min(6, 'Hasło musi zawierać 6 znaków')
          .matches(/[a-z]/, 'Hasło musi zawierać małe litery')
          .matches(/[A-Z]/, 'Hasło musi zawierać duże litery')
          .matches(/\d/, 'Hasło musi zawierać cyfry'),
    }),
    [KEYS.CONFIRM_PASSWORD]: yup.string().when(KEYS.IS_NEW_ACCOUNT, {
      is: (value) => {
        return value;
      },
      then: () =>
        yup
          .string()
          .min(6, 'Hasło musi zawierać 6 znaków')
          .matches(/[a-z]/, 'Hasło musi zawierać małe litery')
          .matches(/[A-Z]/, 'Hasło musi zawierać duże litery')
          .matches(/\d/, 'Hasło musi zawierać cyfry')
          .oneOf([yup.ref('password'), null], 'Hasła muszą być takie same'),
    }),
  })
  .required();