import './styles.css';
import { FAQIcon } from '../Icons/FAQIcon';

export const DashBlockFAQ = () => {
  return (
    <div>
      <div className="dashblockitem">
        <div className="headerDashBlock">FAQ</div>
        <div className="DashBlockIcon">
          <FAQIcon />
        </div>
        <div className="DashBlockText">
          odpowiedzi na najczęściej zadawane pytania
        </div>
        <div className="DashBlockSeeMore">zobacz więcej ❱</div>
      </div>
    </div>
  );
};
