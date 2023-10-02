import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { BookIcon } from '../Components/Icons/BookIcon';
import { MessagesIcon } from '../Components/Icons/MessagesIcon';

export const mockData = [
  {
    title: 'MojeCV',
    img: <PersonalCardIcon />,
    description: 'podgląd CV wraz z doświadczeniem',
    more: 'zobacz więcej',
  },
  {
    title: 'Ćwiczenia',
    img: <EditIcon />,
    description: 'wszystkie wykonane ćwiczenia',
    more: 'zobacz więcej',
  },
  {
    title: 'Blog',
    img: <BookIcon />,
    description: 'wpisy blogowe o technologii front-end',
    more: 'zobacz więcej',
  },
  {
    title: 'Tech stack',
    img: <ElementIcon />,
    description: 'stack technologiczny realizowany na kursie',
    more: 'zobacz więcej',
  },
  {
    title: 'FAQ',
    img: <MessagesIcon />,
    description: 'odpowiedzi na najczęstsze pytania',
    more: 'zobacz więcej',
  },
];
