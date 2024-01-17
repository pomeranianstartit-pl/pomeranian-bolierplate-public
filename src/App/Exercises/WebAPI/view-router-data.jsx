import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { AsyncAwaitMetaData } from './AsyncAwait/router-data';

export const blockRouterMetaData = [AsyncAwaitMetaData];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
