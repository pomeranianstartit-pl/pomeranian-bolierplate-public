import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';

import { blockRouterMetaData as blockRouterMetaData12052023 } from './Exercise-example-12-05-2023/router-data';

import { blockRouterMetaData as blockRouterMetaData13052023 } from './StandardTags/router-data';

import { blockRouterMetaData as CssAnimations } from './CssAnimations/router-data';
import { blockRouterMetaData as Animation } from './CssAnimation-cw1/router-data';
import { blockRouterMetaData as blockRouterMetaDataExerciseMultimedia } from './Exercise-multimedia/router-data';
import { blockRouterMetaData as Images } from './Exercise-images/router-data';
import { blockRouterMetaData as blockRouterMetaDataBoxModel } from './BoxModel/router-data';
import { blockRouterMetaData as blockRouterMetaDataTable } from './HTMLTables/router-data';
import { blockRouterMetaData as blockRouterMetaDataFloatsAndPositioning } from '../HtmlCss/FloatsAndPositioning/router-data';
import { blockRouterMetaData as blockRouterMetaDataArrayOfObjects } from './ArrayRenderToTable/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  blockRouterMetaData12052023,
  blockRouterMetaData13052023,
  CssAnimations,
  Animation,
  blockRouterMetaDataExerciseMultimedia,
  Images,
  blockRouterMetaDataBoxModel,
  blockRouterMetaDataTable,
  blockRouterMetaDataArrayOfObjects,
  blockRouterMetaDataFloatsAndPositioning,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
