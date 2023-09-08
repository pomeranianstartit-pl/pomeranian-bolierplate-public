import './styles.css';

import { personalCard } from '../../Images/tiles/personalcard.svg';

import { exerciseBox } from '../../Images/tiles/edit.svg';

import { blogBox } from '../../Images/tiles/edit.svg';

import { techBox } from '../../Images/tech-stack/ts.svg';

import { faqBox } from '../../Images/faq.svg';

import { BlocksBox2 } from './BlocksBox2';

const blocksBox = [
  {
    title: 'Moje CV',
    description: 'podgląd CV wraz z doświadczeniem',
    link: '/cv',
    iconSrc: '<personalCard />',
  },
  {
    title: 'Ćwiczenia',
    description: 'wszystkie wykonane ćwiczenia',
    link: '/exercises',
    iconSrc: 'exerciseBox',
  },
  {
    title: 'Blog',
    description: 'wpisy blogowe o technologii front-end',
    link: '/blog',
    iconSrc: 'blogBox',
  },
  {
    title: 'Tech stack',
    description: 'stack technologiczny realizowany na kursie',
    link: '/blocks',
    iconSrc: 'techBox',
  },
  {
    title: 'FAQ',
    description: 'odpowiedzi na najczęstsze pytania',
    link: '/faq',
    iconSrc: 'faqBox',
  },
];

export const BlocksBox = () => {
  return (
    <>
      <div className="main-box">{blocksBox.map(BlocksBox2)}</div>
    </>
  );
};
