import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Cwiczenie1MetaData } from './Cwiczenie1/router-data';
import { Cwiczenie2MetaData } from './Cwiczenie2/router-data';
export const blockRouterMetaData = [
    SubRouteExampleMetaData,
    Cwiczenie1MetaData,
    Cwiczenie2MetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
