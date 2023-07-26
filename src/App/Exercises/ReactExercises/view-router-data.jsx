import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { SubRouteExampleMetaData as LoginFormData } from './SignInForm/router-data';

export const blockRouterMetaData = [SubRouteExampleMetaData, LoginFormData];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
