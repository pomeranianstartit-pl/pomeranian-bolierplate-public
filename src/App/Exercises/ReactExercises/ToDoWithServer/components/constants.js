export const API_URL = 'http://localhost:3333/api/todo';

export const TEXTS = {
  TITLE: 'Lista zadań',
  LOADER: 'Ładowanie danych...',

  ERROR: 'Przepraszamy. Nie udało się pobrać listy zadań.',
  EMPTY: 'Brawo! Nie masz aktualnie żadnych zadań do zrealizowania.',

  BUTTON_REFRESH: 'ODSWIEŻ WIDOK',
  BUTTON_ADD: 'DODAJ ZADANIE',
  API: {
    ERRORS: {
      GET_DATA: 'Błąd pobierania danych!',
      ADD: 'Nie udało się dodać zadania!',
      DELETE: 'Błąd usuwania zadania!!',
      MARK: 'Nie udało się zakończyć zadania!',
      EDIT: 'Nie udało się edytować zadania!',
    },
  },

  FORM: {
    MARK: {
      LOADING: 'Kończenie zadania...',
      ERROR: 'Nie udało się zakończyć zadania!',
      TEXT: 'Zakończ',
    },

    DELETE: {
      LOADING: 'Usuwanie zadania...',
      ERROR: 'Nie udało się usunąć zadania!',
      TEXT: 'Usuń',
    },

    EDIT: {
      TEXT: 'Edytuj',
    },
  },
};

export const FORM_DATA = {
  TITLE: {
    LABEL: 'Tytuł',
    KEY_NAME: 'title',
    TYPE: 'text',
  },

  AUTHOR: {
    LABEL: 'Autor',
    KEY_NAME: 'author',
    TYPE: 'text',
  },

  NOTE: {
    LABEL: 'Treść',
    KEY_NAME: 'note',
    TYPE: 'text',
  },
};
