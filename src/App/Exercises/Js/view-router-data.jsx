import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as Boolean } from './Boolean/router-data';
import { blockRouterMetaData as ifSwitch } from './ifSwitch/router-data';
import { blockRouterMetaData as HitTheMoleGame } from './HitTheMoleGame/router-data';
import { blockRouterMetaData as MemoGame } from './MemoGame/router-data';
import { blockRouterMetaData as OOP } from './OOP/router-data';
import { blockRouterMetaData as TryCatchPrototype } from './TryCatchPrototype/router-data';
import { blockRouterMetaData as JSONXMLStorage } from './JSONXMLStorage/router-data';
import { blockRouterMetaData as SavedInput } from './SavedInput/router-data';
import { blockRouterMetaData as Promises } from './Promises/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  Boolean,
  ifSwitch,
  HitTheMoleGame,
  MemoGame,
  OOP,
  TryCatchPrototype,
  JSONXMLStorage,
  SavedInput,
  Promises,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
