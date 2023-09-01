import './styles.css';
import { Blok } from '../Blok';
import cvIconSrc from '../../Images/tiles/personalcard.svg';
import editIconSrc from '../../Images/tiles/edit.svg';
// import bookIconSrc from '../../Images/tiles/book.svg';
import codeIconSrc from '../../Images/tiles/code.svg';
import faqIconSrc from '../../Images/faq.svg';

const blocks = [
  {
    title: 'Moje cv',
    description: 'Podglad cv wraz z doświadczeniem',
    link: '/CV',
    iconSrc: cvIconSrc,
  },
  {
    title: 'Ćwiczenia',
    description: 'Podglad cv wraz z doświadczeniem',
    link: '/cwiczenia',
    iconSrc: editIconSrc,
  },
  {
    title: 'Blog',
    description: 'wpisy blogowe o technologii front-end',
    link: '/blog',
    iconSrc: '',
  },
  {
    title: 'Tech stack',
    description: 'Stack technologiczny realizowany na kursie',
    link: '/',
    iconSrc: codeIconSrc,
  },
  {
    title: 'FAQ',
    description: 'Odpowiedzi na najczęstsze pytania',
    link: '/faq',
    iconSrc: faqIconSrc,
  },
];

export const Blocks = () => {
  return <div className="blocks">{blocks.map(Blok)}</div>;
};
