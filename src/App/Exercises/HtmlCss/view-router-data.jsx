import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { blockRouterMetaData as StandartTags} from './StandartTags-13-05-23/router-data';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
// import { blockRouterMetaData as blockRouterMetaData130523 } from ' ./Exercise-example-13-05-23/router-data';

export const blockRouterMetaData = [blockRouterMetaData121220231, StandartTags];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
