import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { MaterialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data';
import { MUITemplateDashboardMetaData } from './MUITemplateDashboard/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  MaterialUIBasicElementsMetaData,
  MUITemplateDashboardMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
