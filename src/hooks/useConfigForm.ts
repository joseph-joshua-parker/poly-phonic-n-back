import StimConfig, {defaultConfig} from "../models/StimConfig"
import {useState} from 'react';

const useConfigForm = ()=>{

    const [config, setConfig] = useState<StimConfig>(defaultConfig);


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setConfig(prev=>({...prev, [e.target.id]:e.target.value}))  
    }

    const deltaParam = (param: string, delta: number) =>{ 
        setConfig(prev=>({...prev, [param]:delta}))
    }

    return {config, setConfig, handleChange, deltaParam};
}

export default useConfigForm;

