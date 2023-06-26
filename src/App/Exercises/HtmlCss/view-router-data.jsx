import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { Exercise_exampleMetaData } from './Exercise_example/router-data';
import { SelectorsAndCascadeMetaData } from './SelectorsAndCascade/router-data';
import { GoogleFontsMetaData } from './GoogleFonts/router-data';
import { GoogleFonts2MetaData } from './GoogleFonts2/router-data';
import { TextFundamentsMetaData } from './TextFundaments/router-data';
import { ExerciseBoxModelMetaData } from './ExerciseBoxModel/router-data';
import { TablesMetaData } from './Tables/router-data';
import { Tables2MetaData } from './Tables2/router-data';
import { FloatsMetaData } from './Floats/router-data';
import { FloatsFigmaDesignMetaData } from './FloatsFigmaDesign/router-data';
import { IF_LiczbyMetaData } from './IF_Liczby/router-data';
import { IF_ZadaniaMetaData } from './IF_Zadania/router-data';
import { IF_Zadania2MetaData } from './IF_Zadania2/router-data';

export const blockRouterMetaData = [Exercise_exampleMetaData, SelectorsAndCascadeMetaData, TextFundamentsMetaData, GoogleFontsMetaData, GoogleFonts2MetaData, ExerciseBoxModelMetaData, TablesMetaData, Tables2MetaData, FloatsMetaData, FloatsFigmaDesignMetaData, IF_LiczbyMetaData, IF_ZadaniaMetaData, IF_Zadania2MetaData];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);