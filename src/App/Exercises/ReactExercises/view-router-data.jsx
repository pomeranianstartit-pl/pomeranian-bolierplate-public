import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { Cwiczenie1MetaData } from './Cwiczenie1/router-data';
import { Cwiczenie2MetaData } from './Cwiczenie2/router-data';
import { Cwiczenie3MetaData } from './Cwiczenie3/router-data';

export const blockRouterMetaData = [
    Cwiczenie1MetaData,
    Cwiczenie2MetaData,
    Cwiczenie3MetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
