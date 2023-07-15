import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { Exercise1MetaData } from './Exercise1/router-data';

import { Exercise2MetaData } from './Exercise2/router-data';

import { Exercise3MetaData } from './Exercise3/router-data';

export const blockRouterMetaData = [
    SubRouteExampleMetaData,
    Exercise1MetaData,
    Exercise2MetaData,
    Exercise3MetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
