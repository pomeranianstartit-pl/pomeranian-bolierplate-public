import React from 'react';

import { Colors } from './Colors';
import { ImageFile } from './ImageFile';
import { Backgrounds } from './Backgrounds';

export const blockRouterMetaData = [
  {
    path: '09-05-2023',
    date: '09-05-2023',
    linkLabel: 'Kolory CSS',
    blockNo: 1,
    element: <Colors />,
    tags: ['css', 'colors'],
  },
  {
    path: '09-05-2023-2',
    date: '09-05-2023',
    linkLabel: 'Pliki graficzne',
    blockNo: 1,
    element: <ImageFile />,
    tags: ['html', 'image'],
  },
  {
    path: 'backgrounds',

    date: '09-05-2023',

    linkLabel: 'Tła',

    blockNo: 11,

    element: <Backgrounds />,

    tags: ['backgrounds'],
  },
];
