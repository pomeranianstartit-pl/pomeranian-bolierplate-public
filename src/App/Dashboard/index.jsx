import './styles.css';
import { Link } from 'react-router-dom';
import avatar from '../Images/avatar.jpg';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-greeting">Hej, tu Patryk 👋</h1>
      <p className="dashboard-description">
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.
      </p>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h2>Moje CV</h2>
          <svg
            className="Icon1"
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="43"
            viewBox="0 0 44 43"
            fill="none"
          >
            <path
              d="M30.9583 37.6251H13.0416C5.87492 37.6251 4.08325 35.8334 4.08325 28.6668V14.3334C4.08325 7.16676 5.87492 5.37509 13.0416 5.37509H30.9583C38.1249 5.37509 39.9166 7.16676 39.9166 14.3334V28.6668C39.9166 35.8334 38.1249 37.6251 30.9583 37.6251Z"
              stroke="#FE3756"
              stroke-width="3.01538"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25.5835 14.3329H34.5418"
              stroke="#FE3756"
              stroke-width="3.01538"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27.3749 21.5003H34.5415"
              stroke="#FE3756"
              stroke-width="3.01538"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M30.9581 28.6668H34.5415"
              stroke="#FE3756"
              stroke-width="3.01538"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.7294 20.2278C17.5204 20.2278 18.9723 18.7759 18.9723 16.9849C18.9723 15.1939 17.5204 13.742 15.7294 13.742C13.9384 13.742 12.4865 15.1939 12.4865 16.9849C12.4865 18.7759 13.9384 20.2278 15.7294 20.2278Z"
              stroke="#FE3756"
              stroke-width="3.01538"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.9999 29.258C21.7491 26.66 19.6887 24.6175 17.0908 24.3846C16.1949 24.295 15.2812 24.295 14.3674 24.3846C11.7695 24.6355 9.70909 26.66 9.45825 29.258"
              stroke="#FE3756"
              stroke-width="3.01538"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>podgląd cv wraz z doświadczeniem</p>
          <Link to="/cv">Zobacz Więcej &rarr;</Link>
        </div>

        <div className="dashboard-card2">
          <h2>Ćwiczenia</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="43"
            viewBox="0 0 44 43"
            fill="none"
          >
            <path
              d="M20.2083 3.58273H16.6249C7.66659 3.58273 4.08325 7.16607 4.08325 16.1244V26.8744C4.08325 35.8327 7.66659 39.4161 16.6249 39.4161H27.3749C36.3333 39.4161 39.9166 35.8327 39.9166 26.8744V23.2911"
              stroke="#292D32"
              stroke-width="3.01538"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M29.2384 5.4108L15.12 19.5291C14.5825 20.0666 14.045 21.1237 13.9375 21.8941L13.1671 27.287C12.8804 29.24 14.26 30.6016 16.2129 30.3329L21.6059 29.5625C22.3584 29.455 23.4154 28.9175 23.9709 28.38L38.0892 14.2616C40.5259 11.825 41.6725 8.99413 38.0892 5.4108C34.5059 1.82746 31.675 2.97413 29.2384 5.4108Z"
              stroke="#292D32"
              stroke-width="3.01538"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27.214 7.43637C28.4144 11.7185 31.7648 15.0689 36.0648 16.2872"
              stroke="#292D32"
              stroke-width="3.01538"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>wszystkie wykonane ćwiczenia</p>
          <a href="x">Zobacz Więcej</a>
        </div>

        <div className="dashboard-card3">
          <h2>Blog</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
          >
            <path
              d="M39.4167 8.36714V29.9926C39.4167 31.7126 38.0192 33.325 36.2992 33.54L35.7079 33.6118C31.8021 34.1314 25.7821 36.12 22.3421 38.0192C21.8762 38.2879 21.1059 38.2879 20.6221 38.0192L20.5504 37.9834C17.1104 36.1022 11.1084 34.1314 7.22051 33.6118L6.70086 33.54C4.98086 33.325 3.58337 31.7126 3.58337 29.9926V8.3492C3.58337 6.21712 5.32124 4.60464 7.45333 4.7838C11.2158 5.08839 16.9133 6.9876 20.1025 8.97635L20.5504 9.24504C21.07 9.56754 21.9301 9.56754 22.4497 9.24504L22.7542 9.04798C23.883 8.34923 25.3163 7.65047 26.875 7.02339V14.3334L30.4584 11.9505L34.0417 14.3334V4.98097C34.5255 4.89139 34.9913 4.83757 35.4213 4.80174H35.5288C37.6609 4.62257 39.4167 6.21714 39.4167 8.36714Z"
              stroke="#23213D"
              stroke-width="2.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.5 9.83627V36.7113"
              stroke="#23213D"
              stroke-width="2.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M34.0417 4.9808V14.3333L30.4583 11.9503L26.875 14.3333V7.02322C29.2221 6.09155 31.8379 5.33914 34.0417 4.9808Z"
              stroke="#23213D"
              stroke-width="2.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>wpisy blogowe o technologii front-end</p>
          <a href="x">Zobacz Więcej</a>
        </div>

        <div className="dashboard-card4">
          <h2> Tech stack</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="43"
            viewBox="0 0 44 43"
            fill="none"
          >
            <path
              d="M16.6251 23.2907C15.4426 23.882 14.4572 24.7599 13.7226 25.8528C13.3106 26.4799 13.3106 27.2682 13.7226 27.8953C14.4572 28.9882 15.4426 29.8661 16.6251 30.4574"
              stroke="#292D32"
              stroke-width="3.01538"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27.7513 23.2907C28.9338 23.882 29.9193 24.7599 30.6538 25.8528C31.0659 26.4799 31.0659 27.2682 30.6538 27.8953C29.9193 28.9882 28.9338 29.8661 27.7513 30.4574"
              stroke="#292D32"
              stroke-width="3.01538"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.6249 39.4161H27.3749C36.3333 39.4161 39.9166 35.8327 39.9166 26.8744V16.1244C39.9166 7.16607 36.3333 3.58273 27.3749 3.58273H16.6249C7.66659 3.58273 4.08325 7.16607 4.08325 16.1244V26.8744C4.08325 35.8327 7.66659 39.4161 16.6249 39.4161Z"
              stroke="#292D32"
              stroke-width="3.01538"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.49548 14.3508L38.9313 14.3329"
              stroke="#292D32"
              stroke-width="3.01538"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>stack technologiczny realizowany na kursie</p>
          <Link to="/techstack">Zobacz Więcej &rarr;</Link>
        </div>

        <div className="dashboard-card5">
          <h2>FAQ</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
          >
            <path
              d="M39.4167 8.36714V29.9926C39.4167 31.7126 38.0192 33.325 36.2992 33.54L35.7079 33.6118C31.8021 34.1314 25.7821 36.12 22.3421 38.0192C21.8762 38.2879 21.1059 38.2879 20.6221 38.0192L20.5504 37.9834C17.1104 36.1022 11.1084 34.1314 7.22051 33.6118L6.70086 33.54C4.98086 33.325 3.58337 31.7126 3.58337 29.9926V8.3492C3.58337 6.21712 5.32124 4.60464 7.45333 4.7838C11.2158 5.08839 16.9133 6.9876 20.1025 8.97635L20.5504 9.24504C21.07 9.56754 21.9301 9.56754 22.4497 9.24504L22.7542 9.04798C23.883 8.34923 25.3163 7.65047 26.875 7.02339V14.3334L30.4584 11.9505L34.0417 14.3334V4.98097C34.5255 4.89139 34.9913 4.83757 35.4213 4.80174H35.5288C37.6609 4.62257 39.4167 6.21714 39.4167 8.36714Z"
              stroke="#23213D"
              stroke-width="2.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.5 9.83627V36.7113"
              stroke="#23213D"
              stroke-width="2.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M34.0417 4.9808V14.3333L30.4583 11.9503L26.875 14.3333V7.02322C29.2221 6.09155 31.8379 5.33914 34.0417 4.9808Z"
              stroke="#23213D"
              stroke-width="2.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>odpowiedzi na najczęstsze pytania</p>
          <a href="x">Zobacz Więcej</a>
        </div>
      </div>
      <aside className="dashboard-aside">
        <div>
          <img
            className="Avatar"
            src={avatar}
            alt="avatar"
            width="90px"
            height="90px"
          />
          <h2>Patryk Idzikowski</h2>
          <p>Warszawa</p>
          <p>
            Email:<br></br> patryk.idzikowski@interia.pl
          </p>
          <p>
            Telefon:<br></br> 66316407*
          </p>
        </div>
      </aside>
    </div>
  );
};

// import { Link } from 'react-router-dom';
// import './styles.css';
// import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';

// const dashboardCards = [
//   {
//     title: 'Moje CV',
//     icon: <PersonalCardIcon />,
//     description: 'Podgląd CV wraz z doświadczeniem',
//     link: '/cv',
//   },
// ];

// export const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <h1 className="dashboard-greeting">Hej, tu Szczepan 👋</h1>
//       <p className="dashboard-description">
//         Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.
//       </p>
//       <div className="dashboard-cards">
//         {dashboardCards.map((card) => {
//           return (
//             <div className="dashboard-card">
//               <h3>{card.title}</h3>
//               {card.icon}
//               <p>{card.description}</p>
//               <Link to={card.link}>zobacz więcej {`>`} </Link>
//             </div>
//           );
//         })}
//       </div>
//       <aside className="dashboard-aside"></aside>
//     </div>
//   );
