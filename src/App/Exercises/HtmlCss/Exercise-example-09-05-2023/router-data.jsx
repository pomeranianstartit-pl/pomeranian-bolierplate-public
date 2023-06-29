import React from 'react';

import { Colors } from './Colors';
import { ImageFile } from './ImageFile';
import { Backgrounds } from './Backgrounds';

export const blockRouterMetaData = [
  {
    path: 'colors',
    date: '09-05-2023',
    linkLabel: 'Kolory CSS',
    blockNo: 12,
    element: <Colors />,
    tags: ['css', 'colors'],
  },
  {
    path: 'image-file',
    date: '09-05-2023',
    linkLabel: 'Pliki graficzne',
    blockNo: 12,
    element: <ImageFile />,
    tags: ['html', 'image'],
  },
  {
    path: 'backgrounds',
    date: '09-05-2023',
    linkLabel: 'Tła',
    blockNo: 12,
    element: <Backgrounds />,
    tags: ['backgrounds'],
  },
];
