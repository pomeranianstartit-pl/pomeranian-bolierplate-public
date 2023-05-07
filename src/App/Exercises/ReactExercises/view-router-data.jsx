import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import{ Blok8MetaData} from './Blok8.jsx/router-data';

export const blockRouterMetaData = [SubRouteExampleMetaData,Blok8MetaData]; 
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
