import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Cwiczenie1MetaData } from './Cwiczenie1/router-data';

import { Cwiczenie2MetaData } from './Cwiczenie2/router-data';
import { routerMetaData as IfStatementsMetaData } from './IfStatements/router-data';
import { routerMetaData as IfStatementsMoreOrLess } from './IfStatementsMoreOrLess/router-data';
import { routerMetaData as IfStatementsMoreOrLessGame } from './IfStatementsMoreOrLessGame/router-data';
import { ToDoWithServerMetaData } from './ToDoWithServer/router-data';
import { blockRouterMetaData as LocalDevAndFetch } from './LocalDevAndFetch/router-data';
import { ReactUseRefMetaData } from './ReactUseRef/router-data';
import { FormsMetaData } from './Forms/router-data';
import { BasicFormsMetaData } from './BasicForms/router-data';
import { LibrariesFormMetaData } from './LibrariesForm/router-data';
import { FirebaseLoginFormMetaData } from './FirebaseLoginForm/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Cwiczenie1MetaData,
  Cwiczenie2MetaData,
  IfStatementsMetaData,
  IfStatementsMoreOrLess,
  IfStatementsMoreOrLessGame,
  ToDoWithServerMetaData,
  LocalDevAndFetch,
  ReactUseRefMetaData,
  FormsMetaData,
  BasicFormsMetaData,
  LibrariesFormMetaData,
  FirebaseLoginFormMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
