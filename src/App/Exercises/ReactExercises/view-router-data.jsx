import { getParsedRouterDataList } from '../../router-data/parseRouterData';

// importujemy z konkretnego 'router-data.jsx' kolejne cwiczenia zwiazane z reactem - kolejne routy
import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactEventsUseStateMetaData } from './ReactEventsUseState/router-data';

// dodajemy nasz kolejny element META DATA do eksportu
export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactEventsUseStateMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
