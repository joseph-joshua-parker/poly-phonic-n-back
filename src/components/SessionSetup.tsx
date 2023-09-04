import { useState } from 'react';
import {useRecoilValue} from 'recoil';


import DeltaButton from './DeltaButton';
import {StimConfig} from '../models/StimConfig';
import ReadConfigs from './ReadConfigs';
import AddConfigs from './AddConfigs';


import { stimsArrayAtom } from '../state/atoms/stimsAtom';

import '../styles/utils.css';





const SessionSetup= () => {

    const [addingNewStim, setAddingNewStim] = useState(false);
    const toggleAdding = ()=> setAddingNewStim((current)=>!current); 
    const configs = useRecoilValue(stimsArrayAtom);



    const stimList = configs.map( (stim)=> <ReadConfigs stimName={stim.name} /> );

    return  <div>
                {stimList}

                {addingNewStim
                    ? <AddConfigs toggle={toggleAdding}/>
                    : <button onClick={toggleAdding}> + </button>
                }
                
            </div>
}

export default SessionSetup;