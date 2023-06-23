import './styles.css';

export const Dashboard = () => {
  return (
    <div className="dashboard">
<<<<<<< master
      <h1>Dashboard</h1>
      <p>
        Strona główna kursanta (o sobie, zdjęcie, opis narzędzi wykorzystywanych
        na kursie oraz umejętności zdobytych na kursie)
      </p>
=======
      <header>
      <h1>Hej, tu Klaudia!</h1>
      <p>
      Poniżej znajdziesz najważniejsze informacje na temat mojej działalności
      </p>
      </header>
      <div className="links"></div>
      {availableCards.map((card) => {
        return (
          <DashboardCard
          sectionTitle={card.sectionTitle}
          description={card.description}
          link={card.link}
          icon={card.icon}
          />
        );
      })}
    
     <DashboardCard
    sectionTitle="Ćwiczenia"
    description="wszystkie wykonane ćwiczenia"
    link="/cv"
    icon={<img src={personalCard} alt="business card resume" />}
    />
    <DashboardCard
    sectionTitle="Blog"
    description="wpisy blogowe o technologii front-end"
    link="/cv"
    icon={<img src={personalCard} alt="business card resume" />}
    />
     <DashboardCard
    sectionTitle="Tech stack"
    description="stack technologiczny realizowany na kursie"
    link="/cv"
    icon={<img src={personalCard} alt="business card resume" />}
    />
    <DashboardCard
    sectionTitle="FAQ"
    description="odpowiedzi na najczęstsze pytania"
    link="/cv"
    icon={<img src={personalCard} alt="business card resume" />}
    />

>>>>>>> local
    </div>
  );
};
