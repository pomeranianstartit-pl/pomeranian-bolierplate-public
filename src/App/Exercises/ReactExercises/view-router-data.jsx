import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import{ Blok8MetaData} from './Blok8/router-data';
import { Blok9MetaData } from './Blok9/router-data';
import {blockRouterMetaData as Blok10MetaData} from '../HtmlCss/Blok10/router-data'
export const blockRouterMetaData = [SubRouteExampleMetaData,Blok8MetaData,Blok9MetaData, Blok10MetaData]; 
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
