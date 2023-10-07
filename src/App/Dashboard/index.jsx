import './styles.css';

import DashboardCard from './DasbordCard/DashboardCard';
import useContactInfo from '../../Helpers/useContactInfo';

import PersonalCardIcon from '../Images/tiles/personalcard.svg';
import EditIcon from '../Images/tiles/edit.svg';
import FaqIcon from '../Images/faq.svg';
import CodeIcon from '../Images/tiles/code.svg';
import BlogIcon from '../Images/book-saved.svg';
import wavingHandSign from '../Components/Icons/waving-hand-sign.png';
import InstagramIcon from '../Images/SocialIcons/instagram.svg';
import LinkedInIcon from '../Images/SocialIcons/linkedin.svg';
import GitHubIcon from '../Images/SocialIcons/github.svg';
import CodeWarsIcon from '../Images/SocialIcons/codewars.svg';
import profile from '../Images/prof1m.jpg';
export const Dashboard = () => {
  const { email, phone } = useContactInfo();
  const availableCards = [
    {
      sectionTitle: 'Moje CV',
      icon: <img src={PersonalCardIcon} alt="business card resume" />,
      description: 'podgląd cv wraz z doświadczeniem',
      link: '/cv',
    },
    {
      sectionTitle: ' Ćwiczenia',
      icon: <img src={EditIcon} alt="excercises" />,
      description: 'wszystkie wykonane ćwiczenia',
      link: '/exercises',
    },
    {
      sectionTitle: 'Blog',
      icon: <img src={BlogIcon} alt="business card resume" />,
      description: 'wpisy blogowe o technologii front-end',
      link: '/blog',
    },
    {
      sectionTitle: 'Tech stack',
      icon: <img src={CodeIcon} alt="business card resume" />,
      description: 'stack technologiczny realizowany na kursie',
      link: '/TechStack',
    },
    {
      sectionTitle: 'FAQ',
      icon: <img src={FaqIcon} alt="business card resume" />,
      description: 'odpowiedzi na najczęstsze pytania',
      link: '/faq',
    },
  ];

  const socialProfiles = [
    {
      icon: InstagramIcon,
      url: 'https://www.instagram.com/kmada666/',
      description: 'Instagram od strony fotografii',
    },
    {
      icon: LinkedInIcon,
      url: 'https://www.linkedin.com/in/adam-karcz1984/',
      description: 'LinkedIn - zapraszam do kontaktu!',
    },
    {
      icon: GitHubIcon,
      url: 'https://github.com/Adam-Karcz',
      description: 'GitHub - podejrzyj kod!',
    },
    {
      icon: CodeWarsIcon,
      url: 'https://www.codewars.com/users/Adam-Karcz',
      description: 'CodeWars - (na razie) proste rozkminy do nauki',
    },
  ];
  return (
    <div className="container">
      <div className="Card">
        <div className="social-media">
          {socialProfiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={profile.icon} alt={profile.description} />
            </a>
          ))}
        </div>
        <h2>Adam Karcz</h2>
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-label">Phone:</div>
            <div className="contact-value">{phone}</div>
          </div>
          <div className="contact-item">
            <div className="contact-label">Email:</div>
            <div className="contact-value">{email}</div>
          </div>
          <img
            className="profile-pic"
            src={profile}
            alt="Zdjęcie profilowe"
          ></img>
        </div>
      </div>
      <div className="Head">
        <h3>
          <img src={wavingHandSign} alt="Hi" />
          Cześć, tu Adam!
        </h3>

        <h4>
          Poniżej znajdziesz najważniejsze informacje na temat mojej
          działalności.
        </h4>
      </div>
      <div className="Boxes">
        <div className="dashboard-wrapper">
          {availableCards.map((card) => {
            return (
              <DashboardCard //passing lot of props, to show idea at beggining of the course
                sectionTitle={card.sectionTitle}
                description={card.description}
                link={card.link}
                icon={card.icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
