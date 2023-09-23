import {Stim} from './Stim';

type StimConfig = {
    tokens: string
    name: string
    nBack: number
    weight: number
}

export const defaultConfig: StimConfig ={
    tokens: '',
    name: '',
    nBack: 1,
    weight: 1
}

export default StimConfig;
