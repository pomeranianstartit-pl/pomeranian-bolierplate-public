import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Cwiczenie1MetaData } from './Cwiczenie1/router-data';

import { Cwiczenie2MetaData } from './Cwiczenie2/router-data';
import { routerMetaData as IfStatementsMetaData } from './IfStatements/router-data';
import { routerMetaData as IfStatementsMoreOrLess } from './IfStatementsMoreOrLess/router-data';
import { routerMetaData as IfStatementsMoreOrLessGame } from './IfStatementsMoreOrLessGame/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Cwiczenie1MetaData,
  Cwiczenie2MetaData,
  IfStatementsMetaData,
  IfStatementsMoreOrLess,
  IfStatementsMoreOrLessGame,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
