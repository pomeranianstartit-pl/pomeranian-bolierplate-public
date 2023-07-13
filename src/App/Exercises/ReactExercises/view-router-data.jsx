import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { Cwiczenie1MetaData } from './Cwiczenie1/router-data';

export const blockRouterMetaData = [Cwiczenie1MetaData];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
