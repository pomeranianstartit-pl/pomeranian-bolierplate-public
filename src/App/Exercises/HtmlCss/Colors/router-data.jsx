import React from 'react';

import Colors from './Colors';
import ImageFiles from './ImageFiles';
import Backgrounds from './Backgrounds';

export const blockRouterMetaData = [
  {
    path: 'CSS-colors',
    date: '09-05-2023',
    linkLabel: 'HTML & CSS - Kolory CSS',
    blockNo: 12,
    element: <Colors />,
    tags: ['css', 'colors'],
  },
  {
    path: 'ImageFiles',
    date: '09-05-2023',
    linkLabel: 'HTML & CSS - Pliki Graficzne',
    blockNo: 12,
    element: <ImageFiles />,
    tags: ['html', 'image'],
  },
  {
    path: 'Backgrounds',
    date: '09-05-2023',
    linkLabel: 'HTML & CSS - Tła',
    blockNo: 12,
    element: <Backgrounds />,
    tags: ['html', 'image', 'backgrounds'],
  },
];
