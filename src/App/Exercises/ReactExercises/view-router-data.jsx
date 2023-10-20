import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { EventsMetaData } from './Events/router-data';
import { hitTheMoleMetaData} from './HitTheMole/router-date';


export const blockRouterMetaData = [
    SubRouteExampleMetaData, 
    EventsMetaData,
    hitTheMoleMetaData,
  
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
