import './styles.css';
import { Stacks } from '../../../Components/Stacks';

export function Exercise() {
  return (
    <>
      <div className="h6-tech-stacks">
        <h6>
          Poniżej znajdziesz tech stack oraz nadzędzia, jakich nauczyłam się
          podczas kursu.
        </h6>
      </div>
      <div className="tech-stacks">
        <Stacks />
      </div>
    </>
  );
}
