import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Cwiczenie1MetaData } from './Cwiczenie1/router-data';
import { TextFundamentalsMetaData } from '../HtmlCss/TextFundamentals/router-data';
import { GoogleFontsMetaData } from '../HtmlCss/Google-fonts/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Cwiczenie1MetaData,
  TextFundamentalsMetaData,
  GoogleFontsMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
