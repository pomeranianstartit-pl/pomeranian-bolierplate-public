import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';

import { blockRouterMetaData as Selectors } from './SelectorsAndCascade/router-data';

import { TextFundamentsMetaData } from './TextFundaments/router-data';

import { GoogleFontsMetaData } from './GoogleFonts/router-data';

import { blockRouterMetaData as Positioning } from './FloatsAndPositioning/router-data';

import { blockRouterMetaData as PositioningExercise } from './FloatsAndPositioningExercise/router-data';

import { CSSAnimationMetaData } from './CSSAnimations/router-data';

export const blockRouterMetaData = [
    blockRouterMetaData121220231,
    Selectors,
    TextFundamentsMetaData,
    GoogleFontsMetaData,
    Positioning,
    PositioningExercise,
    CSSAnimationMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
