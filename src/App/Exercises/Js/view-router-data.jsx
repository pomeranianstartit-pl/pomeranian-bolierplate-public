import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';

import { blockRouterMetaData as blockRouterMetaDataJsComplexTypes } from './Exercise-js-complex-types-js/router-data';

import { blockRouterMetaData as blockRouterMetaDataJsFunctionBasic } from './JsFunctionBasic/router-data';

import { blockRouterMetaData as blockRouterMetaDataBlok22Warmup } from './Blok22Warmup/router-data';

import { blockRouterMetaData as blockRouterMetaDataSetTimeout } from './SetTimeout/router-data';

import { blockRouterMetaData as blockRouterMetaDataVanishString } from './VanishString/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataJsComplexTypes,
  blockRouterMetaDataJsFunctionBasic,
  blockRouterMetaDataBlok22Warmup,
  blockRouterMetaDataSetTimeout,
  blockRouterMetaDataVanishString,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
