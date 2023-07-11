import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Cwiczenie1MetaData } from './Cwiczenie1/router-data';
import { TextFundamentals } from '../HtmlCss/TextFundamentals/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Cwiczenie1MetaData,
  TextFundamentals,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
