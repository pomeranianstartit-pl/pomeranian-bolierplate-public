import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as CssAnimations } from './CssAnimations/router-data';
import { blockRouterMetaData as CssAnimations2 } from './CssAnimations-2/router-data';
import { blockRouterMetaData as ExerciseMultimedia} from './Exercise-multimedia/router-data';
import { blockRouterMetaData as ExerciseImages} from './Exercise-images/router-data';
import { blockRouterMetaData as Roundimage} from './Roundimage/router-data';
export const blockRouterMetaData = [blockRouterMetaData121220231, CssAnimations2, ExerciseMultimedia, ExerciseImages, Roundimage];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
