import './section-title.css';
import { SectionIcon } from '../SectionIcon';

export const SectionTitle = ({ title, rotatedArrow }) => {
  return (
    <div className="box-title">
      <SectionIcon
        className={`arrow-icon ${rotatedArrow ? 'arrow-icon-rotated' : ''}`}
      />
      {title}
    </div>
  );
};
