import './styles/footer.css';

const email = 'dominikreszczynski09@gmail.com';
const phone = '+48 516 802 283';

export function AppFooter() {
  return (
    <footer>
      <div>
        Projekt uzyskał dofinansowanie ze środków Unii Europejskiej z
        Europejskiego Funduszu Rozwoju
      </div>
      <a
        style={{ marginRight: '5px' }}
        href={`mailto:${email}`}
      >{`${email}`}</a>
      <div>
        Regionalnego w ramach projektu grantowego „Invest in Pomerania 2020”.
      </div>
      <a href={`tel:${phone}`}>{`${phone}`}</a>
    </footer>
  );
}
