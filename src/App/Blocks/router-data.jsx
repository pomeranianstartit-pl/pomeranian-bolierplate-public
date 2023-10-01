import { getParsedRouterDataList } from '../router-data/parseRouterData';

import { blockRouterMetaData as block_1_RouterMetaData } from './Block_1/router-data';
import { NoBlockMessage } from './NoBlockMessage';

const blocksAmount = 50;

const getFullListBlocks = (implementedBlocks) => {
  const amountToCreate = blocksAmount - implementedBlocks.length;

  if (amountToCreate <= 0) {
    return implementedBlocks;
  }

  const arr = [...Array(amountToCreate).keys()].map((item, index) => {
    const blockNo = index + implementedBlocks.length + 1;
    return {
      path: `block_${blockNo}`,
      blockTitle: `Blok ${blockNo}`,
      date: null,
      blockNo: blockNo,
      element: <NoBlockMessage />,
      tags: [],
    };
  });

  return [...implementedBlocks, ...arr];
};

export const metaData = getFullListBlocks([block_1_RouterMetaData]);

export const routerData = getParsedRouterDataList(metaData);
