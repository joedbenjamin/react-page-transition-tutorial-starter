import { images } from '../images';
import { createRef } from 'react';

export const pagesData = [
  {
    name: 'home',
    background: images[0],
    active: true,
    element: createRef(),
    showElement: true,
  },
  {
    name: 'about',
    background: images[1],
    active: false,
    element: createRef(),
    showElement: false,
  },
  {
    name: 'contact',
    background: images[2],
    active: false,
    element: createRef(),
    showElement: false,
  },
  {
    name: 'history',
    background: images[3],
    active: false,
    element: createRef(),
    showElement: false,
  },
];
