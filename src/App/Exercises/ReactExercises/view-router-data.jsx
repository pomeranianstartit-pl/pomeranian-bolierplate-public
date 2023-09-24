import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Blok8MetaData } from './Blok8/router-data';
import { Blok9MetaData } from './Blok9/router-data';
import { ReactProps } from './ReactPropsExercises/router-data';
import { FormMetaData } from './Forms/router-data';
import { BasicFormsMetaData } from './BasicForms/router-data';
import { ReduxMetaData } from './Redux/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Blok8MetaData,
  Blok9MetaData,
  ReactProps,
  FormMetaData,
  BasicFormsMetaData,
  ReduxMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
