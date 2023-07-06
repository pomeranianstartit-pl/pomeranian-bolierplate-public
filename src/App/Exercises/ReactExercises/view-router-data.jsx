import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Cwiczenie1Metadata } from './Cwiczenie1/router-data';
import { Cwiczenie2Metadata } from './Cwiczenie2/router-data';

export const blockRouterMetaData = [SubRouteExampleMetaData, Cwiczenie1Metadata, Cwiczenie2Metadata];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
