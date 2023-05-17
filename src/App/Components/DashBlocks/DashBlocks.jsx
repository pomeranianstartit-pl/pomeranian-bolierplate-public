import './styles.css';
import { DashBlockCV } from './DashBlockCV';
import { DashBlockExc } from './DashBlockExc';
import { DashBlockBlog } from './DashBlockBlog';
import { DashBlockTechStack } from './DashBlockTechStack';
import { DashBlockFAQ } from './DashBlockFAQ';
import { MyData } from '../MyData/MyData';

export const DashBlocks = () => {
  return (
    <div>
      <div className="dashblocks">
        <p>
          <DashBlockCV />
        </p>
        <p>
          <DashBlockExc />
        </p>
        <p>
          <DashBlockBlog />
        </p>
        <p>
          <DashBlockTechStack />
        </p>
        <p>
          <DashBlockFAQ />
        </p>
      </div>
      <div>
        <p>
          <MyData />
        </p>
      </div>
    </div>
  );
};
