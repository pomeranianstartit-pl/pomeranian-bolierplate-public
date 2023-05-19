import './styles.css';
import { DashBlockCV } from './DashBlockCV';
import { DashBlockExc } from './DashBlockExc';
import { DashBlockBlog } from './DashBlockBlog';
import { DashBlockTechStack } from './DashBlockTechStack';
import { DashBlockFAQ } from './DashBlockFAQ';

export const DashBlocks = () => {
  return (
    <div>
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
