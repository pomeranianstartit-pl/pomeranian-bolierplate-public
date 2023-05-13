import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataExerciseMultimedia } from './Exercise-multimedia/router-data';
import { blockRouterMetaData as CssAnimations } from './CssAnimations/router-data';
import { blockRouterMetaData as blockRouterMetaDataExerciseImages } from './Exercise-images/router-data';


export const blockRouterMetaData = [blockRouterMetaData121220231, CssAnimations, blockRouterMetaDataExerciseImages, blockRouterMetaDataExerciseMultimedia];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
