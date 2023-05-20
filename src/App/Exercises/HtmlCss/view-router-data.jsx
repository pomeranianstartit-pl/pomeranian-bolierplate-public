import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as blockRouterMetaData12052023 } from './Blok10/router-data';
import { blockRouterMetaData as blockRouterMetaData12052023AAA } from './Blok10AAA/router-data';
import { blockRouterMetaData as standardTags } from './StandardTags/router-data';
import { blockRouterMetaData as CssAnimations } from './CssAnimations/router-data';
import { blockRouterMetaData as CssAnimations2 } from './CssAnimations2/router-data';
import { blockRouterMetaData as exerciseMultimedia } from './Exercise-multimedia/router-data';
import { blockRouterMetaData as exerciseImages } from './Exercise-images/router-data';
import { blockRouterMetaData as exerciseComponents } from './Exercise-components/router-data';
import { blockRouterMetaData as boxModel } from './BoxModel/router-data';
import { blockRouterMetaData as HTMLTables } from './HTMLTables/router-data';
import { blockRouterMetaData as ArrayRenderToTable } from './ArrayRenderToTable/router-data';
import { blockRouterMetaData as FloatsAndPositioning } from './FloatsAndPositioning/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  blockRouterMetaData12052023,
  blockRouterMetaData12052023AAA,
  standardTags,
  CssAnimations,
  CssAnimations2,
  exerciseMultimedia,
  exerciseImages,
  exerciseComponents,
  boxModel,
  HTMLTables,
  ArrayRenderToTable,
  FloatsAndPositioning,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
