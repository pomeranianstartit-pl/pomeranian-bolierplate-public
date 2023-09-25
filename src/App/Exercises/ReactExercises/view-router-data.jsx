import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactOnClickRouterMetaData } from './ReactOnClick/router-data';
import { TextFundamentsRouterMetaData } from '../HtmlCss/TextFundaments/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickRouterMetaData,
  TextFundamentsRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
