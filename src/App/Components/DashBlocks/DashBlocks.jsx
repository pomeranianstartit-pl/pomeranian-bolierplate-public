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
      <div>
        <MyData className="MyDataPosition" />
      </div>
      <div className="dashblocks">
        <div>
          <DashBlockCV />
        </div>
        <div>
          <DashBlockExc />
        </div>
        <div>
          <DashBlockBlog />
        </div>
        <div>
          <DashBlockTechStack />
        </div>
        <div>
          <DashBlockFAQ />
        </div>
      </div>
    </div>
  );
};
