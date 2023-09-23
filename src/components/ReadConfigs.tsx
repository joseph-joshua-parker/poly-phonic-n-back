import { useState } from "react";
import { useRecoilValue } from "recoil";
import { stimAtom } from "../state/atoms/stimsAtom";

import StimConfig  from "../models/StimConfig";

interface ReadConfigProps {
    stimName:string
}

const ReadConfigs: React.FC<ReadConfigProps> = ({stimName})=>{
    const stim = useRecoilValue(stimAtom(stimName))
    const {tokens, nBack, weight, name} = stim;
    const [isEditing, setIsEditing] = useState(false);
    const toggleEditing = ()=> setIsEditing(current=>!current);

    const ReadConfigs =         
        <div>
            <div>Name: {name}</div>
            <div>Tokens: {tokens}</div>
            <div>nBack: {nBack}</div>
            <div>Weight: {weight}</div>
            <button onClick={toggleEditing}>Edit</button>
        </div>



    return <>
        { isEditing 
            ?  <EditConfigs atomName={name} toggle={toggleEditing}/>
            : ReadConfigs
        }
        </>
    
}

export default ReadConfigs;