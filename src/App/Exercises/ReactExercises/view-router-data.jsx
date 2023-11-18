import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { EventsMetaData } from './Events/router-data';
import { hitTheMoleMetaData} from './HitTheMole/router-date';
import { memoMetaData } from './Memo/router-date';
import { memoryGameMetaData } from './MemoryGame/router-date';
import { toDoWithServerMetaData} from './ToDoWithServer/router-data';
import { basicFormsMetaData } from './BasicForms/router-data';
import { basicReactHookFormsMetaData } from './BasicReactHookForms/router-data';
import { orderFormMetaData } from './OrderForm/router-data';


export const blockRouterMetaData = [
    SubRouteExampleMetaData, 
    EventsMetaData,
    hitTheMoleMetaData,
    memoMetaData,
    memoryGameMetaData,
    toDoWithServerMetaData,
    basicFormsMetaData,
    basicReactHookFormsMetaData,
    orderFormMetaData,

  
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
