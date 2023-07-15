import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { Exercise1MetaData } from './Exercise1/router-data';

import { Exercise2MetaData } from './Exercise2/router-data';

import { Exercise3MetaData } from './Exercise3/router-data';

import { Exercise4MetaData } from './Exercise4/router-data';

import { Exercise4AdvancedMetaData } from './Exercise4Advanced/router-data';

export const blockRouterMetaData = [
    SubRouteExampleMetaData,
    Exercise1MetaData,
    Exercise2MetaData,
    Exercise3MetaData,
    Exercise4MetaData,
    Exercise4AdvancedMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
