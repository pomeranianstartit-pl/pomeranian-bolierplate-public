import React from 'react';
import { Link } from 'react-router-dom';

import { blockRouterMetaData } from './router-data';

export function BlockLink() {
  return <Link to={blockRouterMetaData.path}>Blok 1</Link>;
}
