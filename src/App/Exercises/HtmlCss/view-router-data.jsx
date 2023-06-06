import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { blockRouterMetaData as blockRouterMetaData05052023 } from './SelectorsAndCascade/router-data';
import { blockRouterMetaData as blockRouterMetaData08052023 } from './StandardTags/router-data';
import { blockRouterMetaData as blockRouterMetaData08_052023 } from './GoogleFonts/router-data';
import { blockRouterMetaData as blockRouterMetaData08_05_2023 } from './CSSAnimations/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData05052023,
  blockRouterMetaData08052023,
  blockRouterMetaData08_052023,
  blockRouterMetaData08_05_2023,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
