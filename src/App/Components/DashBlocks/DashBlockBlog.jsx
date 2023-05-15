import './styles.css';
import { BlogIcon } from '../Icons/BlogIcon';
export const DashBlockBlog = () => {
  return (
    <div>
      <div className="dashblocks">
        <div>Blog</div>
        <div>
          <BlogIcon />
        </div>
        <div>wpisy blogowe o technologii frontend</div>
        <div>zobacz więcej ❱</div>
      </div>
    </div>
  );
};
