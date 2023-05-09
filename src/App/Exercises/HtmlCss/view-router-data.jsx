import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as blockRouterMetaData05052023 } from './SelectorsAndCascade/router-data';
import { blockRouterMetaData as blockRouterMetaData08052023 } from './StandardTags/router-data';
import { blockRouterMetaData as blockRouterMetaData080520231 } from './GoogleFonts/router-data';
import { blockRouterMetaData as blockRouterMetaData09052023 } from './Colors/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  blockRouterMetaData05052023,
  blockRouterMetaData08052023,
  blockRouterMetaData080520231,
  ...blockRouterMetaData09052023,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
