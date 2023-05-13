import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as blockRouterMetaData12052023 } from './Blok10/router-data';
import { blockRouterMetaData as standardTags } from './StandardTags/router-data';
export const blockRouterMetaData = [blockRouterMetaData121220231,blockRouterMetaData12052023, standardTags];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
