import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { routerMetaData as IfStatementsMetaData } from './IfStatements/router-data';
import { IfStatementsMoreOrLessMetaData } from './IfStatementsMoreOrLess/router-data';
import { GuessMeMetaData } from './GuessMe/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  IfStatementsMetaData,
  IfStatementsMoreOrLessMetaData,
  GuessMeMetaData

];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);