import {Stim} from './Stim';

export enum STRING_PARAMS {
    Tokens ='tokens',
    Name='name', 
}

export enum NUM_PARAMS {
    nBack='nBack', 
    Weight='weight'
}

export enum BOOL_PARAMS {
    IsUsing='isUsing'
}

export type PARAMS = STRING_PARAMS | NUM_PARAMS | BOOL_PARAMS


type StimConfig = {
    [STRING_PARAMS.Tokens]: string
    [STRING_PARAMS.Name]: string
    [NUM_PARAMS.nBack]: number
    [NUM_PARAMS.Weight]: number
    [BOOL_PARAMS.IsUsing]: boolean
}

export const defaultConfig ={
    [STRING_PARAMS.Name]: '',
    [STRING_PARAMS.Tokens]: '',
    [NUM_PARAMS.nBack]: 1,
    [NUM_PARAMS.Weight]: 1,
    [BOOL_PARAMS.IsUsing]: true
}

export default StimConfig;
