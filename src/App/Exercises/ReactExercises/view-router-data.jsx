import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactRouterEventsMetaData } from './ReactRouterEvents/router-data'
import { Block09MetaData } from './Block09/router-data'
import { MaterialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data'
import { Buttons3MetaData } from './Buttons3/router-data';
import { BTCMetaData } from './BTC/router-data';
import { UseEffectMetaData } from './UseEffect/router-data';

export const blockRouterMetaData = [ReactRouterEventsMetaData, Block09MetaData, Buttons3MetaData, MaterialUIBasicElementsMetaData, BTCMetaData, UseEffectMetaData];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);

