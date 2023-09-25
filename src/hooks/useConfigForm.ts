import StimConfig, {PARAMS, STRING_PARAMS, defaultConfig} from "../models/StimConfig"
import {useEffect, useState} from 'react';
import { stimsArrayAtom } from "../state/atoms/stimsAtom";
import { useRecoilState } from "recoil";
import { NUM_PARAMS } from "../models/StimConfig";
import localforage from "localforage";

const useConfigForm = (name:string)=>{
    
    //Internal State & Logic---------
    const [stimsArray, setStimsArray] = useRecoilState(stimsArrayAtom);
    const currentConfig = name == 'new' 
    ? defaultConfig 
    : stimsArray.filter(stim=>stim.name == name)[0]

    const namesList = stimsArray.map(stim=>stim[STRING_PARAMS.Name]);
    //-------------------------------

    

    const [config, setConfig] = useState<StimConfig>(currentConfig);

        
    //Persistence----
    useEffect(()=>{localforage.setItem('stims', stimsArray)}, [stimsArray])
    //---------------


    //Adding a Stim----
    const addStimConfig = ()=>{
        if(name)    setStimsArray(curr=> ([...curr.filter(stim=>stim.name !=name), config]))
        else        setStimsArray(curr=>([...curr, config]))
    }//----------------



    //Updating a specific Stim on each form input----
    const handleInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const domId = e.target.id;
        if(domId == STRING_PARAMS.Name && namesList.includes(e.target.value)) return;
        setConfig(prev=>({...prev, [e.target.id]:e.target.value}))  
    }

    const handleDelta = (param: NUM_PARAMS, delta: number) =>{
        setConfig(prev=>({...prev, [param]: prev[param]  + delta}))
    }//----------------------------------------------

    

    return {config, setConfig, handleInput, handleDelta, addStimConfig};
}

export default useConfigForm;

