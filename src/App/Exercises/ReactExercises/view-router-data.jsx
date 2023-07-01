import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { routerMetaData as FormsMetaData } from './Forms/router-data';
import { routerMetaData as BasicFormsMetaData } from './BasicForms/router-data';

export const blockRouterMetaData = [
    SubRouteExampleMetaData,
    FormsMetaData,
    BasicFormsMetaData
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
