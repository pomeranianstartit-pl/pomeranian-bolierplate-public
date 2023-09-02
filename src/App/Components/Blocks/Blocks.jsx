import './styles.css';
import { Block } from './Block';
import cvIconSrc from '../../Images/tiles/personalcard.svg';
import editIconSrc from '../../Images/tiles/edit.svg';
import bookIconSrc from '../../Images/tiles/book.svg';
import codeIconSrc from '../../Images/tiles/code.svg';
import faqIconSrc from '../../Images/faq.svg';

const blocks = [
  {
    title: 'Moje CV',
    description: 'podgląd cv wraz z doświadczeniem',
    link: '/CV',
    iconSrc: cvIconSrc,
  },
  {
    title: 'Ćwiczenia',
    description: 'wszystkie wykonane ćwiczenia',
    link: '/CV',
    iconSrc: editIconSrc,
  },
  {
    title: 'Blog',
    description: 'wpisy blogowe o technologii front-end',
    link: '/CV',
    iconSrc: bookIconSrc,
  },
  {
    title: 'Tech stack',
    description: 'stack technologiczny realizowany na kursie',
    link: '/CV',
    iconSrc: codeIconSrc,
  },
  {
    title: 'FAQ',
    description: 'odpowiedzi na najczęstsze pytania',
    link: '/CV',
    iconSrc: faqIconSrc,
  },
];

export const Blocks = () => {
  return <div>Bloks</div>;
  return <div className="blocks">{blocks.map(Block)}</div>;
};
