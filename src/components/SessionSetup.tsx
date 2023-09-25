import { Suspense, useEffect, useState } from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPlay } from '@fortawesome/free-solid-svg-icons';

import ReadConfigs from './ReadConfigs';

import { stimsArrayAtom } from '../state/atoms/stimsAtom';

import '../styles/utils.css';
import localforage from 'localforage';
import StimConfig from '../models/StimConfig';





const SessionSetup= () => {
    const [configs, setConfigs] = useRecoilState(stimsArrayAtom);
    const navigate = useNavigate();
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(
        ()=>{
            localforage.getItem('stims')
                    .then((stims)=>{
                        console.log(stims);
                        setHasLoaded(true);
                        setConfigs(stims as Array<StimConfig>);
                    })
                    .catch(()=>{
                        console.log('no')
                        setHasLoaded(false)
                    })
        }, []
    )



    return (
                <div>
                    
                    {hasLoaded && configs.map( (stim)=> <ReadConfigs key={stim.name} name={stim.name} /> )}
                    
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <button className="button is-large" onClick={()=>navigate(`new-config`)}>
                            <FontAwesomeIcon  icon={faPlus} />
                        </button>

                        <button className="button is-large" onClick={()=>navigate(`playing`)}>
                            <FontAwesomeIcon  icon={faPlay} />
                        </button>
                    </div>

                        
                </div>
            )
}

export default SessionSetup;