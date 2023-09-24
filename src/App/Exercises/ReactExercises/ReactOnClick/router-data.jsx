import { ReactOnClick } from './ReactOnClick';

let actualDate = new Date();

export const ReactOnClickMetaData = {
  path: 'react-on-click',
  date: actualDate.toLocaleDateString(),
  linkLabel: 'React - obsluga zdarzenia onClick',
  blockNo: 8,
  element: <ReactOnClick />,
  tags: ['components', 'import', 'export', 'onClick', 'event'],
};
