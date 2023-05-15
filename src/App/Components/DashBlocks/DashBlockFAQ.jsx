import './styles.css';
import { FAQIcon } from '../Icons/FAQIcon';

export const DashBlockFAQ = () => {
  return (
    <div>
      <div className="dashblocks">
        <div>FAQ</div>
        <div>
          <FAQIcon />
        </div>
        <div>odpowiedzi na najczęściej zadawane pytania</div>
        <div>zobacz więcej ❱</div>
      </div>
    </div>
  );
};
