import './styles/footer.css';

const email = 'amadeusz.szewczyk@pomeranian.it';
const phone = '+48 502 667 736';

export function AppFooter() {
  return (
    <footer>
      <div>
        Projekt uzyskał dofinansowanie ze środków Unii Europejskiej z
        Europejskiego Funduszu Rozwoju
      </div>
      <a href={`mailto:${email}`}>{`Email: ${email}`}</a>
      <div>
        Regionalnego w ramach projektu grantowego „Invest in Pomerania 2020”.
      </div>
      <a href={`tel:${phone}`}>{`Tel: ${phone}`}</a>
    </footer>
  );
}
