import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { TextFundamentalsMetaData as TextFundamentals } from './Text-fundamentals/router-data';
import { ColorsMetaData } from './Color/router-data';
import { ImageFilesMetaData } from './ImageFiles/router-data';
import { backgroundsMetaData } from './Backgrounds/router-data';
import { CssFilterMetaData } from './CssFilter/router-data';
import { boxModelMetaData } from './BoxModel/router-data';
import { HtmlTablesMetaData } from './HtmlTables/router-data';
import { TableTennisMetaData } from './TableTennis/router-data';
import { ArrayRenderingMetaData } from './ArrayRendering/router-data';
import { ArrayRenderingToTableMetaData } from './ArrayRenderingToTable/router-data';
import { FloatsAndPositioningMetaData } from './FloatsAndPositioning/router-data';
import { MediaQueriesMetaData } from './MediaQueries/router-data';
import { BooleanMetaData } from './Boolean/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  TextFundamentals,
  ColorsMetaData,
  ImageFilesMetaData,
  backgroundsMetaData,
  CssFilterMetaData,
  boxModelMetaData,
  HtmlTablesMetaData,
  TableTennisMetaData,
  ArrayRenderingMetaData,
  ArrayRenderingToTableMetaData,
  FloatsAndPositioningMetaData,
  MediaQueriesMetaData,
  BooleanMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
