import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { Ćwiczenie1MetaData } from './Ćwiczenie1/router-data';

export const blockRouterMetaData = [Ćwiczenie1MetaData];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
