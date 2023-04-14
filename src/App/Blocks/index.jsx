import { useRoutes } from 'react-router-dom';

import { BlockLayout } from './BlockLayout';
import { routerData } from './router-data';

import './styles.css';

export function Blocks() {
  const element = useRoutes(routerData);

  return (
    <>
      <BlockLayout />
      {element}
    </>
  );
}
