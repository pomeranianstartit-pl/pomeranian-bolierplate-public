import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { SelectorsAndCascadeMetaData } from './SelectorsAndCascade/router-data';
import { TextFundamentsMetaData } from './TextFundaments/router-data';
import { GoogleFontsMetaData } from './GoogleFonts/router-data';
import { BoxModelMetaData } from './Exercise-Box model/router-data';
import { TablesMetaData } from './Tables/router-data';
import { FloatsMetaData } from './FloatsAndPositioning/router-data';
import { FigmaFloatDesignMetaData } from './FigmaFloatDesign/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  SelectorsAndCascadeMetaData,
  TextFundamentsMetaData,
  GoogleFontsMetaData,
  BoxModelMetaData,
  TablesMetaData,
  FloatsMetaData,
  FigmaFloatDesignMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
