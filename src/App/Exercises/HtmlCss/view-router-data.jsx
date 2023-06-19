import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { Exercise_exampleMetaData as Exercise_exampleMetaData } from './Exercise_example/router-data';
import { SelectorsAndCascadeMetaData as SelectorsAndCascadeMetaData } from './SelectorsAndCascade/router-data';
import { GoogleFontsMetaData as GoogleFontsMetaData } from './GoogleFonts/router-data';
import { GoogleFonts2MetaData as GoogleFonts2MetaData } from './GoogleFonts2/router-data';
import { TextFundamentsMetaData } from './TextFundaments/router-data';
import { ExerciseBoxModelMetaData } from './ExerciseBoxModel/router-data';

export const blockRouterMetaData = [Exercise_exampleMetaData, SelectorsAndCascadeMetaData, TextFundamentsMetaData, GoogleFontsMetaData, GoogleFonts2MetaData, ExerciseBoxModelMetaData];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);