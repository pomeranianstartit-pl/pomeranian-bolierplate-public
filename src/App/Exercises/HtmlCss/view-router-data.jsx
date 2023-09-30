import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { TextFundamentsMetaData } from './TextFundaments/router-data';
import { GoogleFontsMetaData } from './GoogleFonts/router-data';

// import { SelectorsAndCascadesMetaData } from './SelectorsAndCascades/router-data';

export const blockRouterMetaData = [
  TextFundamentsMetaData,
  GoogleFontsMetaData,
  blockRouterMetaData121220231,
  
  // SelectorsAndCascadesMetaData,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
