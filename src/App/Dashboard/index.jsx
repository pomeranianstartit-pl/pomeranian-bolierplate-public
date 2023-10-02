import { mockData } from './data';

import { DashComp } from './DashboardComponents/index';

import './styles.css';

export const Dashboard = () => {
  function renderComponent(comp) {
    return (
      <DashComp
        title={comp.title}
        img={comp.img}
        description={comp.description}
        more={comp.more}
      />
    );
  }
  return (
    <div className="dashboard">
      <h2>Hej, tu Wojtek</h2>
      <p>
        Ponizej znajdziesz najwazniejsze informacje na temat mojej działalności
      </p>
      <div className="dashboardwrapper">
        <section className="components">
          {mockData.map(renderComponent)}
        </section>
        <section className="profile">
          <div className="photo"></div>
          <p className="name">Irmina Kalinowska</p>
          <p className="city">Gdańsk</p>
          <div className="mail">
            <p>e-mail:</p>
            <p>irminakalinowska0@gmai.com</p>
          </div>
          <div className="phone">
            <p>telefon:</p>
            <p>123 456 789</p>
          </div>
        </section>
      </div>
    </div>
  );
};
