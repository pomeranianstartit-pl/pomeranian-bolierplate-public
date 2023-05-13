import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as blockRouterMetaData12052023 } from './Exercise-example-12-05-2023/router-data';
import { blockRouterMetaData as blockRouterMetaDataStandardTags } from './StandardTags/router-data';
import { blockRouterMetaData as blockRouterMetaCssAnimations } from './CssAnimations/router-data';
import { blockRouterMetaData as blockRouterMetaMultimedia } from './ExerciseMultimedia/router-data';
import { blockRouterMetaData as blockRouterMetaImages } from './ExercisesImages/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  blockRouterMetaData12052023,
  blockRouterMetaDataStandardTags,
  blockRouterMetaCssAnimations,
  blockRouterMetaMultimedia,
  blockRouterMetaImages,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
