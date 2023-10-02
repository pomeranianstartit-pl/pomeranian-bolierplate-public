import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { CodeIcon } from '../Components/Icons/CodeIcon';
import { BookIcon } from '../Components/Icons/BookIcon';
import { MessagesIcon } from '../Components/Icons/MessagesIcon';

export const mockData = [
  {
    title: 'MojeCV',
    img: <PersonalCardIcon />,
    description: 'podgląd CV wraz z doświadczeniem',
    more: '/cv',
  },
  {
    title: 'Ćwiczenia',
    img: <EditIcon />,
    description: 'wszystkie wykonane ćwiczenia',
    more: '/exercises',
  },
  {
    title: 'Blog',
    img: <BookIcon />,
    description: 'wpisy blogowe o technologii front-end',
    more: '/blog',
  },
  {
    title: 'Tech stack',
    img: <CodeIcon />,
    description: 'stack technologiczny realizowany na kursie',
    more: '/blocks',
  },
  {
    title: 'FAQ',
    img: <MessagesIcon />,
    description: 'odpowiedzi na najczęstsze pytania',
    more: '/faq',
  },
];
