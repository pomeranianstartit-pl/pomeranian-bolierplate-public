import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactOnClickMetaData } from './ReactOnClick/router-data';
import { ReactOnChangeMetaData } from './ReactOnChange/router-data';
export const blockRouterMetaData = [
    SubRouteExampleMetaData, 
    ReactOnClickMetaData,
    ReactOnChangeMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
