import { SubRouteExample } from './SubRouteExample';

export const SubRouteExampleMetaData = {
  // eksportujemy meta dane
  path: 'example-sub-route', // klucz path - na jakim adresie url cwiczenie bedzie sie znajdowac
  date: '12-12-2023',
  linkLabel: 'Przykładowy sub-route', // opis widoczny na liscie cwiczen
  blockNo: 1, // przy jakim bloku bedziemy  pracowac
  element: <SubRouteExample />, // przekazany komponent importowany który bedzie renderowany
  tags: ['components', 'import', 'export'], //
};
