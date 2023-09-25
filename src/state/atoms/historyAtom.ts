import { atom } from "recoil";

export const historyAtom = atom<Array<string>>({
        key: 'historyAtom',
        default: []
    })


