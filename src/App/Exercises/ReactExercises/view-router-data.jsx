import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { EventsMetaData } from './Events/router-data';
import { hitTheMoleMetaData} from './HitTheMole/router-date';
import { memoMetaData } from './Memo/router-date';
import { memoryGameMetaData } from './MemoryGame/router-date';


export const blockRouterMetaData = [
    SubRouteExampleMetaData, 
    EventsMetaData,
    hitTheMoleMetaData,
    memoMetaData,
    memoryGameMetaData,
  
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
