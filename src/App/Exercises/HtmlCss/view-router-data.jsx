import { getParsedRouterDataList } from '../../router-data/parseRouterData';

// import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
// import { SelectorsAndCascadesMetaData } from './SelectorsAndCascades/router-data';
import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { TextFundamentsMetaData } from './TextFundaments/router-data';
import { GoogleFontsMetaData } from './GoogleFonts/router-data';
import { CssAnimationMetaData } from './CssAnimation/router-data';
import { ColorsMetaData } from './Colors/router-data';
import { ImageFileMetaData } from './ImageFile/router-data';
import { CssFilterMetaData } from './CssFilter/router-data';
import { MediaFilesMetaData } from './MediaFiles/router-data';
import { BoxModelMetaData } from './BoxModel/router-data';
import { HTMLTablesMetaData } from './HTMLTables/router-data';

// import { SelectorsAndCascadesMetaData } from './SelectorsAndCascades/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  // SelectorsAndCascadesMetaData,
  TextFundamentsMetaData,
  GoogleFontsMetaData,
  CssAnimationMetaData,
  ColorsMetaData,
  ImageFileMetaData,
  CssFilterMetaData, 
  MediaFilesMetaData,
  BoxModelMetaData,
  HTMLTablesMetaData,
  ]


export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
