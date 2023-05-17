import './styles.css';
import { BlogIcon } from '../Icons/BlogIcon';
export const DashBlockBlog = () => {
  return (
    <div>
      <div className="dashblockitem">
        <div className="headerDashBlock">Blog</div>
        <div className="DashBlockIcon">
          <BlogIcon />
        </div>
        <div className="DashBlockText">
          wpisy blogowe o technologii frontend
        </div>
        <div className="DashBlockSeeMore">zobacz więcej ❱</div>
      </div>
    </div>
  );
};
