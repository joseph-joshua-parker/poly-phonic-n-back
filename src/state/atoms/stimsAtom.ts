import {atom} from 'recoil';
import  StimConfig  from '../../models/StimConfig';

export const stimsArrayAtom = atom<Array<StimConfig>>({
    key: 'stims',
    default: []
})

export const stimAtom = (name: string) => atom<StimConfig>({
    key: name,
    default: {name:'', tokens:'', nBack:1, weight: 1},
})