import { BlogContetnt } from './Components/BlogContent/BlogContent';
import { BlogFooter } from './Components/BlogFooter/BlogFooter';
import { BlogHeader } from './Components/BlogHeader/BlogHeader';
import './styles.css';

export const BlogCard = () => {
  return (
    <div className="blog-card">
      <BlogHeader />
      <BlogContetnt />
      <BlogFooter />
    </div>
  );
};
