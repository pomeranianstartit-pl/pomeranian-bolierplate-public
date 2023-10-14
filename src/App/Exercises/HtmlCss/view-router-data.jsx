import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataSelectors } from './Selectors/router-data';
import { blockRouterMetaData as blockRouterMetaDateText } from './Text/router-data';
import { blockRouterMetaData as blockRouterMetaDateAnimations } from './Animations/router-data';
import { blockRouterMetaData as blockRouterMetaDateColors } from './Colors/router-data';
import { blockRouterMetaData as blockRouterMateDateOpacity } from './Opacity/router-data';
import { blockRouterMetaData as blockRouterMateDateBackground } from './Background/router-data';
import { blockRouterMetaData as blockRouterMateDateVideoAudioIframe } from './VideoAudioIframe/router-data';
import { blockRouterMetaData as blockRouterMateDateBoxModel } from './BoxModel/router-data';
import { blockRouterMetaData as blockRouterMateDateTables } from './Tables/router-data';
import { blockRouterMetaData as blockRouterMateDateTablesTennis } from './TablesTennis/router-data';
import { blockRouterMetaData as blockRouterMateDatePositioningExercise } from './PositioningExercise/router-data';

export const blockRouterMetaData = [
    blockRouterMetaData121220231, 
    blockRouterMetaDataSelectors, 
    blockRouterMetaDateText, 
    blockRouterMetaDateAnimations, 
    blockRouterMetaDateColors, 
    blockRouterMateDateOpacity,
    blockRouterMateDateBackground,
    blockRouterMateDateVideoAudioIframe,
    blockRouterMateDateBoxModel,
    blockRouterMateDateTables,
    blockRouterMateDateTablesTennis,
    blockRouterMateDatePositioningExercise,


];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
