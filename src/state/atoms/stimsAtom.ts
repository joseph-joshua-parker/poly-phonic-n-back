import {atom, atomFamily} from 'recoil';
import  StimConfig, {defaultConfig}  from '../../models/StimConfig';
import { PARAMS } from '../../models/StimConfig';


export const activeStimsAtom = atom<string>({
    key: 'activeStimsAtom',
    default: ''
})

export const stimConfigsAtom = atomFamily<StimConfig, string>({
    key: 'stimsArrayAtom',
    default: defaultConfig,
})