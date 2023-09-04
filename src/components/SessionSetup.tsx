import { useState } from 'react';
import {useRecoilState} from 'recoil';

import DeltaButton from './DeltaButton';
import {StimConfig} from '../models/StimConfig';

import { stimsArrayAtom } from '../state/atoms/stimsAtom';

import '../styles/utils.css';

interface SetupProps {
    configs: Array<StimConfig>;
}



const SessionSetup: React.FC<SetupProps> = ({configs}) => {

    const [stims, setStims] = useRecoilState(stimsArrayAtom);
    const addNewStim = (newStim:StimConfig) => setStims([...stims, newStim])

    const stimList = configs.map(({name, tokens, nBack, weight})=>{



        return (
            <div>


            </div>
        )});

    return  <div>
                {stimList}
                <button> + </button>
            </div>
}

export default SessionSetup;