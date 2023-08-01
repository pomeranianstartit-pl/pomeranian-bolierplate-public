import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Cwiczenie1MetaData } from './Cwiczenie1/router-data';
import { Cwiczenie2MetaData } from './Cwiczenie2/router-data';
import { Cwiczenie3MetaData } from './Cwiczenie3/router-data';
import { IfStatementsMetaData } from './IfStatements/router-data';
import { IfStatementsMoreorLessMetaData } from './IfStatementsMoreorLess/router-data';
import { MoreOrLessGameMetaData } from './MoreOrLessGame/router-data';
import { HitTheMoleMetaData } from './HitTheMole/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Cwiczenie1MetaData,
  Cwiczenie2MetaData,
  Cwiczenie3MetaData,
  IfStatementsMetaData,
  IfStatementsMoreorLessMetaData,
  MoreOrLessGameMetaData,
  HitTheMoleMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
