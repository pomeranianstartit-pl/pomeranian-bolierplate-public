import './styles.css';
import { Article } from './Article/Article';

export const Blog = () => {
  return (
    <div className="blog">
      <div className="post-container">
        <Article />
      </div>
    </div>
  );
};
