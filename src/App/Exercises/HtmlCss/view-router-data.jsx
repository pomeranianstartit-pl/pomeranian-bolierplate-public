import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as Selectors } from './SelectorsAndCascade/router-data';
import { blockRouterMetaData as CssAnimations } from './CssAnimations/router-data';
import { blockRouterMetaData as Colors } from './Colors/router-data';
import { blockRouterMetaData as ImageFiles } from './ImageFiles/router-data';
import { blockRouterMetaData as Background } from './Backgrounds/router-data';
import { blockRouterMetaData as CssFilter } from './CssFilter/router-data';
import { blockRouterMetaData as MediaFiles } from './MediaFiles/router-data';
import { blockRouterMetaData as BoxModel } from './BoxModel/router-data';
import { blockRouterMetaData as Table } from './HTMLTables/router-data';
import { blockRouterMetaData as TableTennis } from './TablesTennis/router-data';

export const blockRouterMetaData = [
    blockRouterMetaData121220231,
    Selectors,
    CssAnimations,
    Colors,
    ImageFiles,
    Background,
    CssFilter,
    MediaFiles,
    BoxModel,
    Table,
    TableTennis,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
